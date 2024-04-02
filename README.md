<!-- Verkefni unnið kringum valið efni og er í formi forrits eða viðmóts sem unnið er frá grunni.

Skilyrði er að verkefnið skal nýta a.m.k. þrennt af eftirfarandi:

- Einhversskonar próf skrifuð sem skipta máli.
- Notendaumsjón útfærð.
- Vefþjónusta (REST eða GraphQL) útfærð.
- Bakendi útfærður.
- Framendi útfærður (með template máli, React, Svelte eða öðru framenda framework).
- Gagnagrunnur (SQL eða NoSQL) notað.
- Hönnunarskjöl útfærð (Figma, UML rit eða álíka) og kynnt í skýrslu.
- Greining á verkefni unnin fyrirfram t.d. ef verkefnið er stærra en það sem formast innan þessa verkefnis (t.d. tímalínur, niðurbrot á verkþáttum) og kynnt í skýrslu. -->

# Inngangur

Vefsíðan http://www.elli.vip/ er ætlað til að sýna færni mína í vefforritun og hýsa efni eftir mig. Þar sem viðkomandi getur fengið yfirsýn yfir þverfagleg verkefni og efni sem sýnir lausnamiðaða, skapandi og árangursríka vinnu. Einnig er hægt að senda inn fyrirspurn í gegnum form á síðunni.

# Verkefni

- Hönnun
- Next.js
  - Framendi
  - Bakendi

Umfjölluninn verður um forsíðu,fyrirspurnarsíðu og tölvuteikningar. Aðrar síður eru að mestu teksti í einfaldu html sniði.

<!-- Hönnunarskjöl útfærð (Figma, UML rit eða álíka) og kynnt í skýrslu. -->

## Hönnun

`['#F9FBE9', '#F6F7EB', '#ffffff', '#dddddd', '#0F0E16', '#000000',]`

Í grunni hverjar hönnunar er litur og form. Litavalið tók innblástur úr eldri veffforritunar verkefnum sem áttu einungis að uppfylla einfalt skalanlegt útlit. Þar sem notast var við óbreytt útlit að miklu. Upprunalegt letur og grid fyrir skalanleika. Þá var litur letursins breytt í dökkan navy og backgrunnslitnum í latte hvítan. Fyrir þessa síðu var litavalinu skipt. Bakgrunnurinn gerður að dökkum navy og letrið hvítt eða latte hvítt. Letrið er [Poppins](https://fonts.google.com/specimen/Poppins) sem er fengið frá google. Upprunalega átti "platinum pink" að vera áherslu liturinn sem dró athygli notandans í eina átt, til að sýna hvar þú værir eða ættir að gera.

![Mynd af figma skjali síðu](/public/myndir/html-mynd-synidæmi2.png)
[Skoða Figma skjal fyrir síðu](https://www.figma.com/file/lonOZvwNzUoqOUidDCq6bj/Untitled?type=design&node-id=219%3A24&mode=design&t=klli6n7Y5HnIVo1y-1)

Til að fá tilfinningu fyrir útlitinu var hugmynd að hönnuninni útfærð í figma. Þar er hægt að aðlaga og breyta hönnun hraðar en í kóða. Þegar forsíða síðunar er heimsótt er tekið á móti manni með kynningarsvæði. Þar eiga sér fyrstu kynni sem eiga að hafa áhrif og gefa í skyn hvað síðan er um. Einnig er algengt að hafa ákall til aðgerðar sem vonast er eftir. Í þessu tilfelli var það .svg sjálfsmynd sem einkennist af svörtum útlínum og áherslu atriðum af lit. Hún er síðan undirrituð með ólæsilegri handskrift.

Efst á síðunni er leiðarvísir sem inniheldur hlekki á alla hluta síðunar. Flipinn til að hafa samband er bjartari með meiri áherslu til að fá fólk til að senda inn fyrirspurn. Þetta hefur ekki skilað neinum árangri hingað til. Hugmyndinn um að hafa vísanna þrjá fyrir miðju síðunar og þann í miðjunni ofar en hina til að mynda einskonar boga kom snemma.

Fyrir neðan leiðarvísirinn og sjálfsmyndina er valmynd. Hún inniheldur hlekki á undirsíður sem innihalda efni. Hver valmöguleiki er byrtur sem spil. Spilin vor hönnuð í figma. Þar er hægt að setja upp grunn að bakgrunni spilsins og afrita það síðan. Þá er bara að breyta myndum og teksta hvers spils. Reynt var að hafa vigra myndir að mestu fyrir alla upplausnir. Bakgrunnir spilana er ekki skær hvítur til að gera þau raunverulegri þar sem erfitt er að framleiða jafn skær björt spil og hvítt ljós af skjá. [Aura print](https://aura-print.com/usa/blog/post/playing-card-dimensions#:~:text=of%20playing%20cards.-,The%20dimensions%20of%20a%20standard%20playing,2.5%20inches%20x%203.5%20inches.) gefur að hefðbundinn spil séu 3.5 tommur á hæð og 2.5 tommur á breidd. Hlutföllinn eru þá 2.5/3.5 sem helst þótt við breytum yfir í cm eða pixla. Þá setjum við hæðina sem 350 og breiddina sem 250 í figma. Horninn eru gerð eftir auga miðað við spil og eru aðeins ýkt til að gefa rétt form. Þau hafa radíusinn 12.4.

![Mynd af figma skjali fyrir spil](\public\myndir\figma-spil-mynd.png)
[Figma skjal fyrir hönnun á spilum](https://www.figma.com/file/cmUoEh2w8H0Oie1ldCrkD5/spil?type=design&node-id=0%3A1&mode=design&t=aQVhMLMXtYacvOeF-1)

Fyrsta spilið var ásin sem vísar á umfjöllun um hönnun og útfærslu síðunar. Þar er einnig hægt að nálgast skjöl síðunar á github. Þaðan kom hugmyndin til að nota merki github síðunar fyrir spilið.

Fyrir tölvuteikningar af kubba samsetningu er talan 3 notuð þar sem kubbar eru oft notaðir sem dæmi fyrir þriðju víddina. Lína fyrir eina, kassar fyrir tvær og tesseract fyrir fjórar. Merki spilsins eru myndir af samsetningunni sem sýna ytri og innri bygginguna. Þetta er eina rauða spilið. Hugmyndinni er að rauða spilið mun standa út og því benda fólki í átt að því.

## Next js

Next.js er react framework/umgjörð sem sameinar framenda og bakenda á einfaldan og þæginlegan máta í fyrir fram gerðum pakka. Til að byrja uppsetninguna þarf Node.js að vera uppsett. Node.js er CLI (Command Line Interface) javascript keyrsluumhverfi. Það gefur okkur aðgang að `npm` (Node Package manager) sem leyfir okkur að sækja ýmsa pakka og virkni sem við gætum þurft. Önnur skipun er `npx` (Node Package eXecute) sem býður upp á að nota og setja upp pakka í verkefni án þess að hafa hann uppsettan á vélinni sjálfri. Við notumst við skipunina `npx create-next-app vip` til að stofa möppuna fyrir síðuna.

Í samsetningu Next.js er boðið upp á tvenna routers annarsvega /page útfærsluna og hinsvegar nýja /app routerinn. Þess síða notast við /app routerinn og virkar hann þannig að hver mappa undir /app möppunni er jöfn undirslóð á síðu með sama heiti. Þannig /app/contact er jafnt elli.vip/contact. Hver mappa sem á að vera undirslóð þarf að vera með page.tsx skrá sem fer svo í gegnum layout.tsx sem er í /app og segir það til um innihald síðunar. Einnig er hægt að notast við breytur í slóðinni á borð við /app/[slug] þar sem slug er tekið inn sem slóðar breyta.

### Framendi útfærður

Síðan er gerð með Next.js sem notast við React componenta fyrir framenda. Next.js styður við sass með því að hafa nafn.module.scss skrá sem inniheldur stýla og klassa sem stýra útliti htmlsins.

#### navbar.tsx

Fyrir leiðarvísirinn notum við samblöndu af useState og useEffect til að fá leiðarvísirinn til að byrtast aftur þegar skrollað er upp og til að festa logoið sem vísar manni aftur á forsíðuna.

```
function FixedHomeNav() {
	const [header, setHeader] = useState(false);

	const scrollHeader = () => {
		if (window.scrollY >= 20) {
			setHeader(true)
		} else {
			setHeader(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHeader)

		return () => {
			window.removeEventListener('scroll', scrollHeader)
		}
	})

	return header
}

let s = 0; // smá goofy

function ReturnHomeNav() {
	const [menu, setMenu] = useState(false);
	const reveal = () => {
		const ns = scrollY;
		if (ns > 30 && s > ns) {
			setMenu(true)
		} else {
			setMenu(false)
		}
		s = ns;
	}
	useEffect(() => {
		window.addEventListener('scroll', reveal)
		return () => {
			window.removeEventListener('scroll', reveal)
		}
	})
	return menu
}
```

Þessi föll er bráðlík núna þegar ég horfi á þau og spurning um það hvort hægt væri að gera þau almennari og endurnota þau með breytum. Föllin nota bæði useState til að breyta stöðunni á boolean úttakinu. Með useEffect getum við fylgst með stöðunni á scroll og uppfært stöðu úttaksins eftir breytingu. Staðan breytost einungis þegar skilyrði eru uppfyllt.

Það er einnig useState fyrir leiðarvísir takka sem byrtist þegar skjá breiddin er of lítil til að viðhalda bilum á milli orða efst á síðunni. Það breytir leiðarvísinum í dropdown möguleika sem er annaðhvort kveikt á eða slökkt með takkanum. Einnig er hvert `<li>` með onClick sem slekkur á dropdowninu.

Með því að sækja slóðina sem er virk og athuga hvprt það inniheldur slóðina sem hlekkur í leiðarvísir bendir á er settur active status á hann og hann feitletraður.

#### cardnavigation.tsx

Öll spilin í spila valmydinni deila einni valmynd sem er í raun bara harðkóðuð .svg mynd. Valmyndin inniheldur 3 flokka síðunar. Verkefni,tölvuteikningar og myndbönd. CardLayout componentin tekur við vigur af tölugildum fyrir hvern flokk 1,2 og 3. Eftir því hvaða tölugildi eru gefin byrtast viðeigandi spil þess flokks.

```
	spil.includes(2) && items.push(
		[
			<li className={`${styles.card} ${styles.spil2}`} key={'kubbur'}><Link href='/tolvuteikningar/kubbur'>
				<Image
					src="/spil/3-kubbur.svg"
					alt="Kubbur"
					width="250"
					height="350"
					className={styles.framhlid}
				/>
				{bakhlid}
			</Link>
			</li>,
			<li className={`${styles.card} ${styles.spil3}`} key={'lestarvagn'}><Link href='/tolvuteikningar/lestarvagn'>
				<Image
					src="/spil/8-lestarvagn.svg"
					alt="Lestarvagn"
					width="250"
					height="350"
					className={styles.framhlid}
				/>
				{bakhlid}</Link>
			</li>
		]);
```

Athugar hvort vigurinn innihalda viðeigandi t-lugildi og bæta þá li elementi og mynd í vigur sem componentin skilar. Til að ná útlitinu er grid sett upp og þegar eitt spil er valið þá eru óvöldu spilonum snúið við.

```
&:has(.card:hover) .card:not(:hover),
	&:has(.card:active) .card:not(:active),
	&:has(.card:focus) .card:not(:focus) {
		a {
			.framhlid {
				scale: 0 1;
				transition: scale 0.25s;
			}

			.bakhlid {
				scale: 1;
				transition: scale 0.5s ease-out;
				transition-delay: 0.25s;
			}
		}
	}

```

Snúningur spilana er framkvæmdur með einföldu css trikki. Þar sem ef haldið er skala föstum í eina vídd á meðan hinum er minnkað í núll þá er skalabreytingin þannig að eins er og að því sé snúið um fasta ásin. Ef það er gert nógu hratt svo er bara að snúa bakhliðinni þegar búið er að snúa framhliððinni. Þetta er allt framkvæmt með scale, transition scale og transition-delay.

Það er einnig Litaspila component sem skortir snúninginn en býr til spil sem sýnir liti sem gefnir eru í componentinn.

#### /tolvuteikningar/kubbur

Uppsetning síðunar notast að mestu við einn react component sem notast við client virkni og er því client side. Þetta er merkt með `use client` efst í skjalinu. ThreeDteikningar fallið tekur við nafni á samsetningu og lista af íhlutum. Skilar síðan lista af þrívíddar líkönum og tölvuteikningum fyrir hvern hlut. Byrjar á því að búa til state fyrir það hvort vinstri músar takka sé haldið niðri. Fallið tolvuteikningar() tekur inn nafn samsetningu og einingu sem á að byrta æur lista af gefnum einingum.

```
export function tolvuteikningar(samsetning: string, ihlutur: string): hlutur {
	return ({
		title: ihlutur, model: `/tolvuteikningar_model/${samsetning}/${ihlutur}.glb`,
		mynd: `/tolvuteikningar_myndir/${samsetning}/${ihlutur}.png`
	})
}
```

Skilar object sem hefur öll gildi sem þarf fyrir byrtingu. React hefur canvas component sem hefur threejs uppsetningu.

```
			<Canvas
				camera={{ position: [0, 0, -0.125], near: 0.015 }}
				className={numer === 0 ? styles.model1 : styles.model}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				<ambientLight intensity={2} />
				<pointLight position={[0, 40, 40]} />
				<Model url={hlutur.model} />
				<OrbitControls autoRotate enableZoom={isMouseDown} />
			</Canvas>
```

Til að fa´wireframe gerum við component sem notar useGLTF úr @react-three/drei sem er þeirra threejs stuðningur. Þá er að fara í gegnum senuna og kveikja á wireframe.

```
export function Model({ url }: any) {
	const { scene } = useGLTF(url) as any
	scene.traverse((o: any) => {
		if (o.isMesh) {
			// o.material.metalness = true;
			o.material.wireframe = true;
		}
	});
	return <primitive object={scene} />
}

```

#### /contact

/app/contact inniheldur einn react component sem notst við client side rendering. Componentin notast við useState frá react og useForm fra´"react-hook-form".

```
const { register, handleSubmit } = useForm<FormData>();
const [wait, setWait] = useState(false);
```

wait er notaði til að stýra className á div sem kemur á utan forminu í úttaki componentsins. Þegar wait er satt tekur það yfir síðuna og setur á loading state sem gefur tilkynna að verið sé að senda fyrirspurn. Þetta á að koma í veg fyrir síendurteknar innsendingar og láta notanda vita að innsending sé í vinnslu.

```
		<div className={wait ? styles.loading : ''}></div>

```

register pakkinn gefur okkur aðferð til að taka við gögnum úr formi við innsendingu. Það passar einnig að öll required input séu fyllt.

```
				<input
					type="text"
					placeholder=""
					{...register('name', { required: true })}
				/>
```

Þá er það að senda fyrirspurnina.

```
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

```

register gefur okkut handleSubmit og þar er ég með fallið onSUbmit sem sér um innsendinguna.

```
	async function onSubmit(data: FormData) {
		try {
			const a = messagevalidationmiddleware(data.name, data.email, data.message);
			if (a) {
				try {
					setWait(true)
					const res = await fetch('/api/contact', {
						method: 'POST',
						body: JSON.stringify({
							a
						}),
						headers: {
							'content-type': 'application/json'
						}
					})
					setWait(false)
					if (res.status >= 200 && res.status < 300) {
						window.alert('Skilaboð mótekin')
						window.history.pushState({}, '', '/');
						window.history.go();
					} else {
							throw new Error(res.statusText)
					}

				} catch (err) {
					window.alert(err)
				}
			}
		} catch (err) { window.alert(err) }
	}

```

Byrjum á að athuga hvort gögninn séu á réttu formi annars höldum við ekki áfram og látum notandann vita.
Ef gögninn eru virt þá sendum við gögninn áfram á bakendann með POST request á /api/contact. Á meðan setjum við wait sem satt og bíðum eftir svari.

### Bakenda virkni

#### /contact

Við setjum upp api í Next.js til að taka á móti POST beiðnum á slóðina /api/contact með því að setja upp
POST(req) fall í /app/api/contact/route.ts

```
export async function POST(req: NextRequest) {
	let { a } = await req.json()
	a = messagevalidationmiddleware(a.name, a.email, a.message)
	const err = await validate({ email: a.email, validateTypo: false, validateDisposable: true, validateSMTP: false })
```

fallið tekur við requestinu og við byrjum á að sía gögninn með sama falli og við gerðum á framendanum.
Svo notumst við validate frá 'deep-email-validator'
til að athuga hvort emailinn sé gildur til að sía út fyrirspurnir með ógildum email. Þessi sía er þó all sterk og þurfti ég að draga úr henni þónokkuð. Typo var all grimmt og validateSMTP gaf ekki hi.is sem gilt netfang.

Ef netfangið kemst í gegnum síurnar okkar þá höldum við áfram og notumst við nodemailer pakka.

```
import nodemailer from 'nodemailer';

```

Það þarf að hafa opið fyrir api aðgang á gmail aðganginum og fá úthlutað api lykilorð til notkunar.
Þær upplýsingar þurfa að vera aðgengilegar í umhverfinu (environment).

```
if (err.valid) {
		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.MY_EMAIL,
				pass: process.env.MY_PASSWORD,
			},
		});

		const mailOptions: Mail.Options = {
			from: process.env.MY_EMAIL,
			to: process.env.TO_EMAIL,
			subject: `Skilaboð frá ${a.name} (${a.email}) (${err.valid || err.reason})`,
			text: a.message,
		};
		const sendMailPromise = () =>
			new Promise<string>((resolve, reject) => {
				transport.sendMail(mailOptions, function (err) {
					if (!err) {
						resolve('Email sent');
					} else {
						reject(err.message);
					}
				});
			});
		try {
			await sendMailPromise();
			return NextResponse.json({ message: 'Email sent' });
		} catch (err) {
			return NextResponse.json({ error: err }, { status: 500 });
		}
	} else {
		const myOptions = { status: 400, statusText: `${err.reason} villa: Skilabod ekki send, athugaðu netfangid eða sendu póst á contact@elli.vip` };
		return new Response(`${err.reason} villa`, myOptions)
	}

```

Nodemailer sér um að senda tölupóstin á netfangið með transport.sendMail(). Þetta er samt dálítið skrýttið þar sem við erum í raun bara að senda tölvupóst á sjálfan okkur í þessu tilfelli. Þetta er að mestu byggt á umfjöllun frá medium með [leiðbeiningum um uppsetningar á contact formi](https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644)

<!-- - Framendi útfærður (með template máli, React, Svelte eða öðru framenda framework).
- Bakendi útfærður.
- Hönnunarskjöl útfærð (Figma, UML rit eða álíka) og kynnt í skýrslu. -->

# Hvað næst?

Að gera kubba síðuna dynamic þar sem einungis eitt sett af þrívíddu líkani og teikningum í einu. Þannig að /tolvuteikningar/kubbur í stað einnar síðu sem inniheldur lista af settunum þá væri ein síða fyrir hvert sett /tolvuteikningar/kubbur/[id] og svo er hægt að fara á milli síðna.

Einnig að gera almenn spil svo þegar það er bætt við efni. Þá er hægt að nota við handahófskennt spil ef þarf. Spila valmyndin cardnavigation.tsx er líka ekki nægilega skalalegt. Spilin eru föst í skorður og einungis hægt að slökkva og kveikja á flokkum af spilum harðkóðuðum inn.

Leiðarvísir efst er ábótavant, á minni skjáum þegar maður skrollar niður og svo aftur upp þá vantar einhverskonar milliskref. Breyting frá því að maður getur séð hann í að hann fer aftur efst.

Síðan á eftir að innhalda meira efni í framtíðinni og skalanleika spurningar verða leystar þegar að þeim kemur.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

```
