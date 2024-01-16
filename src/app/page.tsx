import Image from "next/image";
import styles from "./page.module.scss";
import { NavBar } from "./navbar";
import Link from "next/link";
import { CardLayout } from "./cardnavigation";

export default function Home() {
	return (
		<>
			<NavBar />
			<main className={styles.klassi}>
				<div className={styles.forsidumynd}>
					<Image
						src="/main_page.svg"
						alt="hér er mynd af Elíasi sem teiknikall"
						width="1280" height="696"
					/>
					<Image
						src="/hand_writing_black.svg"
						alt="Elli.vip"
						width="400" height="200"
						className={styles.krot}
					/>
				</div>
				<CardLayout />
			</main>
		</>
	);
}
