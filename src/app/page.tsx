import Image from "next/image";
import styles from "./page.module.scss";
import { NavBar } from "./navbar";
import { CardLayout } from "./cardnavigation";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className={styles.klassi}>
				<div className={styles.forsidumynd}>
					<Image
						src="/main_page.svg"
						alt="hér er mynd af Elíasi sem teiknikall"
						width="1280" height="696"
						className="hero"
					/>
					<Image
						src="/hand_writing_black.svg"
						alt="Elli.vip"
						width="400" height="200"
						className={styles.krot}
					/>
				</div>
				<div id="spil">
					<CardLayout spil={[1, 2, 3]} class_string={styles.forsiduspil} />
				</div>

			</div>
			<Link
				href={'/Elias-Ludviksson'}
				className={styles.ummig}
			>
				Um mig
			</Link>
		</>
	);
}
