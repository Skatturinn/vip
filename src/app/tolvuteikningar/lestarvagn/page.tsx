import { NavBar } from "../../navbar"
import Image from "next/image";
import styles from "./ttlestarvagn.module.scss";
import { CardLayout } from "@/app/cardnavigation";
import { ThreeDteikningarLest } from "./lestarvagnthreejs";
import Link from "next/link";
import ttstyles from "../tolvuteikningar.module.scss"

export default function Page() {
	return <>
		<h1>Lestarvagn</h1>
		<p>Lokaverkefni í áfanganum tölvuteikning og framsetning</p>
		<Link className={ttstyles.tsetthlekk}
			href="/files/annotated-Lokaverkefni_Lestarvagn_ell9.pdf">Skoða pdf af heildar teikningarsetti</Link>
		{/* <iframe src="/files/annotated-Lokaverkefni_Lestarvagn_ell9.pdf">yes</iframe> */}
		<figure className={styles.rammi}>
			<ThreeDteikningarLest samsetning={'lestarvagn'} listi={['lestundirsamsetning']} />
			<figcaption>Líkan af undirsamsetningunni úr lestarvagningum</figcaption>
		</figure>

	</>
}