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
	if (spil.includes(1)) {
		items.push(<li className={styles.card} key={'um'}><Link href='/verkefni/1'>
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
	} else if (spil.includes(2)) { // höfum ekki fyrsta spilið byrjum á tvem
		items.push(
			[
				<div key={'empty'}></div> // setjum inn tómt div til að taka upp plásið
			])
	} else if (spil.includes(3)) {
		items.push(
			[
				<div key={'empty'}></div>,
				<div key={'empty1'}></div>,
				<div key={'empty2'}></div>
			])
	}
	spil.includes(2) ? items.push(
		[
			<li className={styles.card} key={'kubbur'}><Link href='/tolvuteikningar/kubbur'>
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
			<li className={styles.card} key={'lestarvagn'}><Link href='/tolvuteikningar/lestarvagn'>
				<Image
					src="/spil/8-lestarvagn.svg"
					alt="Lestarvagn"
					width="250"
					height="350"
					className={styles.framhlid}
				/>
				{bakhlid}</Link>
			</li>
		]) : '';
	spil.includes(3) ? items.push(
		[
			<li className={styles.card} key={'mttur'}><Link href='/myndbond/mttur'>{bakhlid}</Link></li>,
			<li className={styles.card} key={'vissi'}><Link href='/myndbond/vissi'>{bakhlid}</Link></li>,
			<li className={styles.card} key={'svoner'}><Link href='/myndbond/svoner'>{bakhlid}</Link></li>
		]) : '';
	return <ul className={`${styles.cardContainer} ${string || ''}`}>{items}</ul>
}
