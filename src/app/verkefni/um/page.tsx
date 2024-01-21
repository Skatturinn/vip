import Link from "next/link"
import Image from "next/image";
import styles from "../verkefni.module.scss"
import { Litaspil } from "@/app/cardnavigation";

export default function Page() {
	return <><Link
		href={'https://github.com/Skatturinn/vip'}
		className={styles.gitlink}>
		<Image
			src={'/git.svg'}
			alt={'github logo'}
			width={30}
			height={30} />
		< br />
		Skoða á github
	</Link>
		<section>
			<h1>Efnisyfirlit</h1>
			<ol className={styles.efnislit}>
				<li><a href="#uppsetning">1. Uppsetning</a></li>
				<li><a href="#tolvuteikningar">2. Tölvuteikningar</a></li>
				<li><a href="#samband">3. Hafðu samband</a></li>
				<li><a href="#honnun">4. Hönnun</a></li>
				<li><a href="#myndbond">5. Myndbönd</a></li>
				<li><a href="#hysing">6. Hýsing</a></li>
			</ol>
		</section>
		<section className={styles.sec} id="uppsetning">
			<h1>Uppsetning</h1>
			<p>Node js er javascript <q>js</q> keyrsluumhverfi sem gerir okkur kleift að sækja ýmissa js pakka. Hægt er að sjá alla pakka sem ég hef sótt í package.json skránni á git.
				Þeir hjálpa okkur með uppsetningu á síðunni og virkni hennar.
				Til að setja þessa síðu upp var skipunin <q><code>npx create-next-app vip</code></q> keyrð. Hún stofnar Next js app möppu. Nextjs er react framework sem
				einfaldar okkur lífið til muna. Þá er next js búið að ákveða með hverskonar hætti síður og leiðsögn (<q>routing</q>) þeirra á milli skuli vera.
				Við fáum þá uppsett package.json skrá sem inniheldur dev,build,start og lint skipunum. Þær eru keyrðar með t.d. skipuninni
				<code>npm run dev</code>
				sem ég hef notast við á meðan ég vann þessa síðu. Þetta sparar okkur það að setja upp alla þá node js pakka sem við mundum þurfa til
				að gera okkar eigin dev skipun með browser-sync og sass-watch í mínu tilviki. Það er einnig búið að útfæra hvernig .env er sett upp og vill next að við notumst
				við skrá undir nafninu .env.local. Ég ákvað einnig að notast við nýja app routerin þeirra. Þar er undirslóðir síðunar í raun vísanir á möppur með sameiginlegu nafnini
				og inni þeim er skrá sem heitir page.tsx sem inniheldur viðeigandi síðu.</p>
			<a href="https://nodejs.org/en/download/current"> Hér er hægt að smella til að sækja Node js </a>
			<h2>Afhverju Next js</h2>
			<p>Next js er react framwork. React er framenda javascript virkni sem byggir html síðunar í tölvu notandas sem heimsækir hana. Þetta getur verið mikill kostur ef við
				erum t.d. að sækja gögn úr api eins og vörur og sýna notanda. Þá getum við bara skrifað react javascript kóða sem seigir vafra notendans
				hvernig htmlið á að lýta út. Annar kostur við þetta er að síðan byggist í vafra notandans og getur því brugðist við ýmsu og birt notenda snögglega.
				Einnig er javascript kóðinn sem sér um virkni síðunar skrifaður með efni síðunar samtímis. Við þurfum því ekki að notast við query selectora til að bæta við eða fjarlægja til dæmis
				CSS klassa. Við getum bara notast við boolean breytur og burgðist við breytingum þeirra í glugga notendans þegar ástand þeirra breytist. Þarna er búið að samnýta virkni og útlit á sem þægilegastan máta.
				Gallinn við þetta er hinsvegar að þegar notandinn sækir síðuna fær hann bara tómt html með fullt af javascripti sem fyllir svo inní. K .Nextjs gerir okkur kleypt að keyra react
				hjá hýsandanum og fá þá grunn html skjalið það er síðan sent með react kóða til vafra notandans. Þá fær notandinn grunn html skjalið sem inniheldur
				mest allt sem hann þarf í grunninn. React byggir svo síðuna í raun aftur onná það sem er komið með tilskipunum sem next js skilur eftir fyrir það.
				Þá fáum við í raun kosti þess að keyra htmlið í vafra notendans og við skilum ekki frá okkur tómum html skjölum. Helsta dæmið um þetta á þessari síðu
				er <q>Hafðu samband</q> síðan þar sem formið notast við notenda virkni og í tilvísunar stikunni efst á skjánum sem sýnir notenda hvar hann er stattur.
				Til að sjá htmlið sem þú færð frá hýsingunni geturu ýtt á F12 eða viðeigandi takka til að fá upp network flipan frá vafranum þínum, sjá mynd.
			</p>
			<p>Það er hægt að lýta á það þannig að Next js gefur okkur sniðmát að react forritunar umhverfi til að smíða síðuna sem styður bæði SSR (server side rendering) og CSR (client side rendering).
			</p>
			<figure className={styles.synidmi}>
				<Image
					src={'/myndir/html-mynd-synidæmi.png'}
					alt={'mynd sem sýnir hrátt html sem kom þegar síðan var fyrst sótt'}
					width={1920}
					height={860}
				/>
				<figcaption>Mynd af netvirkni fyrir þessa síðu í dev keyrslu</figcaption>
			</figure>
			<p> Ef að við förum í gegnum listan af GET fyrirspurnum sem eru sendar til localhost og því sem er móttekið sjáum við að fyrst sækir vafrinn html skjalið.
				Í html skjalinu er svo tekið fram að það eigi að sækja CSS skjöl og js scriptur. CSS skjölin segja til um útlit skjalsins og js um virknina. En þar sem við
				erum að notast við react eru þetta líka scriptur sem segja til um útlit síðunar. Neðst eru layout.js sem segir til um alment skipulag á öllum síðum og fyrir ofan það page.js
				sem er fyrir þessa tiltekna síðu. Ef að við værum einungis að notast við react en ekki next þá mundi notandinn fá tómt html skjal sem mundi svo vísa vafranum hvert hann
				ætti að sækja js sciptuna sem mundi svo byggja skjalið fyrir notendann. Þetta hjálpar okkur í leitarvélum þar sem við gefum frá okkur html skjal með gögnum, head og öðru metadata.
			</p>
		</section>
		<section className={styles.sec} id="tolvuteikningar">
			<h1>Tölvuteikningar</h1>
			<p>Spurning um hvaða efni ég gæti hýst á þessari síðu sem gæti verið áhugavert og gagnlegt hrjáði mig lengi. Einn daginn mundi ég eftir rubikskubbnum
				sem ég hafði gert sem verkefni í áfanga hjá Háskóla Íslands. Það var þó búið að fara yfir teikningarnar og krota í þær og ekki er hægt að setja
				slíkt til sýnis.
			</p>
			<h2>Kubbur</h2>
			<p>Ég er ennþá nemandi við háskólan svo ég get sótt Inventor og við getum teiknað kubbinn á ný. Það er þó einfaldara en sagt. Þegar
				endurteikningarnar voru hafna kom í ljós ýmis mistök sem mér hafði yfirsést í fyrstu. Það voru því ekki einungis málsetningarnar sem
				voru ábótavntar heldur líkanið í heild sinni passaði í raun ekki rétt saman. Eftir smá þraus er þó komið nýtt teikningasett. Það
				passar þó ekki alveg inná síðuna. Ekki væri við hæfi að hafa pdf embeddað í iframe með litina á mis við síðuna. Inventor gefur manni valkostin
				á að taka út myndir í hvaða upplausn sem er. Við tökum því myndir af teikningasettinu í nægilega hárri upplausn og eftir smá litabreytinga og
				stúss erum við komnir með .png myndir sem eiga heima hérna. Vistum þær sem litlar png myndir. En þetta er fremur þurrt. Listi af myndum með málsetningum. Við getum gert betur.
				Three js hefur vakið áhuga minn mikið nýlega og er react með útfærslu af því í boði. Við sækjum því viðeigandi pakka með <code> npm i @react-three/drei @react-three/fiber</code>.
				Ég skoða sýnidæmi frá next um notkun á three js og sé að þeir notast við .glb fyrir modelin. Viti menn Inventor styður þetta. Frábært.
				Eftir smá puð næ ég loks að koma kubbnum inn á síðuna en maður sér í raun ekkert. Hann gæti svo gott sem verið tvívíddur.
				Annað vandamál kubburinn tekur upp svo stóran hluta síðunar að í hvert skipti sem ég ætla að skrolla þá stækka ég bara og minnka kubbinn.
				Slökkvum á allri virkni innan gluggans í bili. Byrjum á að laga útlitið. Til þess að gera það þurfum við að breyta efninu sem hann er úr.
				Það er enginn einn rétt lausn við því. Samkvæmt skjölum um three js bjóða þeir upp á wireframe.
				Fyrsta lausn hermum eftir next sýnidæminu.
				sækir nodes úr .glb skjalinu sem byggja upp hlutin úr <code>useGLTF</code> fallinu sem skilar objecy sem inniheldur <code>nodes</code>.
				Því næst er notast við react component <code>MeshStandardMaterial</code> sem setur efnið á hlutinn. En kuburrinn okkar er samsetning.
				Þannig við þyrftum að fara í gegn hlut fyrir hlut og stilla þá. Kemur í ljós að .glb inniheldur ekki bara einn hlut heldur alla. Þeir
				hafa allir sitt eigið nafn. Þetta virkar fyrir alla íhlutina en dugir ekki fyrir samsetninguna. Ég íhugaði það að sleppa bara kubbnum
				þar til ég sá þessa snilld í þráð sem var um eitthvað annað varðandi efni/áklæðingu hlutar.
				<code>scene.traverse</code> Þetta ítrar í gegnum alla senuna sem við getum sótt með <code>useGLTF</code> fallinu. Þá er bara
				að stilla hvern hlut <code>o.material.wireframe = true;</code>. Einfaldara verður það ekki.
				Til að smíða síðuna þá bý ég til tvær möppur eina með myndum og eina með líkönum. Líkön og myndir viðeigandi hlutar deila nafni.
				Þá er bara að búa til component í react sem sækir hvert mynda & líkana par og skilar lista. af li jsx elementum.
			</p>
			<h2>Lestarvagn</h2>
			<p>Vagninn er mikið stærri og flóknari. Ég er ekki með .glb skjölin hans þar sem ekki hvarflaði að mér að nota það en ég er með .obj skjöl.
				Blender sem er frítt þrívíddar forrit styður bæði .obj og .glb, bingo. Notaði það til að læra um innihald .glb skjala. Teikningasettið
				er hinsvegar hátt í 90 bls og ég sé mér ekki fært í að endurgera þetta. Breytum einu litlu obj sem sýnir þó eitthvað af vagninum í .glb
				höfum svo bara hlekk á pdf fyrir áhuga sama.
			</p>
			<a href="https://www.blender.org/download/">Hér er hægt að smella til að sækja Blender</a>
		</section>
		<section className={styles.sec} id="samband">
			<h1>Hafðu samband</h1>
			<p>Þetta er einn mikilvægasti hlutinn á allri síðunni. Það að hafa form sem þú getur útfilt til að hafa samband er lykilatriði í heimasíðu síðu.
				Það er til mikið efni um það hvernig er hægt að setja þetta upp. Fyrsta tilraun gengur ágættlega þar til við komum að api hlutanum. Kemur í ljós
				að þetta hefur breyst frekar nýlega. Smá hausverkur en það er hægt að finna út úr þessu. Api eiga að fylga reglunni src/app/api/slóð/route.ts
				þar sem slóð er umbeðið api. Þetta líkist þá síðunum í app router sem hafa alltaf page.tsx fyrir hverja möppu. Nú þegar við erum komin með
				gögnin viljum við senda þau áfram. Nodemailer lausnin hljómar best þar sem ég nenni ekki að skrá mig á einhvern lista hjá api út í bæ.
				Sækjum nodemailer <code>npm i nodemailer</code>. Óli vefforitari ítrekaði þó mikilvægi þess að sía gögninn sem maður tekur við. Set upp
				einfaldan validator notenda megin sem kannar hvort netfangið sé með réttu móti. Leyfi þá notendanum að senda inn gögninn. Les úr þeim.
				Athuga hvort netfangið sé till í raun og veru með öðrum pakka frá node js. Sjá util möppu á git og einnig api/contact/route.ts.
				Ef netfangid finnst þá sendi ég mér sjálfum póst annars fást villuboð til notendans. Þessi email validator er þó eitthvað gallaður
				get tildæmis ekki sent in fyrirspurn með hí netfanginu mínu. SMTP villu og ef ég nota contact@elli.vip gefur hann í skyn að ég sé að
				gera stafsetning villu. Slekk á þessum athugunum í bili og skoða bara mx,regex og hvert netfangið gæti verið disposable.
			</p>
			<h2>Hvernig hefuru samband?</h2>
			<h3>Taka við gögnum</h3>
			<p>Notandi fyllir út í formið og smellir á senda. Nú bregst javascript við.
				React gefur okkur fallið useForm sem passar að allir reitir séu útfylltir sem þarf að að fylla í nafn,fyrirspurn og tölvupóst.
				Þegar notandinn hefur fyllt út í reitina og send inn þá skoðum við fyrst gögnin.
				Þar sem fólk getur verið með allskonar nöfn og fyrirspurnir skoðum við aðalega netfangid.
				Ef uppsetning á netfangi er ekki rétt skilum við villuboðum til notenda. Annars xss hreinsum við gögnin
				af góðum vana og sendum áfram. Nú tókst að fara í gegnum fallið <code>messagevalidationmiddleware</code>.
				Þá verður breytan til sem tekur við þeim gögnum. Við setjum því breytuna <code>wait</code> sem
				<code>true</code> og þá er tómt div látið fylla skjá notendans sem tilkynnir honum um að við séum
				að reyna að senda skilaboðin. Gögnin eru síðan send á contact api.
			</p>
			<a href="https://github.com/Skatturinn/vip/blob/main/src/app/contact/form.tsx">Sjá /contact/form.tsx á github</a>
			<h3>Senda gögn</h3>
			<p>Í fyrra skrifi gengum við úr skugga um að gögnin væru með réttu formi. En við vitum ekki hvort
				tölvupósturinn er til eða ekki. Hann gæti verið bull@rugl.sull og sloppið í gegnum síuna sem skoðar
				bara hvort hann sé formataður rétt. Við notumst því við annan validator hýsingar megin. Hann var of stangur
				fyrir minn smekk vildi ekki taka á móti @hi.is netföngum einu sinni. Slökkvum á innslátta villu skoðunum hans þar sem
				við gerðum það í fyrra skrefi og á smtp athugun. Ef netfnagid stenst regex og mx athugun þá er höldum við áfram.
				Annars fær notandinn villuboð um að netfangid sé í ólagi. Nodemailer kóðinn er tekin af netinu og lítið breyttur.
				Nú ætti notandinn að fá skilaboð um að sendinginn hafi tekist og ég póst með fyrirspurninni.
			</p>
		</section>
		<section className={styles.sec} id="honnun">
			<h1>Hönnun</h1>
			<Litaspil liti={['#F9FBE9', '#F6F7EB', '#ffffff', '#dddddd', '#0F0E16', '#000000',]} />
			<p>Litavalið var einfalt nýverið hef ég verið mjög hrifin af hugmyndinni <q>navy and platinum pink</q> og átti bleikur að vera áherslu liturinn til að byrja með
				en það kom illa fyrir augu. Þetta er þá navy,white og latte litir aðalega. Ég hef ítrekað verið að notast við navy litað letur á létt latte bakgrunn í
				skilaverkenfum í vefforitun. Ég opnaði upp figma hendi inn mynd og hinu sígilda poppins letri og var kominn með grunninn að hönnuninn eins og hún leggur sig í dag.
			</p>
			<figure className={styles.synidmi}>
				<Image
					src={'/myndir/html-mynd-synidæmi2.png'}
					alt={'mynd sem sýnir figmaskjal síðunar'}
					width={1920}
					height={860}
				/>
				<figcaption>Mynd af hönnun úr figma</figcaption>
			</figure>
			<p>
				Það að hafa <q>hafðu samband</q> flippan feitari er til að ýta augum notendans upp í hægra hornið þar sem hann kallar augun til sýn.
				Þetta er mikið léttari og fíngerðari hönnun en að hafa bleika öskrandi stafi. Bara bjartari og feitari.
				Sjálfsmyndin er úr myndbandinu mttur. Hugmyndin að því
				að hafa valmyndir sem spil kom frá því að ég hef alltaf haft mikið dálæti af spilum og að gluggar á síðum eru oft nefndir <q>cards</q> eða spjöld. Ég hannaði svo hvert spil í
				figma með að mestu svg myndum og exportaði svo hvern ramma sem svg. Flest spilin ættu því að lýta vel út við allar upplausnir.
			</p>
			<h2>SCSS</h2>
			<p>Til að útfæra síðan útlitið á síðunni notaðist ég við scss sem bætir við þægilegri virkri við css sem minnkar allskyns óþarfa endurskrif.
				Það getur jafnvel verið læsilegra. Next styður scss með því að import styles frá <q>heiti skráar</q>.module.scss,
				<a href={`https://github.com/Skatturinn/vip/blob/main/src/app/cardnavigation.module.scss`}>sjá eina slíka skrá á git.</a>
				Ég kynntist því nýlega í css að geta haft áhrif á alla meðlimi foreldris sem eru ekki valdir ef einn er valin. Nota það í leiðarvísirstikunni
				hér efst á síðunni en einnig í spilunum. Var að fikta með scale í css og tók eftir því að ef þú heldur hæðinni fastri og tansitionar hliðini.
				Frá einum í núlll og núll í einn lýtur smá út eins og þú sért að snúa hlutnum. Notum þetta á spilin. Búum til bakhlið í figma og þegar framhliðin
				er búin að <q>snúast</q> þá snúum við bakhliðinni. Sleppum bara bakhliðinni og snúum framhliðinni strax til baka. Þar sem notandinn sá þetta í fyrsta skiptið
				fyllir heilinn inn í í framhaldinu. Að snúa spilum á forsíðunni er uppáhalds virknin, hvað mig varðar.
			</p>
		</section>
		<section className={styles.sec} id="myndbond">
			<h1>Myndbönd</h1>
			<p>Mun setja inn eh lítinn teksta og myndir úr myndböndunum, embedda svo myndböndinn eða vísa beint á þau skoða þetta seinna.</p>
		</section>
		<section className={styles.sec} id="hysing">
			<h1>Hýsing</h1>
			<p>Þessi síða er í hýsingu hjá Vercel útgefanda Next js. Einföld tenging við github repo. Svo bara ýta á build. Reyndar var ég óvart með <q>gæsalappir</q> inní htmlinu smá obbó og exportaði font stylingunum úr layout.
				Ekkert mál að laga það, baddabing baddabúm síðan er komin í loftið á <a href="elli.vip">elli.vip</a></p>
		</section>
	</>
}