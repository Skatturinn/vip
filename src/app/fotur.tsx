import Image from "next/image";
import styles from "./fotur.module.scss"

export function Fotur() {
	return <>
		<footer>
			<a>
				<figure className={styles.fotur}>
					<Image
						src="/foot.svg"
						alt="Elías Lúðviksson/Elli.vip logo"
						width="790"
						height="790"
						className={styles.fotur__mynd}
					/>
					<figcaption className={styles.fotur__caption}>
						Elías Lúðvíksson
					</figcaption>
				</figure>
			</a>
		</footer>
	</>
}