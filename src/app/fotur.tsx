import Image from "next/image";
import styles from "./fotur.module.scss"
import Link from "next/link";
export function Fotur() {
	return <>
		<footer>
			<Link
				href={'/elias-ludviksson'}>
				<figure className={styles.fotur}>
					<Image
						src="/foot.svg"
						alt="Elías Lúðviksson/Elli.vip logo"
						width="790"
						height="790"
						className={styles.fotur__mynd}
					/>
					<figcaption className={styles.fotur__caption}>
						Elías Lúðvíksson <br />
						<div className={styles.hide}>Um mig</div>
					</figcaption>
				</figure>
			</Link>
		</footer>
	</>
}