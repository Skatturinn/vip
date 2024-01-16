import type { Metadata } from "next";
import "./styles.scss";
import Head from "next/head";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
	title: "Elías Lúðvíksson",
	description: "Elias Ludviksson / Elli.vip",
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
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
