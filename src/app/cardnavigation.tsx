import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";


const spjold = {
	verkefni: {
		eitt: {
			href: '/verkefni/1',
			teksti: 'Um þessa síðu'
		}

	}
}


// Þarf mögulega að skoða þetta fyrir n-skalanleika í framtíðinni
export function CardLayout(a) {
	// const pathname = usePathname();
	// console.log(a)
	// const isCurrent = (href: string): string => {
	// 	const a = pathname.split('/').map(el => '/' + el)
	// 	console.log(a)
	// 	return ''
	// }
	// ['/verkefni/1', '/tolvuteikningar/kubbur', '/tolvuteikningar/lestarvagn', '/myndbond/mttur', '/myndbond/vissi', '/myndbond/svoner']

	// isCurrent('/verkefni')


	return <ul className={styles.cardContainer}>
		<li className={styles.card}><Link href='/verkefni/1'>Um þessa síðu</Link></li>
		<li className={styles.card}><Link href='/tolvuteikningar/kubbur'>Kubbur</Link></li>
		<li className={styles.card}><Link href='/tolvuteikningar/lestarvagn'>Lestarvagn</Link></li>
		<li className={styles.card}><Link href='/myndbond/mttur'></Link></li>
		<li className={styles.card}><Link href='/myndbond/vissi'></Link></li>
		<li className={styles.card}><Link href='/myndbond/svoner'></Link></li>
	</ul>
}