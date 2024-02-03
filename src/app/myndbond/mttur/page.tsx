import styles from '../myndbond.module.scss'
import bg from '/public/myndbond_myndir/mtturbg2.png'


export default function Page() {
	return <>
		<div
			className={styles.mttur}
			style={{ backgroundImage: `url(${bg.src})` }}>
			<div className={styles.about}>
				<h1>Mættur</h1>
				<p>Þriðja myndbandið klárað að lokum. Byrjaði á þessu 2020. Vor 2021 er myndbandið hálfnað.
					Ég er gífurlega sáttur með teiknimynda senuna <q>Ef ég væri sætur</q>. Þessi barátta,þörf og þrá um
					ap geta skapað sitt eigið upprunalegt verk er lokið. Ég er sáttur. Byrja í vélaverkfræði í háskólanum
					og snerti þetta ekki fyrr en sumarið 2023. Maður þarf að klára það sem maður byrjar á í lífinu.
					Gengur ekki að vera með óklárað verk sitjandi á sér. Myndbandið er klárað í lok sumars 2023.
					Það þarf samt að fín pússa þetta.
				</p>
				<h2>Janúar 2024</h2>
				<p>Heimasíðan á að hýsa myndböndin til að sýna persónuleg verk eftir mig. Myndbandið og hljóð er klárað.
					3 til 4 ára gamalt verk búið. Ábótavant flæði, svo miklum tíma eitt í hvern hluta og ramma fyrir sig í einrúmi
					að heildar myndin týnist.
				</p>
			</div>
			<div className={styles.video}>
				<iframe width="560" height="315"
					src="https://www.youtube.com/embed/mfsZpjpIBpU?si=N9VPaq-aAGNGrA0Y"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			</div></div></>
}