import type { Metadata } from "next";
import "./styles.scss";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { NavBar } from "./navbar";
import { Fotur } from "./fotur";

export const metadata: Metadata = {
	title: "Elías Lúðvíksson",
	description: "Elias Ludviksson / Elli.vip",
	authors: { name: 'Elías Lúðvíksson', url: '' },
	// openGraph: {
	// 	locale: 'is',
	// 	title: 'Heimasíða Elíasar Lúðvíkssonar',
	// 	type: 'website',
	// 	siteName: 'Elías Lúðvíksson',
	// 	description: 'Síða sem ég byggði í þeim tilgangi að sýna færni á sviði vefforitunar. Hún hýsir einnig verkefni sem ég hef unnið á öðrum sviðum til sýnis.',
	// }
};

export const poppins = Poppins({
	weight: ["100", "400", "700"],
	subsets: ["latin"]
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="is">
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<body className={poppins.className}>
				<a href="#efni" className="sr-only">Tæknibúðin,Beint í efnið.</a>
				<NavBar />
				<main id="efni">{children}</main>
				<Fotur />
			</body>
		</html>
	);
}
