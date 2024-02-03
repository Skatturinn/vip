import styles from '../myndbond.module.scss'
import bg from '/public/myndbond_myndir/vissibg3.png'


export default function Page() {
	return <>
		<div
			className={styles.mttur}
			style={{ backgroundImage: `url(${bg.src})` }}>
			<div className={styles.about}>
				<h1>Vissi það</h1>
				<p>Annað myndbandið sem ég vinn að fullu. Mikil framför í hljóði og mynd.
					Ábótavant flæði og sumir hlutar draga verkið niður. skortir heildar sýn.
				</p>
			</div>
			<div className={styles.video}>
				<iframe width="560" height="315"
					src="https://www.youtube.com/embed/U__oETJFaNw?si=701dd4dPhjeT3i9f"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
				</iframe>
			</div>
		</div></>
}