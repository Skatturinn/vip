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
			<h2>Um mig </h2>
			<p>Ég er Elías Lúðvíksson, áhuga vefforitari og léttur hansklaufi þó ég seigi sjálfur. Hef stundað myndbands og hljóðgerð eins og annar hver maður með netsamband
				á tuttugustu og fyrstu öldinni. Hef þó alltaf reynt að fara lengra, gera betur og meira.
			</p>
			<p>Fyrir ýtarlegri upplýsingar hafðu samband með því að senda póst á contact@elli.vip eða með því að fylla í formið á
				<a href="/contact">hafðu samband</a>.</p>
			<h2>Ferilskrá</h2>
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
			<h3>Hugbúnaðarfærni</h3>
			<p>Kann almennt að læra sjálfstætt á tölvuforrit eftir þörf.</p>
			<h4>Vefforitun</h4>
			<ul className={elias.hbflisti}>
				<li>Next.js</li>
				<li>Node.js</li>
				<li>React</li>
				<li>Javascript</li>
				<li>CSS</li>
				<li>SCSS</li>
				<li>Html</li>
			</ul>
			<h4>Gagnavinnsla og umsjón</h4>
			<ul className={elias.hbflisti}>
				<li>Matlab</li>
				<li>Rstudio</li>
				<li>Python</li>
				<li>DK</li>
				<li>Active directory</li>
			</ul>
			<h4>Hönnun</h4>
			<ul className={elias.hbflisti}>
				<li>Autodesk Inventor</li>
				<li>AutoCAD</li>
				<li>Solidworks</li>
				<li>Blender</li>
			</ul>
		</section>
		<aside className={styles.sec}>
			<a href="/#spil">Sjá efni eftir mig inná þessari síðu</a>
		</aside>
	</>
}