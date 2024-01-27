import type { Metadata } from "next";
import "./styles.scss";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { NavBar } from "./navbar";
import { Fotur } from "./fotur";

export const metadata: Metadata = {
	title: "Elías Lúðvíksson",
	description: "Elias Ludviksson / Elli.vip",
	authors: { name: 'Elías Lúðvíksson', url: 'https://www.elli.vip/elias-ludviksson' },
	openGraph: {
		locale: 'is',
		title: 'Elías Lúðvíkssonar',
		type: 'website',
		siteName: 'Elías Lúðvíksson',
		description: 'Síða sem Elías Lúðvíksson byggði í þeim tilgangi að sýna færni sína á sviði vefforitunar ásamt öðrum.',
		images: '/myndir/eliasludviksson.png',
		url: 'https://www.elli.vip/'
	},
	twitter: {
		site: 'Elías Lúðvíksson heimasíða',
		creator: 'Elías Lúðvíksson',
		title: 'Elías Lúðvíksson',
		description: 'Síða sem Elías Lúðvíksson byggði í þeim tilgangi að sýna færni sína á sviði vefforitunar ásamt öðrum.',
	}
};

const poppins = Poppins({
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
			<body className={poppins.className}>
				<a href="#efni" className="sr-only">Elías Lúðvíksson, Beint í efnið.</a>
				<NavBar />
				<main id="efni">{children}</main>
				<Fotur />
			</body>
		</html>
	);
}
