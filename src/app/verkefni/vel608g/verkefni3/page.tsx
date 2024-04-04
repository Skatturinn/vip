import Link from "next/link"
import Image from "next/image";
import styles from "/src/app/verkefni/verkefni.module.scss"

export default function Page() {
	return <>
		<h1>Verkefni 3</h1>
		<p>Þessi síða inniheldur upplýsingar um afköst í verkefni 3 fyrir tölvustuddaframleiðslu</p>
		<p>VÉL608G</p>
		<section className={styles.sec}>
			<h2>Hönunn á modeli fyrir 3d prentun</h2>
			Takmarkanir geisla skurð eru að hann getur í raun bara skorið í x og y mis djúpar línur í z.
			Það er hann kemst ekki undir. Hönnuninn þarf þá að uppfyla þær kröfur.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v3_teikn.png"}
					alt="Mynd sem sýnir tölvuteikningar glassins."
					height={520}
					width={800}
				/>
				<figcaption>Inventor teikningar fyrir vínglass.</figcaption>
			</figure>
			Vínglass uppfyllir þessar kröfur þar sem þú getur ekki geisla skorið það. Með því að teikna nokkra sívalninga og hringi
			í inventor erum við snögglega komin með útlínur af glasi. Þá er bara að revolvea um miðju ásin og við höfum þrívidd
			model fyrir prentun.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v3_model.png"}
					alt="Mynd sem sýnir model glassins."
					height={520}
					width={800}
				/>
				<figcaption>Inventor model vínglassins.</figcaption>
			</figure>
			<h3>Þrívídd prentun</h3>
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/prusa-slicer.png"}
					alt="Mynd sem sýnir model glassins."
					height={520}
					width={800}
				/>
				<figcaption>Endurherma af 3d prentun.</figcaption>
			</figure>
			Ég gerði prusa slicer dæmið jafnóðum við hliðina á 3d prentaranum í mikilli flíti og miklu stressi. Mikil samkeppni um að komast í þessa prentara og
			ég ætlaði ekki að missa tækifærið. Þegar ég gerði þetta í fartölvunni vildu hún ekki leyfa mér að auto enforcea build plate only. Ég þurfti því að setja
			inn support enforces til að styðja við botn glassins.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/notkun.png"}
					alt="Mynd sem sýnir notkun model glassins."
					height={520}
					width={800}
				/>
				<figcaption>Notkun í 3d prentun.</figcaption>
			</figure>
			Stærð glassins var dregin í efa og gefið í skin að það væri of stórt en prusa getur prentað meira en margir halda.
			Innfyllið var bara 15% sem var kannski of lítið þar sem handfang glassins brotnaði. Ég fékk aðstoð við að setja stuðning
			undir botn glassins og notkun á prusa frá reyndari samnemendum.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v3glas.jpg"}
					alt="Mynd sem sýnir glasið."
					height={520}
					width={800}
				/>
				<figcaption>Glasið 3d prentað.</figcaption>
			</figure>
		</section>
		<section className={styles.sec}>
			<h2>3-vídd skönnunn</h2>
			ég notaðist við photogrammetry forrit sem gallast <a href="https://alicevision.org/#meshroom">meshroom</a>. Það virkar þannig
			að þú setur inn í það fullt af myndum. Það greinir svo hreyfingu út frá myndunum
			og út frá því færðu dýpt sem gefur þér að lokum model.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v3_skan.png"}
					alt="Mynd skönnun."
					height={520}
					width={800}
				/>
				<figcaption>Mynd af punkta mappi og myndavélum í þrívíddu rúmi.</figcaption>
			</figure>
			Það notast við svokallað nóða kerfi þar sem hver liður sem er tengdur í næsta gefur honum gögn sem hann vinnur svo áfram og svo koll af kolli.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v3node.png"}
					alt="Mynd skönnunar nóðum."
					height={520}
					width={800}
				/>
				<figcaption>Meshroom nóður.</figcaption>
			</figure>
			Hann byrjar á því að setja um myndavélin í þrívíddurúmi. Næst nær hann í einkenni hlutarins. Þá samtengir hann myndirnar með því að finna sama hlutin
			á þeim. Þá getur hann fengið bygginguna með því að finna hreyfingu á milli myndanna. Hann varpar svo út punkta mappi. Finnur dýpt og loks býr hann til þrívidd líkan
			sem hann svo varpar myndunum aftur á til að klæða það.
			<figure className={styles.synidmi}>
				<Image
					src={"/vel608g/v3hendi.png"}
					alt="Mynd skönnunar nóðum."
					height={520}
					width={800}
				/>
				<figcaption>Skönnuð hendi.</figcaption>
			</figure>
			Modelið er þá komið sem obj en þó nokkuð suð í því og þarf að hreinsa það til fyrir einhverskonar notkun.
		</section>
		<section className={styles.sec}>
			<h2>Prusa mk3+ prentarinn</h2>
			Þegar maður prentar í þrívídd þarf maður að huga af innfyllingu eins og ég lærði þar sem fóturinn á glasinu brotnaði.
			Einnig er yfirborðs áferðin þar sem supportin voru frekar hrjúf. Ég notaðist líka við PLA sem þó er í lagi að borða úr
			er ekki hægt að þrífa. Prentarinn getur prentað í hinar skríttnustu áttir. Þó á hann erfitt með að prenta beint í loftið en
			ef hann er með smá kúpt yfirborð þá nær hann að ítra áfram. Þar kemur stuðningurinn inn sem ég setti hjá fót glassins.
			Þar byrjar glasið að fara nánast beint út og taldi prusa það vera stöðugleika vandamál. En yfirborðið er allra vesta þarna ekki einungis undir glasinu heldur
			inní því líka.
		</section>
	</>
}