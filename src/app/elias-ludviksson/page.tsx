import styles from "../verkefni/verkefni.module.scss"
import { CardLayout } from "../cardnavigation";
import Image from "next/image";
import elias from "./elias.module.scss"

export default function Page() {
	return <>
		<div className={elias.heading}>
			<Image
				src="/myndir/ummig.jpg"
				alt="hér er mynd af Elíasi þegar hann var ungur og fallegur"
				width="1425" height="1522"
				className={elias.profile}
			/>
			<h1>Elías Lúðvíksson</h1>
			<p>Þessi síða inniheldur stutta lýsingu um mig.</p>
		</div>
		<section className={styles.sec}>
			<h2>Um mig og ferilskrá</h2>
			<p>Ég er Elías Lúðvíksson, áhuga vefforitari og léttur hansklaufi þó ég seigi sjálfur. Hef stundað myndbands og hljóðgerð eins og annar hver maður með netsamband
				á tuttugustu á fyrstu öldinni. Hef þó alltaf reynd að fara lengra gera betur og meira.
			</p>
			<p>Fyrir ýtarlegri upplýsingar hafðu samband með því að senda póst á contact@elli.vip eða með því að fylla í formið á <br />
				<a href="/contact">hafðu samband</a> .</p>
			<h3>Starfsreynsla</h3>
			<dl>
				<dt>Sérfræðingur á vélbúnaðardeild Skattsins</dt>
				<dd>Sumarstarf 2023</dd>
				<dt>Starfsmaður á söludeild hjá Útgáfufélaginu stundinn ehf.</dt>
				<dd>Sumarstarf 2022</dd>
				<dt>Sumarstarfsliði hjá Grasagarði Reykjavíkur</dt>
				<dd>Sumarstarf 2019 & 2020</dd>
				<dt>Starfsmaður hjá Melabúðinni</dt>
				<dd>Fullt starf haust 2019 til sumars 2020</dd>
			</dl>
			<h3>Menntun</h3>
			<dl>
				<dt>Menntaskólinn í Reykjavík</dt>
				<dd>2019</dd>
				<dt>BS í Vélaverkfræði hjá Háskóla Íslands</dt>
				<dd>í vinnslu</dd>
			</dl>
		</section>
		<aside className={styles.sec}>
			<a href="/#spil">Sjá efni eftir mig inná þessari síðu</a>
		</aside>
	</>
}