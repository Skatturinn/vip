import Image from "next/image";
import styles from "./cardnavigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Þarf mögulega að skoða þetta fyrir n-skalanleika í framtíðinni
// 		else if tilskipanir eru til þess að raðanir spila raðist rétt
// Mögulega hefði verið betra að vera með class fyrir hver spil en þá missum with nthchild(n) selector
type CardLayout = {
	spil: Array<number>,
	class: string;
}
export function CardLayout({ spil, class: string }: CardLayout) {
	const bakhlid = <Image
		src="/spil/bak.svg"
		alt="Mynd af bakhlið á spili"
		width="250"
		height="350"
		className={styles.bakhlid}
	/>
	let items = [];
	spil.includes(1) && items.push(
		<li className={`${styles.card} ${styles.spil1}`} key={'um'}><Link href='/verkefni/1'>
			<Image
				src="/spil/A-github.svg"
				alt="Um þessa síðu"
				width="250"
				height="350"
				className={styles.framhlid}
			/>
			{bakhlid}
		</Link>
		</li>)

	spil.includes(2) && items.push(
		[
			<li className={`${styles.card} ${styles.spil2}`} key={'kubbur'}><Link href='/tolvuteikningar/kubbur'>
				<Image
					src="/spil/3-kubbur.svg"
					alt="Kubbur"
					width="250"
					height="350"
					className={styles.framhlid}
				/>
				{bakhlid}
			</Link>
			</li>,
			<li className={`${styles.card} ${styles.spil3}`} key={'lestarvagn'}><Link href='/tolvuteikningar/lestarvagn'>
				<Image
					src="/spil/8-lestarvagn.svg"
					alt="Lestarvagn"
					width="250"
					height="350"
					className={styles.framhlid}
				/>
				{bakhlid}</Link>
			</li>
		]);
	spil.includes(3) && items.push(
		[
			<li className={`${styles.card} ${styles.spil4}`} key={'mttur'}><Link href='/myndbond/mttur'>{bakhlid}</Link></li>,
			<li className={`${styles.card} ${styles.spil5}`} key={'vissi'}><Link href='/myndbond/vissi'>{bakhlid}</Link></li>,
			<li className={`${styles.card} ${styles.spil6}`} key={'svoner'}><Link href='/myndbond/svoner'>{bakhlid}</Link></li>
		]);
	return <ul className={`${styles.cardContainer} ${string || ''}`}>{items}</ul>
}
