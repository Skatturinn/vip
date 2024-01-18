'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
// import { useControls } from 'leva'
import Image from "next/image";
import styles from "./ttkubbur.module.scss"
import { hlutur } from "../foll_fyrir_byrtingu"
import { tolvuteikningar, Model } from '../foll_fyrir_byrtingu';

type ihlutir = {
	samsetning: string,
	listi: Array<string>
}
export function ThreeDteikningar({ samsetning, listi }: ihlutir): Array<JSX.Element> {
	const list = listi.map((stak) => {
		const hlutur = tolvuteikningar(samsetning, stak);
		return (<li key={hlutur.title}>
			<Canvas camera={{ position: [0, 0, -0.125], near: 0.015 }} className={styles.model}>
				<ambientLight intensity={2} />
				<pointLight position={[0, 40, 40]} />
				<Model
					url={hlutur.model}
				/>
				<OrbitControls autoRotate enablePan={false} enableZoom={false} />
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