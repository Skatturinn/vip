'use client'
import Image from "next/image";
import styles from "./cardnavigation.module.scss";
import Link from "next/link";

// Þarf mögulega að skoða þetta fyrir n-skalanleika í framtíðinni
// 		else if tilskipanir eru til þess að raðanir spila raðist rétt
// Mögulega hefði verið betra að vera með class fyrir hver spil en þá missum with nthchild(n) selector
type CardLayout = {
	spil: Array<number>,
	class_string: string;
}

const flipCards = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, bool: boolean) => {
	const current = event.currentTarget as HTMLLIElement;
	const parent = current.parentElement as HTMLUListElement;
	parent.childNodes.forEach((stak) => {
		if (stak != current) {
			const node = stak.childNodes[0] as HTMLAnchorElement;
			if (node instanceof Element) {
				bool ? node.classList.add(styles.unselected) : node.classList.remove(styles.unselected);
			}
		}
	})
}

const Card = ({ href_val, src_val, alt_val, style_string }: { href_val: string, src_val: string, alt_val: string, style_string: string }) => {
	return <li className={`${styles.card} ${style_string}`}
		onMouseEnter={(event) => flipCards(event, true)}
		onMouseLeave={(event) => flipCards(event, false)}
	><Link href={href_val}>
			<Image
				src={"/spil/" + src_val + ".svg"}
				alt={alt_val}
				width="250"
				height="350"
				className={styles.framhlid}
			/>
			<Image
				src="/spil/bak.svg"
				alt="Mynd af bakhlið á spili"
				width="250"
				height="350"
				className={styles.bakhlid}
			/>
		</Link>
	</li>
}

export function CardLayout({ spil, class_string }: CardLayout) {
	let items = [];
	spil.includes(1) && items.push(
		[
			<Card href_val={'/verkefni/um'} src_val={'A-github'} alt_val={'Um þessa síðu'} key={'um'} style_string={styles.spil1} />
			,
			<Card href_val={'/verkefni/vel608g'} src_val={'joker'} alt_val={'Vel608g'} key={'vel608g'} style_string={styles.spil7} />
		])

	spil.includes(2) && items.push(
		[
			<Card href_val={'/tolvuteikningar/kubbur'} src_val={'3-kubbur'} alt_val={'Kubbur'} key={'kubbur'} style_string={styles.spil2} />
			,
			<Card href_val={'/tolvuteikningar/lestarvagn'} src_val={'8-lestarvagn'} alt_val={'Lestarvagn'} key={'lestarvagn'} style_string={styles.spil3} />
		]);
	spil.includes(3) && items.push(
		[
			<Card href_val={'/myndbond/mttur'} src_val={'k'} alt_val={'Mættur'} key={'mttur'} style_string={styles.spil4} />
			,
			<Card href_val={'/myndbond/vissi'} src_val={'q'} alt_val={'Vissi'} key={'vissi'} style_string={styles.spil5} />
			,
			<Card href_val={'/myndbond/svoner'} src_val={'j'} alt_val={'Svoner'} key={'svoner'} style_string={styles.spil6} />
		]);

	return <ul className={`${styles.cardContainer} ${class_string || ''}`}>
		{items}
	</ul>
}

type LitaInntak = {
	liti: Array<string>
}

export function Litaspil({ liti }: LitaInntak) {
	const listi: Array<Array<JSX.Element>> = [];
	liti.forEach((stak, nr) => {
		listi.push([<li className={`${styles.card} ${styles.litaspil}`} key={nr}
			style={{ backgroundColor: stak }}>
			<p style={{ backgroundColor: '#0F0E16', textAlign: 'center', }}>{stak}</p>
		</li>])
	})
	return <ul className={`${styles.cardContainer}`} >{listi}</ul>
}