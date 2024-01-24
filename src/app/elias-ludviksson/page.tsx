import styles from "../verkefni/verkefni.module.scss"
import { CardLayout } from "../cardnavigation";

export default function Page() {
	return <>
		<h1>Elías Lúðvíksson</h1>
		<p>Þessi síða inniheldur stutta lýsingu um Elías Lúðvíksson. <br />
			Tilgangur hennar er að vera sýnilegur á leitarvefjum þegar fólk leitar af <q>Elías Lúðvíksson</q></p>
		<section className={styles.sec}>
			<h2>Um mig og ferilskrá</h2>
			<p>Ég er Elías Lúðvíksson, áhuga vefforitari og léttur hansklaufi þó ég seigi sjálfur.</p>
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
		<h1>Sjá efni eftir mig inná þessari síðu</h1>
		<CardLayout spil={[1, 2, 3]} class_string={styles.forsiduspil} /></>
}