import {
	readFile as fsReadFile,
	writeFile as fsWriteFile,
	mkdir,
	readdir,
	stat
} from 'fs/promises';
import { readFilesFromDir } from '../../util/get_sub_folders';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Paths from '@/app/util/Paths';

// const Paths = async () => {

// 	return (await readFilesFromDir(`./src/app/verkefni/vel608g`))
// 		.filter(e => e)
// 		.map((stak, nr) =>
// 			stak && <li key={nr}>
// 				<Link href={stak.split('\\').splice(-2).join('/')}>
// 					{stak.split('\\').splice(-1)}
// 				</Link></li>)
// }

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const files = (await readFilesFromDir(`./src/app/verkefni/vel608g`))
	return (<>
		<Paths files={files} image="/spil/joker.svg" />
		{children}
	</>
	);
}
