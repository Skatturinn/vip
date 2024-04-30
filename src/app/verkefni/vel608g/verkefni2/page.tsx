import Link from "next/link"
import Image from "next/image";
import styles from "/src/app/verkefni/verkefni.module.scss"

export default function Page() {
	return <>
		<h1>Verkefni 2</h1>
		<p>Þessi síða inniheldur efni um verkefni 2 í tölvustuddriframleiðslu</p>
		<p>VÉL608G</p>
		<section className={styles.sec}>
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
				<figcaption>elli.vip logo</figcaption>
			</figure>
			<p>Að vera með límmiða á fartölvunni sinni getur gefið lífinu lit. Of mikið er þó afar ósmekklegt. Einnig vill
				maður ekki líma hvað sem er aftaná. Marga límmiðina á ég heima oní skúffu og þó er ég efins um að líma þá á
				eitt né neitt. Hvað standa þeir fyrir og stend ég með því? Svari hver fyrir sig en að líma min eigin límmiða.
				Það get ég og nú hef ég gert. Takk fyrir mig.
			</p>
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v2_limmidi.jpg"}
					alt="Mynd sem sýnir límmiðanna á fartölvunni minni."
					height={520}
					width={800}
				/>
				<figcaption>Límmiðar komnir á fartölvuna.</figcaption>
			</figure>
		</section>
		<section className={styles.sec}>
			<h2>Parametrísk hönnun fyrir pressfit</h2>
			Verkefnið felst í því að hanna þrívíðan hlut sem á að vera settur saman með pressfit tengingum. Á að minnstakosti þrem
			stöðum og helst með þrem mismunandi gerðum af tengingum. Hönnunin þarf að vera parametrískt því þykkt plötu sem á að notast
			við í pressfitinu er breytileg og hefur það áhrif á festingarnar sem notast við þykktina.
			<h3>Hvað er pressfit</h3>
			Pressfit er tenging sem helst saman að mestu úr núningi og spennu. Ég fann mynd af netinu þar sem sýnt er mynd af mismunandi
			pressfit tengingum.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/0_joints.jpg"}
					alt="Mynd sem sýnir gerðir af press fit fyrir laserskornar plötur"
					height={520}
					width={800}
				/>
				<figcaption><a href="https://fab.cba.mit.edu/classes/863.21/EECS/people/jan/images/0_joints.png">Gerðir af pressfitum.</a></figcaption>
			</figure>
			Af myndinni valdi ég að nota press-fit, finger og wedge tengingarnar.
			<h3>Hönnuninn</h3>
			Mig vantar eitthvað til að henga herða tré á til að geyma hinar ýmsu flíkur í loftinu.
			Með það til hliðsjónar að við þurfum að hafa þrjá tengi punkta og helst þrjár mismunandi tengingar.
			Hanna ég einhverskonar hangi apparat úr 4 teikningum með tengingunum sem ég valdi af fyrri mynd.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/paragif.gif"}
					alt="Gif sem sýnir teikningar og hluti í fusion"
					height={520}
					width={800}
				/>
				<figcaption>Teikningar fyrir samsetningu</figcaption>
			</figure>
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/parametrar.png"}
					alt="Mynd sem sýnir parametra notkun í teikningum"
					height={520}
					width={800}
				/>
				<figcaption><a href="https://www.youtube.com/watch?v=yhHhSVoL1RQ&t=2s">Notkun á parametrum í teikningum.</a></figcaption>
			</figure>
			Ég passaði að hafa allar lengdir byggðar á parametrum. Til að fá svo DXF úr fusion með tilliti til kerfsins sem
			ég fann notaðist ég við <a href="https://www.youtube.com/watch?v=D1Btaqhog9E">myndband</a> frá fablab akureyri.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/lasercut.png"}
					alt="Mynd sem sýnir íhluti samsetningarnar lagaðar út."
					height={520}
					width={800}
				/>
				<figcaption>Íhlutum raðar fyrir leiser skurð.</figcaption>
			</figure>
			Þegar ég var komin með útlínurnar af íhlutunum í inkscape þurfti ég bara að stilla document properties í 500mm*500mm.
			Setja line thickness sem 0.02 og ýta á ctrl+p fyrir print. Þá þurfti að kveikja á gasinu og skera út hlutin.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/skorid.jpg"}
					alt="Mynd sem sýnir plötu sem er búið að skera þrisvar úr"
					height={520}
					width={800}
				/>
				<figcaption>Fyrirgefðu gamli.</figcaption>
			</figure>
			Ég er víst ekki nógu lúnkinn með skífumæli eða plöturnar eru ekki jafn þykkar, þú ræður. En eftir að reyna að setja allt saman
			þrisvar og mæla þykktina á plötunni í hvert skipti þá komst ég að því að einfaldast er að setja saman finger tengingar. Þær eru
			ekki mjög næmar fyrir þykkt plötunar. Bestu tenginarnar voru pressfit og einnig hægt að koma þeim saman en þó næmar fyrir þykktinni.
			Wedge tenging voru svoddan mistök og er hún gífurlega næm fyrir mælingum á þykkt. Skiljan lega þar sem þú ert að stinga í gegnum tvö göt
			sem eru bæði með þykktina sem parameter. Eftir að gera þrjár tilraunir með 3.7mm,3.10mm og 3mm. 3mm passaði allra best saman en þó þurfti
			ég að nota litlu bútana úr fyrri til að gera wedge tenginguna.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/hangiHaflidi.jpg"}
					alt="Mynd sem sýnir hangi hönnun hanga á tölvu"
					height={520}
					width={800}
				/>
				<figcaption>Þetta hengur á tölvu.</figcaption>
			</figure>
			Ég var búin að mæla þykktina á skápa hurðinni heima og var með það sem parameter, vonandi passar það líka.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/hangiheima.jpg"}
					alt="Mynd sem sýnir hangi hönnun hanga á tölvu"
					height={520}
					width={800}
				/>
				<figcaption>Hangir á hurð með herðatré.</figcaption>
			</figure>
			Þetta virkar en langi hlutinn sem hengur út fremst er hálf ónothæfur best væri að snúa flippanum sem er nær til að hengja á.
			Það sem er lengra frá er svo langt frá hurðinni að það myndar svo mikið vægi að það heldur engu uppi.
			Svona gerist þegar maður hannar fyrir fjölda tenginga en ekki út frá notkunar gildi. You life and you learn.
			<a href="https://www.thingiverse.com/thing:6541066">Sækja model frá thingiverse</a>
		</section>
		<section className={styles.sec}>
			<h2>Kerf mælingarnar</h2>
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/kerfb.jpg"}
					alt="Mynd 1 af kerfmælingum"
					height={520}
					width={800}
				/>
				<figcaption>Kerfmælingar</figcaption>
			</figure>
			Til að finna kerfið sem er í raun breiddin á leisernum þurfum við að mæla muninn á gatinu og bitanu sem kemur út úr gatinu eftir skurðin.
			það er efnið sem laserinn er að skjóta í burtu.
			Þetta var gert með því að teikna 12 samhliða kassa í inkscape. Eftir það er heildarlengdin á gatinu mælt. Heildar lengdin á öllu kössunum samhliða.
			Þá er mismunur lengdana deilt með og kerfið fundið.
			Eftir miklar ádeilur var niðurstaðan sú að kerfið var 0.15 og notaðist ég við það í leiserskurðinum hér að ofan
		</section >
		<section className={styles.sec}>
			<table>
				<tr>
					<th>Verkþættir</th>
					<th>Kerf mælingar</th>
					<th>Vinylskurður</th>
					<th>Læra um pressfit</th>
					<th>Parametrísk hönnun</th>
					<th>Laserskurður og samsettning</th>
					<th>Heild</th>
				</tr>
				<tr>
					<th>Tími í mínútum:</th>
					<td>120</td>
					<td>60</td>
					<td>30</td>
					<td>180</td>
					<td>120</td>
					<td>{120 + 60 + 30 + 180 + 120}</td>
				</tr>
			</table>
		</section>
	</>
}