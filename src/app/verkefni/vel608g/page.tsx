import Link from "next/link"
import Image from "next/image";
import styles from "../verkefni.module.scss"

export default function Page() {
	return <>
		<p>VÉL608G</p><p>Tilgangur þessara síðu er að uppfylla öll innihalds skilyrði fyrir vefsíðu í áfanganum tölvustuddframleiðsla</p>
		<section className={styles.sec}>
			<h1>Verkefni 1</h1>
			<p>Veldu og smíðaðu html sniðmát fyrir vefsíðuna þína, skipulegðu hana með upplýsingum um þig og þína ferilskrá.</p>
			<ol>
				<li><a href="#v11">1. Lýsing á framkvæmd</a></li>
				<li><a href="#v12">2. Óskir varðandi áfanga</a></li>
				<li><a href="#v13">3. Notkun á git</a></li>
			</ol>
			<h2 id="v11">1. Sjá um þessa síðu á /verkefni/um</h2>
			<a href="/verkefni/um">Þetta er hlekkur sem vísar þangað
			</a>
			<h2>2. Hvað vill ég fá út úr áfanganum?</h2>
			<p>Meiri skilning á hvernig hugmyndir verða hlutum. Vingast við kennarann Hafliða svo ég geti fengið meðmæli frá honum ef þarf á að halda í framtíðinni.
				Lokaverkefnis ákvarðanir í fyrstu viku finnst mér full snemmt. Gerir maður ekki bara
				eitthvað handbært og sniðugt.
			</p>
			<h2>3. Notkun á git</h2>
			<p>Ég hef verið með github account síðan á seinustu önn. Setti upp tölvuna mína með ssh tengingu og er búin að tengja VSCODE við github.
				Finnst mikið þægilegra að notast við vscode. Þar getum maður séð breytingarnar sem maður er að committa í lista af skjölum sem maður hefur breytt.
				Kann skipanirnar, í versta falli er líka alltaf hægt að finna þær einhverstaðar á netinu. Mikið betra að geta farið yfir öll skjölin
				á listanum í git og breytingarnar en að notast við skipanirnar.
			</p>
			<code>git add . <br />
				git commit -m stutt lysing a breytingum <br />
				git push</code>
			<p>Þar sem síðan mín er Next js app og nostast við react jsx element þá setti ég hana í hýsingu hjá vercel en ekki github.
				Kosturinn við þetta er að ég hef bakenda fyrir fyrirspurnir og annað sjá <br /><a href="/verkefni/um">um þessa síðu</a>.

			</p>
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
		</section></>
}