'use client'
import { Canvas } from "@react-three/fiber";
import { tolvuteikningar, Model } from "../foll_fyrir_byrtingu"
import { ihlutir } from "../kubbur/kubburthreejs";
import { OrbitControls } from "@react-three/drei";
import styles from "./ttlestarvagn.module.scss";
import { useState } from "react";

export function ThreeDteikningarLest({ samsetning, listi }: ihlutir): JSX.Element {
	const stak = listi[0]; // smágoofy en leifir okkur að endurnota kóðan af kubbnum 
	const hlutur = tolvuteikningar(samsetning, stak);
	const [isMouseDown, setIsMouseDown] = useState(false);
	const handleMouseDown = () => {
		setIsMouseDown(true);
	};
	const handleMouseUp = () => {
		setIsMouseDown(false);
	};
	return (<>
		<Canvas camera={{ position: [0, 0, 1000], near: 0.015, far: 100000 }} className={styles.vagn}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}>
			<ambientLight intensity={2} />
			<pointLight position={[0, 40, 40]} />
			<Model
				url={hlutur.model}
			/>
			<OrbitControls autoRotate enableZoom={isMouseDown} />
		</Canvas></>)
}