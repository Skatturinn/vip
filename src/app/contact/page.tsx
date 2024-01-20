import { Metadata } from "next";
import { ContactForm } from "./form";


export const metadata: Metadata = {
	title: "Elías Lúðvíksson hafðu samband",
	description: "Hafðu samband eða sendu inn fyrirspurn á Elias Ludviksson / Elli.vip",
};
export default function Page() {
	return <>
		<ContactForm />
	</>
}