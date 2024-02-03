'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
// import { useControls } from 'leva'
import Image from "next/image";
import styles from "./ttkubbur.module.scss"
import { hlutur } from "../../util/foll_fyrir_byrtingu"
import { tolvuteikningar, Model } from '../../util/foll_fyrir_byrtingu';
import { useState } from 'react';

export type ihlutir = {
	samsetning: string,
	listi: Array<string>
}
export function ThreeDteikningar({ samsetning, listi }: ihlutir): Array<JSX.Element> {
	const [isMouseDown, setIsMouseDown] = useState(false); // TODO gera þetta að module
	const handleMouseDown = () => {
		setIsMouseDown(true);
	};
	const handleMouseUp = () => {
		setIsMouseDown(false);
	};
	const list = listi.map((stak, numer) => {
		const hlutur = tolvuteikningar(samsetning, stak);
		return (<li key={hlutur.title}>
			<Canvas
				camera={{ position: [0, 0, -0.125], near: 0.015 }}
				className={numer === 0 ? styles.model1 : styles.model}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				<ambientLight intensity={2} />
				<pointLight position={[0, 40, 40]} />
				<Model url={hlutur.model} />
				<OrbitControls autoRotate enableZoom={isMouseDown} />
			</Canvas>
			<Image
				src={hlutur.mynd}
				alt={`Teikningar sem sýna málsetningarnar fyrir modelið: ${hlutur.title}`}
				width="2298" height="1498"
				className={styles.teikning}
			/>
		</li>)
	})
	return list

}