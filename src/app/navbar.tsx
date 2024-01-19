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
			window.removeEventListener('scroll', scrollHeader)
		}
	})

	return header
}

let s = 0; // smá goofy

function ReturnHomeNav() {
	const [menu, setMenu] = useState(false);
	const reveal = () => {
		const ns = scrollY;
		if (ns > 30 && s > ns) {
			setMenu(true)
		} else {
			setMenu(false)
		}
		s = ns;
	}
	useEffect(() => {
		window.addEventListener('scroll', reveal)
		return () => {
			window.removeEventListener('scroll', reveal)
		}
	})
	return menu
}

export function NavBar() {
	const h = FixedHomeNav();
	const m = ReturnHomeNav();
	const [NavButton, setNavButton] = useState(false);
	const NB = () => {
		if (NavButton) {
			setNavButton(false)
		} else {
			setNavButton(true)
		}
		return NavButton
	}
	const NL = () => {
		setNavButton(false);
		return NavButton
	}

	const pathname = usePathname();
	const isCurrent = (href: string): string => {
		return pathname.split('/').map(el => '/' + el).includes(href) ? "active" : ""
	}
	return <header>
		<nav className={NavButton ? `${styles.navWindow__header}` : ''}>
			<ul className={NavButton ? `${styles.navWindow}` : `${styles.navGrid} ${m && h ? styles.navSticky : ''}`}>
				<li onClick={NL}>
					<Link href="/">
						<Image
							src="/logosvgwhite.svg"
							alt="Elías Lúðviksson/Elli.vip logo"
							width="32"
							height="52"
							className={NavButton ? '' : h ? styles.logoHomeNav__fixed : styles.logoHomeNav}
						/>
					</Link></li>
				<li className={isCurrent('/verkefni')} onClick={NL}><Link href='/verkefni'>Verkefni</Link></li>
				<li className={isCurrent('/tolvuteikningar')} onClick={NL}><Link href='/tolvuteikningar'> Tölvuteikningar</Link></li>
				<li className={isCurrent('/myndbond')} onClick={NL}><Link href='/myndbond'>Myndbönd</Link></li>
				<li className={isCurrent('/contact')} onClick={NL}><Link href='/contact'><strong>Hafðu samband</strong></Link></li>
				<li ><button className={styles.valmyndNav}>
					<Image
						src="/valmynd.svg"
						alt="Valmynd"
						width={50}
						height={50}
						onClick={NB}
					/>
				</button></li>
			</ul>
		</nav>
	</header >
} 