import { NavBar } from "../../navbar"
import Image from "next/image";
import styles from "./ttkubbur.module.scss";
import { ThreeDteikningar } from "./kubburthreejs";
import { Metadata } from "next";
import Link from "next/link";
import ttstyles from "../tolvuteikningar.module.scss"
export const metadata: Metadata = {
	title: "Elías Lúðvíksson kubbur",
	description: "Málsetningar á kubba samsetningu ásamt þrívíddar líkönum af samsetningu og íhlutum - Elias Ludviksson / Elli.vip",
};

export default function Page() {
	return <>
		<h1>Kubbur</h1>
		<p>Allar málsetningar eru í mm</p>
		<ol className={styles.teikningasett}>
			<ThreeDteikningar samsetning={'kubbur'} listi={['kubbur', 'festing', 'midja', 'horn', 'hlid']} />
		</ol>
		<Link
			href="/files/Teikningasett-kubbs-RemasteredJan2024.pdf" className={ttstyles.tsetthlekk}>Skoða pdf</Link>

	</>
}