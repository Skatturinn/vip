import Link from "next/link"
import Image from "next/image";
import styles from "/src/app/verkefni/verkefni.module.scss"

export default function Page() {
	return <>
		<p>VÉL608G</p>
		Sæll hafliði ef þú sérð þetta, þá er síðan ennþá í vinnslu, mátt endilega ýta á eftir mér, fer í þetta við næsta tækifæri
		<section className={styles.sec}>
			<h1>Verkefni 2</h1>
			<h2>Vinylskurður</h2>
			<p>Að skera út límmiða með Roland GS-24 reyndist lítið sem ekkert mál undir handleiðslu Hafliða.
				Að sækja .svg mynd af github repo fyrir þessa síðu vibba henni á USB-kubb, 256gb og alles. Svo er bara að stinga honum inn.
				Getur reynst sumum meira mál en öðrum, minn smellpassaði. Þá er bara að henda hausútlínunum í gamla góða inkscapeið. Setja line thickness
				í 0.02 og scala upp myndina. Loka stærðin var 5cm risi. Þá 5cm í breidd og 8cm í hæð</p>
			<figure className={styles.synidmi}>
				<Image
					src={'/logosvgwhite.svg'}
					alt={'Logo mynd sem eru hvítar höfuðútlínur af 3d skönnuðum haus Elíasar'}
					height={520}
					width={320}
				/>
			</figure>
			<p>Að vera með límmiða á fartölvunni sinni getur gefið lífinu lit. Of mikið er þó afar ósmekklegt. Einnig vill
				maður ekki líma hvað sem er aftaná. Marga límmiðina á ég heima oní skúffu og þó er ég efins um að líma þá á
				eitt né neitt. Hvað standa þeir fyrir og stend ég með því? Svari hver fyrir sig en að líma min eigin límmiða.
				Það get ég og nú hef ég gert. Takk fyrir mig.
			</p>
			<h2></h2>
			{/* <figure className={styles.synidmi}>
				<image
					src="https://fab.cba.mit.edu/classes/863.21/EECS/people/jan/images/0_joints.png"
					alt="Mynd sem sýnir gerðir af press fit fyrir laserskornar plötur"
				/>
			</figure> */}
		</section>


	</>
}