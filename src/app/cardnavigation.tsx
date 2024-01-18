import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Þarf mögulega að skoða þetta fyrir n-skalanleika í framtíðinni
type CardLayout = {
	spil: Array<number>;
}
export function CardLayout({ spil }: CardLayout) {
	let items = [];
	if (spil.includes(1)) {
		items.push(<li className={styles.card} key={'um'}><Link href='/verkefni/1'>Um þessa síðu</Link></li>)
	} else if (spil.includes(2)) {
		items.push(
			[
				<div key={'empty'}></div>
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
			<li className={styles.card} key={'kubbur'}><Link href='/tolvuteikningar/kubbur'>Kubbur</Link></li>,
			<li className={styles.card} key={'lestarvagn'}><Link href='/tolvuteikningar/lestarvagn'>Lestarvagn</Link></li>
		]) : '';
	spil.includes(3) ? items.push(
		[
			<li className={styles.card} key={'mttur'}><Link href='/myndbond/mttur'></Link></li>,
			<li className={styles.card} key={'vissi'}><Link href='/myndbond/vissi'></Link></li>,
			<li className={styles.card} key={'svoner'}><Link href='/myndbond/svoner'></Link></li>
		]) : '';
	return <ul className={styles.cardContainer}>{items}</ul>
}
