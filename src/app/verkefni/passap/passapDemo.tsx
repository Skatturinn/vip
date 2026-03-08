"use client";

import React, { useState, useEffect } from 'react';
import styles from './passap.module.css';

type ViewState = 'STATUS' | 'INFO' | 'PATTERN' | 'FILE_BROWSER' | 'WIFI' | 'IMAGE_CONFIG';
type PopupState = 'NONE' | 'WARNING' | 'NEEDLE_CONFIG' | 'PATTERN_PREVIEW';
type ImageConfigStep = 'PHOTO' | 'DITHERED';

interface PatternMatrix extends Array<number[]> { }

// ============================================================================
// LOCALSTORAGE
// ============================================================================

const savePattern = (pattern: PatternMatrix) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('userPatternMatrix', JSON.stringify(pattern));
	}
};

const loadPattern = (): PatternMatrix | null => {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('userPatternMatrix');
		if (stored) {
			try {
				return JSON.parse(stored);
			} catch (e) {
				return null;
			}
		}
	}
	return null;
};

// ============================================================================
// IMAGE PROCESSING (Exact saebba.ts)
// ============================================================================

function findNearestColor(value: number, colors: number[]): number {
	return colors.reduce((prev, curr) =>
		Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
	);
}

async function imageToMatrix(
	imageUrl: string,
	stitches: number,
	numColors: 1 | 2 | 3 | 4 = 2
): Promise<number[][]> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = 'anonymous';

		img.onload = () => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d')!;

			const heightLengthRatio = img.height / img.width;
			const rows = Math.round(stitches * heightLengthRatio);

			canvas.width = stitches;
			canvas.height = rows;
			ctx.drawImage(img, 0, 0, stitches, rows);
			const imageData = ctx.getImageData(0, 0, stitches, rows);

			const matrix: number[][] = [];
			for (let y = 0; y < rows; y++) {
				const row: number[] = [];
				for (let x = 0; x < stitches; x++) {
					const i = (y * stitches + x) * 4;
					const gray = (0.299 * imageData.data[i] + 0.587 * imageData.data[i + 1] + 0.114 * imageData.data[i + 2]) / 255;
					row.push(gray);
				}
				matrix.push(row);
			}

			let colors: number[];
			if (numColors === 1) {
				colors = [0, 1];
			} else {
				colors = Array.from({ length: numColors }, (_, i) => i / (numColors - 1));
			}

			for (let y = 0; y < rows; y++) {
				for (let x = 0; x < stitches; x++) {
					const oldPixel = matrix[y][x];
					const newPixel = findNearestColor(oldPixel, colors);
					matrix[y][x] = newPixel;
					const quantError = oldPixel - newPixel;

					if (x + 1 < stitches) matrix[y][x + 1] += quantError * 7 / 16;
					if (y + 1 < rows) {
						if (x - 1 >= 0) matrix[y + 1][x - 1] += quantError * 3 / 16;
						matrix[y + 1][x] += quantError * 5 / 16;
						if (x + 1 < stitches) matrix[y + 1][x + 1] += quantError * 1 / 16;
					}
				}
			}

			const finalMatrix = matrix.map(row =>
				row.map(ditheredValue => {
					if (numColors === 1) {
						return ditheredValue === 0 ? 1 : 0;
					}
					const index = colors.findIndex(c => Math.abs(c - ditheredValue) < 1e-6);
					return numColors - index;
				})
			);

			resolve(finalMatrix);
		};

		img.onerror = () => reject(new Error('Failed to load image'));
		img.src = imageUrl;
	});
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PassapKiosk() {
	const [view, setView] = useState<ViewState>('STATUS');
	const [popup, setPopup] = useState<PopupState>('NONE');
	const [currentLine, setCurrentLine] = useState(0);
	const [patternMatrix, setPatternMatrix] = useState<PatternMatrix | null>(null);
	const [motorRunning, setMotorRunning] = useState(false);
	const [needleStart, setNeedleStart] = useState(-40);
	const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');
	const [numColors, setNumColors] = useState<1 | 2 | 3 | 4>(2);

	useEffect(() => {
		const stored = loadPattern();
		if (stored) {
			setPatternMatrix(stored);
		}
	}, []);

	const totalLines = patternMatrix?.length || 0;

	return (
		<div className={styles.passapRootScope} style={{ position: 'relative', overflow: 'hidden', width: '480px', height: '320px' }}>
			{view === 'STATUS' && (
				<STATUSView
					setView={setView}
					currentLine={currentLine}
					setCurrentLine={setCurrentLine}
					totalLines={totalLines}
					patternMatrix={patternMatrix}
					setPopup={setPopup}
					motorRunning={motorRunning}
					setMotorRunning={setMotorRunning}
					needleStart={needleStart}
				/>
			)}

			{view === 'INFO' && <INFOView setView={setView} />}
			{view === 'PATTERN' && <PATTERNView setView={setView} />}
			{view === 'WIFI' && <WIFIView setView={setView} />}
			{view === 'FILE_BROWSER' && (
				<FileBrowserView
					setView={setView}
					onImageSelected={(imageUrl) => {
						setSelectedImageUrl(imageUrl);
						setView('IMAGE_CONFIG');
					}}
				/>
			)}

			{view === 'IMAGE_CONFIG' && (
				<ImageConfigView
					imageUrl={selectedImageUrl}
					setView={setView}
					onPatternCreated={(pattern, width, colors) => {
						savePattern(pattern);
						setPatternMatrix(pattern);
						setCurrentLine(0);
						setNeedleStart(-Math.floor(width / 2));
						setNumColors(colors);
						setPopup('WARNING');
					}}
				/>
			)}

			{/* Popups use ABSOLUTE positioning */}
			{popup === 'WARNING' && (
				<WarningPopup
					onClose={() => {
						setPopup('NONE');
						setView('STATUS');
					}}
					onContinue={() => setPopup('NEEDLE_CONFIG')}
				/>
			)}

			{popup === 'NEEDLE_CONFIG' && (
				<NeedleConfigPopup
					needleStart={needleStart}
					setNeedleStart={setNeedleStart}
					width={patternMatrix?.[0]?.length || 80}
					numColors={numColors}
					onClose={() => {
						setPopup('NONE');
						setView('STATUS');
					}}
					onSubmit={() => {
						setPopup('NONE');
						setView('STATUS');
					}}
				/>
			)}

			{popup === 'PATTERN_PREVIEW' && patternMatrix && (
				<PatternPreviewPopup
					pattern={patternMatrix}
					onClose={() => setPopup('NONE')}
				/>
			)}
		</div>
	);
}

// ============================================================================
// STATUS VIEW
// ============================================================================

interface StatusViewProps {
	setView: (view: ViewState) => void;
	currentLine: number;
	setCurrentLine: (line: number) => void;
	totalLines: number;
	patternMatrix: PatternMatrix | null;
	setPopup: (popup: PopupState) => void;
	motorRunning: boolean;
	setMotorRunning: (running: boolean) => void;
	needleStart: number;
}

function STATUSView({
	setView,
	currentLine,
	setCurrentLine,
	totalLines,
	patternMatrix,
	setPopup,
	motorRunning,
	setMotorRunning,
	needleStart
}: StatusViewProps) {
	const [inputValue, setInputValue] = useState(currentLine);

	useEffect(() => {
		setInputValue(currentLine);
	}, [currentLine]);

	return (
		<div className={styles.grid}>
			<button className={`${styles.button} ${styles.buttonChange}`} style={{ gridColumn: '1', gridRow: '1' }}>Snúa ↔</button>
			<div className={`${styles.button} ${styles.info}`} onClick={() => setView('INFO')} style={{ gridColumn: '3', gridRow: '1' }}>
				<p className={styles.h2}>Info/Error</p>
				<p className={styles.p}>✅⛔</p>
			</div>
			<div className={`${styles.buttonGo} ${styles.stop} ${styles.button}`} onClick={() => setMotorRunning(!motorRunning)} style={{ gridColumn: '5', gridRow: '1' }}>Motor<br />{motorRunning ? '❚❚' : '▶'}</div>
			<div style={{ gridColumn: '5', gridRow: '2 / 4', width: '50%', height: '50%', marginRight: '-4rem', zIndex: 69, alignSelf: 'center', justifySelf: 'center', fontSize: '0.75rem', fontWeight: '400' }} onClick={() => patternMatrix && setPopup('PATTERN_PREVIEW')} className={`${styles.button} ${styles.buttonChange}`}>Skoða Vistað Munstur</div>
			<PatternTable currentLine={currentLine} totalLines={totalLines} pattern={patternMatrix} needleStart={needleStart} />
			<div className={`${styles.pattern} ${styles.button}`} onClick={() => setView('PATTERN')} style={{ gridColumn: '1', gridRow: '4' }}>
				<p className={styles.h2}>Pattern</p>
				<p className={styles.p}>Velja,Eyða,Breyta</p>
			</div>
			<div className={styles.counter}>
				<button type="button" onClick={() => setInputValue(Math.max(0, inputValue - 1))} className={`${styles.uppDown} ${styles.button} ${styles.arial}`} style={{ height: '100%', fontSize: '2rem' }}>-</button>
				<button type="button" onClick={() => setInputValue(Math.min(totalLines, inputValue + 1))} className={`${styles.uppDown} ${styles.button} ${styles.arial}`} style={{ height: '100%', fontSize: '2rem' }}>+</button>
				<input type="number" min="0" step="1" max={totalLines} value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value) || 0)} style={{ width: '80px', fontSize: '2rem', paddingRight: '0', paddingLeft: '1rem', textAlign: 'center', borderRadius: '16px' }} placeholder="0" className={styles.arial} />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1em 1fr' }}>
					<p style={{ fontSize: '0.875rem' }}>Lína:<strong>{currentLine}/{totalLines}</strong></p>
					<button type="button" className={`${styles.buttonChange} ${styles.button}`} style={{ width: 'fit-content', padding: '0.25rem 0.75rem' }} onClick={() => setCurrentLine(inputValue)}>Breyta</button>
				</div>
			</div>
		</div>
	);
}

// ============================================================================
// PATTERN TABLE
// ============================================================================

interface PatternTableProps {
	currentLine: number;
	totalLines: number;
	pattern: PatternMatrix | null;
	needleStart: number;
}

function PatternTable({ currentLine, totalLines, pattern, needleStart }: PatternTableProps) {
	if (!pattern || pattern.length === 0) {
		return (
			<table className={styles.taflann} style={{ gridRow: '2/4', maxHeight: '160px' }}>
				<thead id="bed"></thead>
				<tbody id="munstur">
					<tr style={{ display: 'block', padding: '3em 0' }}>
						<td style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.8, width: '100%' }}>Ekkert munstur í vinnslu.</td>
					</tr>
				</tbody>
			</table>
		);
	}

	const visibleRows = 7;
	const patternWidth = pattern[0]?.length || 0;
	const needleEnd = needleStart + patternWidth;
	const startLineIndex = currentLine - 4;

	return (
		<>
			<div style={{ gridRow: '2', gridColumn: '1/6', display: 'flex', justifyContent: 'space-between', padding: '0 1rem', fontSize: '0.875rem', height: '20px' }}>
				<span>nr {needleStart}</span>
				<span>{needleEnd - 1}</span>
			</div>
			<table className={styles.taflann} style={{ gridRow: '2/4', maxHeight: '160px', marginTop: '20px' }}>
				<thead id="bed"></thead>
				<tbody id="munstur">
					{Array.from({ length: visibleRows }).map((_, i) => {
						const patternRowIndex = startLineIndex + i;
						const rowData = (patternRowIndex >= 0 && patternRowIndex < pattern.length) ? pattern[patternRowIndex] : null;
						const gridRowClass = `gridrow${i + 1}`;

						if (!rowData) {
							return <tr key={i} className={gridRowClass}><th></th></tr>;
						}

						return (
							<tr key={i} className={gridRowClass}>
								<th style={{ minWidth: '2em' }}>{patternRowIndex + 1}</th>
								{rowData.map((val, idx) => (
									<td key={idx} className={val > 0 ? styles.activeNeedle : styles.inactiveNeedle}></td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

// ============================================================================
// IMAGE CONFIG VIEW - EXACT from screenshots
// ============================================================================

interface ImageConfigViewProps {
	imageUrl: string;
	setView: (view: ViewState) => void;
	onPatternCreated: (pattern: PatternMatrix, width: number, colors: 1 | 2 | 3 | 4) => void;
}

function ImageConfigView({ imageUrl, setView, onPatternCreated }: ImageConfigViewProps) {
	const [step, setStep] = useState<ImageConfigStep>('PHOTO');
	const [numColors, setNumColors] = useState<1 | 2 | 3 | 4>(2);
	const [colors, setColors] = useState(['#FFFFFF', '#000000', '#6D86E3', '#E3C46D']);
	const [width, setWidth] = useState(42);
	const [generatedPattern, setGeneratedPattern] = useState<PatternMatrix | null>(null);
	const [isGenerating, setIsGenerating] = useState(false);

	const handleGenerate = async () => {
		setIsGenerating(true);
		try {
			const pattern = await imageToMatrix(imageUrl, width, numColors);
			setGeneratedPattern(pattern);
			setStep('DITHERED');
		} catch (error) {
			console.error('Failed to generate pattern:', error);
			alert('Failed to generate pattern');
		} finally {
			setIsGenerating(false);
		}
	};

	const handleCreatePattern = () => {
		if (generatedPattern) {
			onPatternCreated(generatedPattern, width, numColors);
			setView('STATUS');
		}
	};

	const colorPalette: { [key: number]: string } = {
		0: 'transparent',
		1: colors[0],
		2: colors[1],
		3: colors[2],
		4: colors[3]
	};

	return (
		<div className={styles.grid} style={{ gridTemplateRows: '80px 40px 40px 40px 40px 80px' }}>
			<div className={`${styles.button} ${styles.borderItem}`} style={{ gridRow: '1', gridColumn: '1' }} onClick={() => setView('FILE_BROWSER')}>
				<h2 className={styles.h2}>Til baka 🏡</h2>
			</div>
			<div style={{ gridColumn: '3', gridRow: '1', fontSize: '0.65rem', alignSelf: 'center', padding: '0.5rem' }}>
				👈 Til baka í<br />📁: C:\Users\Notandi\Pictures\
			</div>

			<div className={styles.borderItem} style={{ gridRow: '2/5', gridColumn: '1/6', display: 'grid', gridTemplateColumns: '60px 60px 360px', maxHeight: '160px', padding: 0 }}>
				<div style={{ width: '60px', display: 'grid', gridTemplateRows: 'repeat(4, 40px)' }}>
					{[1, 2, 3, 4].map(num => (
						<label key={num} className={styles.button} style={{ borderRadius: 0, backgroundColor: numColors === num ? '#ddd' : '#fff', fontSize: '0.75rem', cursor: 'pointer' }} onClick={() => setNumColors(num as 1 | 2 | 3 | 4)}>
							{num} lit{num > 1 ? 'ir' : 'ur'}
						</label>
					))}
				</div>
				<div style={{ width: '60px', display: 'grid', gridTemplateRows: 'repeat(4, 40px)', placeItems: 'center' }}>
					{[0, 1, 2, 3].map(idx => (
						<input key={idx} type="color" value={colors[idx]} onChange={(e) => { const newColors = [...colors]; newColors[idx] = e.target.value; setColors(newColors); }} style={{ height: '100%', width: '100%', border: 'none', padding: 0 }} />
					))}
				</div>
				<div style={{ width: '360px', height: '160px', display: 'grid', placeItems: 'center', backgroundColor: '#fff' }}>
					{step === 'PHOTO' ? (
						<img src={imageUrl} alt="Preview" style={{ objectFit: 'contain', maxWidth: '358px', maxHeight: '158px' }} />
					) : (
						generatedPattern && (
							<div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(generatedPattern[0]?.length || 0, 120)}, 3px)`, gap: 0 }}>
								{generatedPattern.slice(0, 53).flatMap(row =>
									row.slice(0, 120).map((val, idx) => (
										<div key={idx} style={{ width: '3px', height: '3px', backgroundColor: colorPalette[val] }} />
									))
								)}
							</div>
						)
					)}
				</div>
			</div>

			<div style={{ gridRow: '6', gridColumn: '1/6', display: 'grid', gridTemplateColumns: '80px 80px 160px 160px', gap: 0, height: '100%' }}>
				<button className={`${styles.button} ${styles.uppDown}`} style={{ height: '100%', fontSize: '32px' }} onClick={() => setWidth(Math.max(1, width - 1))}>-</button>
				<button className={`${styles.button} ${styles.uppDown}`} style={{ height: '100%', fontSize: '32px' }} onClick={() => setWidth(Math.min(179, width + 1))}>+</button>
				<div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<input type="number" min="1" max="179" value={width} onChange={(e) => setWidth(parseInt(e.target.value) || 42)} style={{ textAlign: 'center', fontSize: '64px', padding: 0, width: '100%', height: '100%', border: '1px solid black', borderRadius: '16px' }} />
					<span style={{ position: 'absolute', bottom: '5px', right: '15px', fontSize: '16px', fontWeight: 'bold', pointerEvents: 'none' }}>nálar</span>
				</div>
				{step === 'PHOTO' ? (
					<button className={`${styles.button} ${styles.buttonGo}`} onClick={handleGenerate} disabled={isGenerating}>
						{isGenerating ? 'Vinnsla...' : 'Búa til munstur 😎?'}
					</button>
				) : (
					<button className={`${styles.button} ${styles.buttonChange}`} onClick={() => setStep('PHOTO')} style={{ fontSize: '0.875rem' }}>
						🤔 Breyta munstur??
					</button>
				)}
			</div>

			{step === 'DITHERED' && (
				<button className={`${styles.button} ${styles.buttonGo}`} onClick={handleCreatePattern} style={{ gridRow: '1', gridColumn: '5', fontSize: '0.875rem' }}>
					😎 Gera munstur
				</button>
			)}
		</div>
	);
}

function INFOView({ setView }: { setView: (view: ViewState) => void }) {
	return <div className={styles.grid}><button className={`${styles.button} ${styles.borderItem}`} onClick={() => setView('STATUS')}>Til baka</button></div>;
}

function PATTERNView({ setView }: { setView: (view: ViewState) => void }) {
	return (
		<div className={styles.grid}>
			<button className={`${styles.button} ${styles.borderItem}`} style={{ gridRow: '1', gridColumn: '1' }} onClick={() => setView('STATUS')}>Til baka 🏡</button>
			<button className={styles.button} onClick={() => setView('FILE_BROWSER')} style={{ gridRow: '2', gridColumn: '1/6' }}>💾 Velja mynd</button>
			<div style={{ gridRow: '4', gridColumn: '1/6', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
				<button className={styles.button} onClick={() => { localStorage.removeItem('userPatternMatrix'); window.location.reload(); }}>Eyða Munstur</button>
			</div>
		</div>
	);
}

function FileBrowserView({ setView, onImageSelected }: { setView: (view: ViewState) => void, onImageSelected: (url: string) => void }) {
	return (
		<div className={styles.grid}>
			<button className={`${styles.button} ${styles.borderItem}`} onClick={() => setView('PATTERN')}>Til baka</button>
			<ol style={{ gridColumn: '1/6', gridRow: '2/5', padding: '1rem', overflowY: 'scroll', listStyle: 'none' }}>
				<li><button className={styles.button} onClick={() => onImageSelected('https://www.elli.vip/myndir/elias.jpg')} style={{ width: '100%', padding: '0.75rem' }}>elias.jpg 🖼️</button></li>
			</ol>
		</div>
	);
}

function WIFIView({ setView }: { setView: (view: ViewState) => void }) {
	return <div className={styles.grid}><button onClick={() => setView('INFO')}>Til baka</button></div>;
}

function WarningPopup({ onClose, onContinue }: { onClose: () => void, onContinue: () => void }) {
	return (
		<>
			<div onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 98 }} />
			<div style={{ position: 'absolute', top: '20px', left: '20px', width: '440px', height: '280px', backgroundColor: '#f2f2ef', border: '1px solid #1d481d', borderRadius: '1em', padding: '0.75rem', zIndex: 99 }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
					<button onClick={onClose} className={`${styles.button}`} style={{ background: 'linear-gradient(to bottom right, white, rgb(255, 105, 97))', width: '60px', height: '45px', fontSize: '1.5rem', padding: 0 }}>✖</button>
					<h2 style={{ flex: 1, textAlign: 'center', fontSize: '1.25rem' }}>Athugið! 🤨</h2>
					<button onClick={onContinue} className={`${styles.button} ${styles.buttonGo}`} style={{ width: '60px', height: '45px', fontSize: '1.25rem', padding: 0 }}>👉</button>
				</div>
				<ol style={{ fontSize: '0.75rem', paddingLeft: '1.25rem', lineHeight: '1.4' }}>
					<li>Var sleðið í upphafsstöðu þegar arduino fékk straum?</li>
					<li>Er ég tengdur Arduino?</li>
					<li>Er mótorinn stilltur á áttina til hægri?</li>
					<li>Þú ert að fara að stilla upphafsnál og byrja að prjóna</li>
				</ol>
			</div>
		</>
	);
}

function NeedleConfigPopup({ needleStart, setNeedleStart, width, numColors, onClose, onSubmit }: {
	needleStart: number, setNeedleStart: (n: number) => void, width: number, numColors: number, onClose: () => void, onSubmit: () => void
}) {
	return (
		<>
			<div onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 98 }} />
			<div style={{ position: 'absolute', top: '20px', left: '20px', width: '440px', height: '280px', backgroundColor: '#f2f2ef', border: '1px solid #1d481d', borderRadius: '1em', padding: '0.75rem', zIndex: 99 }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
					<button onClick={onClose} className={styles.button} style={{ background: 'linear-gradient(to bottom right, white, rgb(255, 105, 97))', width: '70px', height: '50px', fontSize: '1.5rem', padding: 0 }}>✖</button>
					<h2 style={{ flex: 1, textAlign: 'center', fontSize: '1.25rem' }}>Prjónum! 🧶</h2>
					<button onClick={onSubmit} className={`${styles.button} ${styles.buttonGo}`} style={{ width: '70px', height: '50px', fontSize: '1.25rem', padding: 0 }}>👉</button>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr 1fr 1fr', gap: '0.25rem', marginBottom: '0.5rem' }}>
					<button onClick={() => setNeedleStart(needleStart - 10)} className={styles.button}>-10</button>
					<button onClick={() => setNeedleStart(needleStart - 1)} className={styles.button}>-1</button>
					<div style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #1d481d', borderRadius: '16px' }}>{needleStart}</div>
					<button onClick={() => setNeedleStart(needleStart + 1)} className={styles.button}>+1</button>
					<button onClick={() => setNeedleStart(needleStart + 10)} className={styles.button}>+10</button>
				</div>
				<button onClick={onSubmit} className={`${styles.button} ${styles.buttonGo}`} style={{ width: '100%', marginTop: '0.5rem' }}>Byrja! 🪡</button>
			</div>
		</>
	);
}

function PatternPreviewPopup({ pattern, onClose }: { pattern: PatternMatrix, onClose: () => void }) {
	const [pixelSize, setPixelSize] = useState(2);
	const colorPalette: { [key: number]: string } = { 0: 'transparent', 1: '#000000', 2: '#6D86E3', 3: '#E3C46D', 4: '#FFFFFF' };

	return (
		<>
			<div onClick={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 98 }} />
			<div style={{ position: 'absolute', top: '10px', left: '10px', width: '460px', height: '300px', backgroundColor: '#f2f2ef', border: '1px solid #1d481d', borderRadius: '1em', padding: '0.5rem', zIndex: 99, display: 'flex', flexDirection: 'column' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
					<button onClick={onClose} className={styles.button} style={{ background: 'linear-gradient(to bottom right, white, rgb(255, 105, 97))', width: '60px', height: '45px', fontSize: '1.5rem', padding: 0 }}>✖</button>
					<h2 style={{ flex: 1, textAlign: 'center' }}>Vistað Munstur</h2>
					<div style={{ display: 'flex', gap: '0.25rem' }}>
						<button onClick={() => pixelSize > 1 && setPixelSize(pixelSize - 1)} className={styles.button} style={{ width: '35px', height: '35px', padding: 0 }}>-</button>
						<button onClick={() => setPixelSize(pixelSize + 1)} className={styles.button} style={{ width: '35px', height: '35px', padding: 0 }}>+</button>
					</div>
				</div>
				<div style={{ flex: 1, overflow: 'auto', border: '1px solid #1d481d', borderRadius: '8px', backgroundColor: '#fff' }}>
					<div style={{ display: 'grid', gridTemplateColumns: `repeat(${pattern[0]?.length || 0}, ${pixelSize}px)`, gap: 0 }}>
						{pattern.flat().map((colorIndex, idx) => (
							<div key={idx} style={{ width: `${pixelSize}px`, height: `${pixelSize}px`, backgroundColor: colorPalette[colorIndex] }} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}