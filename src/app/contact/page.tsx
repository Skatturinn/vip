import { Metadata } from "next";
import { ContactForm } from "./form";
import styles from "./form.module.scss"


export const metadata: Metadata = {
	title: "Elías Lúðvíksson hafðu samband",
	description: "Hafðu samband eða sendu inn fyrirspurn á Elias Ludviksson / Elli.vip",
};
export default function Page() {
	return <>
		<p className={styles.centertext}>Sendu tölvupóst á netfangið contact@elli.vip <br />
			eða fylltu út í formið hér að neðan</p>
		<ContactForm />
	</>
}