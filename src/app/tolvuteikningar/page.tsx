import { Metadata } from "next";
import { CardLayout } from "../cardnavigation";
export const metadata: Metadata = {
	title: "Elías Lúðvíksson tölvuteikningar",
	description: "Veldu og skoðaðu tölvuteikningar sett hjá Elias Ludviksson / Elli.vip",
};

export default function Page() {
	return <>
		<p>Líkön og teikningar með málsetningum.</p>
		<CardLayout spil={[2]} class_string="" />
	</>
}