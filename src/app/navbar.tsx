"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";

function FixedHomeNav() {
	const [header, setHeader] = useState(false);

	const scrollHeader = () => {
		if (window.scrollY >= 20) {
			setHeader(true)
		} else {
			setHeader(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHeader)

		return () => {
			window.addEventListener('scroll', scrollHeader)
		}
	})

	return header
}


export function NavBar() {
	const h = FixedHomeNav()

	const pathname = usePathname()
	const isCurrent = (href: string): string => {
		return pathname == href ? "active" : ""
	}
	return <header>
		<nav>
			<ul className={styles.navGrid}>
				<li>
					<Link href="/">
						<Image
							src="/logosvgwhite.svg"
							alt="Elli.vip logo"
							width="32"
							height="52"
							className={h ? styles.logoHomeNav__fixed : styles.logoHomeNav}
						></Image>
					</Link></li>
				<li><Link href='/verkefni' className={isCurrent('/verkefni')}>Verkefni</Link></li>
				<li><Link href='/tolvuteikningar' className={isCurrent('/tolvuteikningar')}>Tölvuteikningar</Link></li>
				<li><Link href='/myndbond' className={isCurrent('/myndbond')}>Myndbönd</Link></li>
				<li><Link href='/contact' className={isCurrent('/contact')}><strong>Hafðu samband</strong></Link></li>
			</ul>
		</nav>
	</header>
} 