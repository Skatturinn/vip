import styles from '../myndbond.module.scss'
import bg from '/public/myndbond_myndir/svonerbgJ.jpg'


export default function Page() {
	return <>
		<div
			className={styles.mttur}
			style={{ backgroundImage: `url(${bg.src})` }}>
			<div className={styles.about}>
				<h1>Svoner</h1>
				<p>Fyrsta myndbandið sem ég vinn sjálfstætt að fullu. Hljóð og mynd.
					Ábótavant í báðum deildum en við erum byrjaðir að reyna að gera okkkar eigið.
					Hætta að vinna með samblöndu af verkjum annarra og gera eitthvað.
				</p>
			</div>
			<div className={styles.video}>
				<iframe width="560" height="315"
					src="https://www.youtube.com/embed/i3aAhJS6Mbc?si=YG1o2C6t4Oympt65"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
		</div></>
}