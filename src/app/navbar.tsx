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

let s = 0;

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
		// let s = 0;
		window.addEventListener('scroll', reveal)
		return () => {
			window.removeEventListener('scroll', reveal)
		}
	})
	return menu
}

function ValmyndNavToggle() {
	const [val, setVal] = useState(false);
	const check = () => {
		if (window.screen.width <= 1349) {
			setVal(true)
		} else {
			setVal(false)
		}
	}
	useEffect(() => {
		addEventListener("resize", check);
		check()
	})
	return val
}
// console.log(ValmyndNavToggle())

export function NavBar() {
	const h = FixedHomeNav();
	const m = ReturnHomeNav();

	const pathname = usePathname();
	const isCurrent = (href: string): string => {
		return pathname.split('/').map(el => '/' + el).includes(href) ? "active" : ""
	}
	return <header>
		<nav>
			<ul className={`${styles.navGrid} ${m && h ? styles.navSticky : ''}`}>
				<li>
					<Link href="/">
						<Image
							src="/logosvgwhite.svg"
							alt="Elías Lúðviksson/Elli.vip logo"
							width="32"
							height="52"
							className={h ? styles.logoHomeNav__fixed : styles.logoHomeNav}
						/>
					</Link></li>
				<li className={isCurrent('/verkefni')}><Link href='/verkefni'>Verkefni</Link></li>
				<li className={isCurrent('/tolvuteikningar')}><Link href='/tolvuteikningar'> Tölvuteikningar</Link></li>
				<li className={isCurrent('/myndbond')}><Link href='/myndbond'>Myndbönd</Link></li>
				<li className={isCurrent('/contact')}><Link href='/contact'><strong>Hafðu samband</strong></Link></li>
				<li><button className={styles.valmyndNav}><Image src="/valmynd.svg"
					alt="Valmynd"
					width={50}
					height={50}
				/>
				</button></li>
			</ul>
		</nav>
	</header >
} 