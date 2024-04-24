import Link from "next/link"
import Image from "next/image";
import styles from "/src/app/verkefni/verkefni.module.scss"

export default function Page() {
	return <>
		<h1>Taflborðs lyklakippa</h1>
		<section className={styles.sec}>
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v4haus.png"}
					alt="TOP view mynd af .stl skrá fyrir lyklakippu."
					height={520}
					width={800}
				/>
				<figcaption>Mynd af biskups lyklakippu.</figcaption>
			</figure>
			<p>
				Ég var ábyrgur fyrir taflmanna hausunum sem áttu að passa inn í borðið.
				Þegar Sveinn var búin að fræsa það út sendi hann á mig hver breiddinn á þeim ætti að vera til að þeir mundu passa í festinguna.
			</p>
			<p>
				Ég var ábyrgur fyrir taflmanna hausunum sem áttu að passa inn í borðið.
				Þegar Sveinn var búin að fræsa það út sendi hann á mig hver breiddinn á þeim ætti að vera til að þeir mundu passa í festinguna.
			</p>
			<h2>Skölun</h2>
			<p>
				Ég byrjaði á að reyna að gera tafl hausa teikningarnar parametrískt tengdar breidd og lengd á umgjarðarinar og festingarinar.
				Það var reyndist ómögulegt að fá hausanna til að færast til að halda staðsetningu. Ég eyddi öllum festingum og mælingum.
				Náði að gera hausana skalast útfrá parameter sem hét skölun en þeir færðust ekki með umgjörðinni.
			</p>
			<p>Work smarter not harder</p>
			<p>Tók objectanna og skalaði þá til að passa við mælingar frá sveini</p>
			<p>Skalaði þá helmingi minna í z-a ásnum til að þeir mundu sitja í götunum sínum í stað þess að fylla þau alveg.</p>
			<h2>Gat fyrir lyklakippu</h2>
			<p>Þar sem taflborðs hausarnir verða 3dprentaðir getum við búið til göng inni þeim.</p>
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v4hausar.png"}
					alt="ISO sjónar horn af .stl skrá fyrir lyklakippu."
					height={520}
					width={800}
				/>
				<figcaption>Mynd sem sýnir göng inní modeli.</figcaption>
			</figure>
			<p>Á botnfleti hausana gerði ég hring fyri gatið. Á topp flötin teiknaði ég svo annan hring með
				sama ummál og lyklakippa. Færði hringinn fyrir neðan botninn og notaði sweep path fyrir hringinn
				á botninum eftir ferli hringsins á framhliðinni. Þá erum við komin með gat sem lyklakippa passar í
				á hausunum.
			</p>
			<h2>3D prentun</h2>
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/prusa.png"}
					alt="Mynd sem sýnir .stl skrár inní prusa slicer."
					height={520}
					width={800}
				/>
				<figcaption>Undirbúningur fyrir 3d prentun í prusa.</figcaption>
			</figure>
			<p>Þar sem hausarnir eru flatir og fremur stöðugir þarf ekki mikið af supports. Þó er gatið holt og höfum
				við supports þar inni. Prusaslicer tekur við stl fileum frá fusion sem ég raðaði í ferhyrning. Því
				næst er að setja infyllið. Ég hélt mig bara við 15% þar sem þeir eru nægilega þykkir til að brotna ekki
				og kostur að hafa þá léttari en þyngri þar sem þeir verða festir við lyklakippu. Prentið tók um einn og hálfan tíma
			</p>
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v4loka.jpg"}
					alt="Mynd sem sýnir hausana 3dprentaða."
					height={520}
					width={800}
				/>
				<figcaption>Útkoman.</figcaption>
			</figure>
		</section>

		<section className={styles.sec}>
			<table>
				<tr>
					<th>Verkþættir</th>
					<th>Skölun</th>
					<th>Gat fyrir lyklakippu</th>
					<th>3D prentun</th>
				</tr>
				<tr>
					<th>Tími:</th>
					<td>4klst</td>
					<td>30mín</td>
					<td>90mín</td>
				</tr>
			</table>
		</section>
		<section className={styles.sec}>

			<Link href={'https://sveinnmargeir.github.io/Lokaverkefni.html'}>Sjá um verkefni í heild</Link>
		</section>


	</>
}