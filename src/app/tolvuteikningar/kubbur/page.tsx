import { NavBar } from "../../navbar"
import Image from "next/image";
import styles from "./ttkubbur.module.scss";
import { CardLayout } from "@/app/cardnavigation";

export default function Page() {
	return <><NavBar />
		<main>
			{/* <CardLayout /> */}
			<ol className={styles.teikningasett}>
				<li>
					<Image
						src="/tolvuteikningar_myndir/kubbur/kubbur.png"
						alt="Mynd sem sýnir samsetningu kubbs"
						width="2298" height="1498"
						className={styles.teikning}
					/>
				</li>
				<li>
					<Image
						src="/tolvuteikningar_myndir/kubbur/festing.png"
						alt="Mynd sem sýnir málsetningar miðju festingar kubbsins sem heldur öllum hliðunum saman."
						width="2298" height="1498"
						className={styles.teikning}
					/>
				</li>
				<li>
					<Image
						src="/tolvuteikningar_myndir/kubbur/midja.png"
						alt="Mynd sem sýnir málsetningar midju kubb hliðar samsetningu kubbsins"
						width="2298" height="1498"
						className={styles.teikning}
					/>
				</li>
				<li>
					<Image
						src="/tolvuteikningar_myndir/kubbur/hlid.png"
						alt="Mynd sem sýnir málsetningar hliðar kubbsins úr samsetningu hliðar kubbsins"
						width="2298" height="1498"
						className={styles.teikning}
					/>
				</li>
				<li>
					<Image
						src="/tolvuteikningar_myndir/kubbur/horn.png"
						alt="Mynd sem sýnir málsetningar horn kubbsins úr samsetningu hliðar kubbsins"
						width="2298" height="1498"
						className={styles.teikning}
					/>
				</li>
			</ol>
		</main>
	</>
}