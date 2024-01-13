import Image from "next/image";
import styles from "./page.module.scss";
import { NavBar } from "./navbar";

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
					// className={styles.forsidumynd}
					></Image>
				</div>
			</main>
		</>
	);
}
