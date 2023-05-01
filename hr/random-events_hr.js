import { gender1, genderUpper1, genderUpper2, gender3, gender4, genderUpper4, gender5, gender6, gender7 } from "./gender_hr.js"

// ***************
// ***************
// RANDOM START
// ***************
// ***************

export const startLocationListHr = [
    {
        num: 1,
        img: "",
        imgDesc: "",
        story: `<p> Prijatelj ti je donio staru knjigu. Kaže da ju je pronašao na jednom tajnom mjestu. </p>
                <p< Pitaš ga koje je to tajno mjesto. On ništa ne reče, već samo otrči. </p>
                <p> Pogledaš tvrde kožne korice smeđe boje. Na njima nešto piše, ali na nekom nepoznatom jeziku. </p>
                <p> Otvaraš knjigu i listaš. Mnoštvo nepoznatih slova i nekakve čudne slike. Pitaš se zašto ti je to prijatelj uopće dao. </p>
                <p> U taj čas iz knjige ispadne jedan papirić. Na njemu nacrtana je nekakva karta i piše: </p>
                <p> "Blago možda i postoji." </p>
                <p> "Trag će te odvesti do blaga." </p>
                <p> "Zanimljivo", pomisliš. </p>
                <p class="action"> Pogledaj trag. </p>`,
        type: ""
    },
    {
        num: 2,
        img: "",
        imgDesc: "",
        story: `<p> Stari ribar te poveo u ribanje. More je mirno i kristalno čisto. Drveni bijeli brod para more i stiže do pučine. </p>
                <p> I dok vadi već sedmu ribu za redom stari te ribar podučava ribarskim trikovima. Uza sav trud kao da sve ribe bježe od tvoje udice. Ne uspijevaš uloviti nijednu. </p>
                <p> Nakon tko zna kojeg pokušaja napokon osjetiš težinu na svom ribarskom štapu. Staneš vući. Povlačiš i povlačiš. Nepoznati ulov ti dolazi sve bliže i bliže. Na kraju snažno puvučeš i u brod doleti - boca. Ulovio si bocu! </p>
                <p> Kako li se starac samo nasmijao - tvoja prva riba bila je staklena. </p>
                <p> Pogledaš unutar boce. Nekakav smotuljak zgužvanog papira ostao je suh pod plutenim čepom. Otvaraš bocu i uzimaš smotuljak. Razmotavaš poluraskidani papir kad se ispred tebe pokaže karta - KARTA S BLAGOM. </p>
                <p> Starac ti reče: "Odvest ću te do obale. Čeka te prava avantura." </p>
                <p> U kutu papira vidiš prvi trag. </p>
                <p class="action"> Pogledaj trag. </p>`,
        type: ""
    },
    {
        num: 3,
        img: "",
        imgDesc: "",
        story: `<p> Sjediš na kauču. Nema nikoga da se igra s tobom. Dosadno ti je, pa smišljaš što ćeš uraditi. Nakon kratkog razmišljanja odlučuješ se za - IGRU ISTRAŽIVANJA. </p>
                <p> Istražit ćeš sve prostorije da vidiš ima li nešto zanimljivo za igru. Ulaziš u jednu sobu, u drugu sobu, gledaš pod krevetom, po policama, po stolovima. </p>
                <p> Zatim otvaraš jedan ormar, a unutra - škrinja. Neobična prašnjava drvena škrinja sa zlatnim urezima različitih životinja. Na sredini nje maleni je lokot u obliku zlatnog konja. </p>
                <p> Ražalostiš se što nećeš moći vidjeti što je unutra. Tad malo bolje pogledaš - lokot je otvoren! </p>
                <p> Ushićeno otvaraš poklopac uz zvuk škripe i imaš što vidjeti: mnoštvo crno-bijelih slika, požućena pisma, stari nakit u svim bojama - srebrni, plavi, crveni...  Tu su slike djeda i bake kad su bili mladi. Evo i rođaka. Tu su i neki drugi ljudi koje ne poznaješ. Ova škrinja izgleda prava riznica starih obiteljskih uspomena. </p>
                <p> Pretrpavaš još malo po škrinji i pronalaziš jedan papirić. Uzimaš ga i čitaš: </p>
                <p> "Slijedi tragove i otkrij gdje je blago." </p>
                <p> "Zanimljivo," misliš, "pa, zar nije ovo blago?" </p>
                <p> Pogledaš opet, kad škrinje više nema. Kakva li je to čarolija? U redu, hajdemo vidjeti koje su to tragovi. </p>
                <p class="action"> Pogledaj trag. </p>`,
        type: ""
    }
]



// ***************
// ***************
//  RANDOM EVENTS
// ***************
// ***************

export const eventListHr = [
    {
        num: 1, 
        img: "../images/random-events/volcano.png",
        imgDesc: "Sivi vulkan iz kojeg izlazi crvena lava i gusti dim",
        title: "Erupcija vulkana",
        story: `<p> Približavaš se lokaciji. Odjednom, zemlja stade podrhtavati. Polagano, pa sve jače i jače. </p>
                <p class="action"> Sve se trese, i ti se treseš. </p>
                <p> A tada - BOOOOM! </p>
                <p class="action"> Začepi uši. </p> 
                <p> Padaju krhotine stijena. </p>
                <p class="action"> Pokrij glavu i sakrij se negdje. </p>
                <p> Opet potres. </p>
                <p class="action"> Sve se trese i ti se treseš. </p>
                <p> Nalet vjetra nanosi golemi oblak pepela. </p>
                <p class="action"> Udahni snažno i zadrži dah najdulje što možeš. Prekrij majicom ili nekom krpom usta i nos. Polako diši. Škilji da ti pepeo ne uđe u oči. </p>
                <p> Što li se to događa? </p>
                <p class="action"> Strpljivo čekaj. </p>
                <p> Nakon što se prašina slegla izađeš na čistinu te podigneš pogled. Ispred tebe uzdiže se velika planina s čijeg se vrha slijeva nešto crveno-žuto, a gusti sivi dim suklja u nebo. </p>
                <p> To je vulkan! A ekplozija što se maloprije čula bila je erupcija vulkana. Vulkan je eksplodirao i sada izbacuje užarenu lavu. Uh, izgleda baš strašno. </p>
                <p> Brzo, prije nego stigne vruća lava trebaš pronaći trag. No gdje bi mogao biti? </p>
                <p> Ugledaš špilju. Možda ima nešto unutra. Penješ se uz planinu. Ulaziš u špilju. </p>
                <p class="action"> Sagni se da ne udariš glavom. Polako hodaj i pozorno traži unaokolo. </p>
                <p> Na jednom zidu u kutu uočavaš nešto urezano. To bi moglo biti to! </p>
                <p class="action"> Pogledaj što piše. </p>`,
        question: "Što prilikom erupcije izlazi iz vulkana?",
        wrongAnswers: ["Ptice", "Krtica", "Mravi"],
        correctAnswer: "Vruća lava i gusti dim",
        type: ""
    },
    {
        num: 2, 
        img: "../images/random-events/brown-bear.png",
        imgDesc: "Smeđi medvjed na stražnjim nogama",
        title: "Medo u zimskom snu",
        story: `<p> Gledaš mapu i čini ti se da stižeš na točnu lokaciju. U taj tren ispred tebe se pojavi mladi smeđi medvjed. Rastvorio svoje ralje i visoko podigao šape s rastvorenim kandžama. </p>
                <p> Od straha postaješ bijel${gender5} kao zid. Ne možeš se ni pomaknuti. </p>
                <p class="action"> Ukoči noge. Zamrzni se. Padni na stražnjicu. </p>
                <p> Malo bolje pogledaš te uočiš da te medvjed nije htio napasti. Izgleda zbunjen. I umoran. </p>
                <p class="action"> Priđi mu i pitaj ga možeš li mu pomoći. </p>
                <p> Medvjed odgovara da se probudio iz zimskog sna. Gladan je, ali trenutno nije sposoban tražiti hranu. Možeš li pronaći nešto hrane za medvjeda? </p>
                <p> On voli jesti mladu travu, različite biljke, šumske bobice (jagode, maline, kupine, borovnice). Jako voli voće. I lješnjake i kesten i žir i šipak. A voli jesti i meso.  </p>
                <p class="action"> Pronađi nekakvu hranu za medvjeda. </p>
                <p> Medo ti zahvaljuje i pita za još jednu uslugu. Možeš li mu pomoći urediti brlog? Treba sakupiti lišća, trave ili nešto slično da mu u brlogu bude mekano i toplo. </p>
                <p class="action"> Pronađi nešto što će utopliti medvjeda dok spava zimski san. </p>
                <p> Medo ti se opet zahvalio. Kaže da si mu puno pomog${gender4}. </p>
                <p> Dok uređuješ medin brlog uočiš komad drveta na kojem nešto piše. </p>
                <p> "Sljedeći trag!", ushićeno pomisliš. </p>
                <p> "Prije nego kreneš dalje, možeš li učiniti još samo jednu stvar?" upita te medvjed. </p>
                <p> "Možeš li mi otpjevati jednu uspavanku da lakše zaspem?" </p>
                <p class="action"> Otpjevaj pjesmu medi, pa pogledaj koji je sljedeći trag. </p>`,
        question: "Što medo jede?",
        wrongAnswers: ["Samo biljke", "Samo meso", "Samo med"],
        correctAnswer: "I biljke i meso i med",
        type: ""
    },
    {
        num: 3, 
        img: "../images/random-events/ryder.png",
        imgDesc: "Dječak Ryder sjedi na kamenu i zamišljen drži drvo u rukama",
        title: "Ryder i izgubljeni psići",
        story: `<p> Jedan dječak sjedi na kamenu uz put. Izgleda zabrinuto. Približiš mu se. </p>
                <p class="action"> Pozdravi dječaka i predstavi mu se. </p>
                <p> "Zdravo!", odgovara dječak. "Zovem se Ryder. Imam šest dobrih psića i svaki od njih je poseban. Zajedno pomažemo svima koji su u nevolji. Nažalost, izgubio sam svoje psiće. Možeš li mi pomoći pronaći ih?" </p>
                <p> "Chase je policijski psić i nosi plavu odoru." </p>
                <p class="action"> Pronađi nešto plavo i oponašaj zvuk policijske sirene. </p>
                <p> "Vau, vau!" dotrči Chase. </p>
                <p> "Rubble je psić građevinar i nosi žutu odoru." </p>
                <p class="action"> Pronađi nešto žuto i oponašaj zvuk bagera.  </p>
                <p> "Vau, vau!" dotrči Rubble.  </p>
                <p> "Marshall je vatrogasni psić i nosi crvenu odoru." </p>
                <p class="action"> Pronađi nešto crveno i oponašaj zvuk vatrogasne sirene.  </p>
                <p> "Vau, vau!" dotrči Marshall.  </p>
                <p> "Sky je psić pilot i nosi rozu odoru." </p>
                <p class="action"> Pronađi nešto rozo i oponašaj zvuk aviona ili helikoptera.  </p>
                <p> "Vau, vau!" dotrči Sky.  </p>
                <p> "Zuma je psić spasilac u vodi i nosi narančastu odoru." </p>
                <p class="action"> Pronađi nešto narančasto i oponašaj zvuk bilo kojeg vozila po moru. </p>
                <p> "Vau, vau!" dotrči Zuma. </p>
                <p> "Rocky je psić ekolog i nosi zelenu odoru." </p>
                <p class="action"> Pronađi nešto zeleno i oponašaj zvuk kamiona. </p>
                <p> "Vau, vau!" dotrči Rocky. </p>
                <p> "Svi psići su tu. Hvala ti!" uzvikne Ryder. </p>
                <p> "Zauzvrat ti dajem papir koji će ti pomoći u potrazi za blagom." </p>
                <p class="action"> Zahvali se, uzmi papir i pogledaj trag. </p>`,
        question: "",
        wrongAnswers: [],
        correctAnswer: "",
        type: ""
    },
    {
        num: 4, 
        img: "../images/random-events/triceratops.png",
        imgDesc: "Maslinasto zeleni triceratops s tamnim mrljama na leđima",
        title: "Ozlijeđeni Triceratops",
        story: `<p> Divovsko stvorenje leži u jednom jarku malo dalje od tebe. Dva roga mu vire s čela, a jedan iz njuške. Iznad glave mu je bodljikavi oklop koji štiti vrat. Njegova koža izgleda jako tvrda. Stvorenje leži i odmara se. </p>
                <p class="action"> Polako mu priđi. </p>
                <p> Na leđima mu uočavaš kao nekakav ugriz. Izgleda da je stvorenje ranjeno.  </p>
                <p> Stvorenje te primjetilo. Okrene glavu prema tebi i kaže:  </p>
                <p> "Dobar dan! Ja sam triceratops, jedan od velikih i najpoznatijih dinosaura. Biljojed sam. Jedem biljke. Ne moraš se bojati, neću te pojesti." </p>
                <p class="action"> Upitaj ga što mu se dogodilo. </p>
                <p> "Napao me drugi dinosaur, T. rex i ozljedio me. Zato sam pobjegao te se ovdje sakrio. T. rex je vrlo zastrašujuć sa svojim ogromnim čeljustima i oštrim zubima, s moćnim repom, snažnim nogama i sitnim rukama." </p>
                <p class="action"> Pitaj boli li ga. </p>
                <p> "Da, poprilično me boli. Pored onih stabala su biljke koje bi mi mogle pomoći. Možeš li ih ubrati?" </p>
                <p class="action"> Otiđi ubrati biljke. </p>
                <p> "Možeš li mi sad ranu očistiti vodom, a potom biljke natrljati na ranu?" zamoli te triceratops. </p>
                <p class="action"> Očisti mu ranu vodom, a onda namaži biljke.  </p>
                <p> Triceratops se već osjeća dosta bolje. Zahvaljuje ti se. </p>
                <p> U tom trenu začuje se strahovito režanje. </p>
                <p> "Grrrrrrrr!!!" </p>
                <p> Pogledaš gore i ugledaš T. rexa. Namjerio se na tebe. Želi te pojesti.  </p>
                <p class="action"> Bježi! Trči najbrže što možeš. Sakrij se negdje gdje te T. rex ne može vidjeti. </p>
                <p> T. rex te traži. Gleda svuda okolo. Pronašao te.  </p>
                <p class="action"> Trči opet. Opet se sakrij. </p>
                <p> T. rex te traži. Njuši tvoj miris. Opet te pronašao.  </p>
                <p class="action"> Bježi!  </p>
                <p> T. rex te oborio. </p>
                <p class="action"> Padni na pod. </p>
                <p> Izgleda da te ulovio. Gotov si... Iznenada se pojavio tvoj prijatelj triceratops. Zaletio se i svojim rogovima napao T. rexa. Dobro ga je ozlijedio. T. rex se dao u bijeg. Sigur${gender3} si. </p>
                <p class="action"> Zahvali se triceratopsu. </p>
                <p> "I ti si meni pomogao." odgovara triceratops. "Imam još nešto za tebe." </p>
                <p> Triceratops ti daje sljedeći trag. </p>
                <p class="action"> Zahvali mu se opet, pozdravi ga pa pogledaj trag. </p>`,
        question: "Kako se zove veliki i poznati dinosaur koji ima tri roga na glavi?",
        wrongAnswers: ["T. rex", "Nosorog", "Bik"],
        correctAnswer: "Triceratops",
        type: ""
    },
    {
        num: 5, 
        img: "../images/random-events/village.png",
        imgDesc: "Šest seoskih bijelih kućica sa smeđe crvenim krovom",
        title: "Hrana domaćih životinja",
        story: `<p> Stižeš u malo skromno selo. Vrijedni seljaci obrađuju polja i brinu se o stoci. Jedan ti priđe. </p>
                <p> "Lijep ti pozdrav, stran${gender6}. Što te dovodi u ovaj kraj?" </p>
                <p class="action"> Odgovori seljaku. </p>
                <p> "Znači tražiš blago? Pomozi mi nahraniti stoku, a ja ću tebi pomoći u tvojoj potrazi. Jesmo li se dogovorili?" </p>
                <p class="action"> Odgovori seljaku. </p>
                <p> "Krenimo onda." pozove te seljak. </p>
                <p> "Imam kokoši, patke, ovce, krave i jednog zeca. Na sjeveru je livada puna svježe trave. Koga treba tamo odvesti na ispašu."  </p>
                <p class="action"> Odgovori: ovce i krave. </p>
                <p> "Izvrsno!" </p>
                <p class="action"> Odvedi ovce i krave na livadu na sjeveru, pa se vrati kod seljaka. </p>
                <p> "Na jugu je malo jezero obilato sitnom ribom, žabama, kukcima i raznovrsnim biljem. Koga bi bilo dobro tamo odvesti?" </p>
                <p class="action"> Odgovori: patke. </p>
                <p> "Izvrsno!" reče seljak. </p>
                <p class="action"> Odvedi patke na jezero na jugu, pa se vrati kod seljaka. </p>
                <p> "U istočnom dijelu vrta imam zasađene mrkve. Kome bi se one svidjele?" </p>
                <p class="action"> Odgovori: zecu. </p>
                <p> "Izvrsno!" </p>
                <p class="action"> Otiđi u istočni dio vrta, uberi nekoliko mrkava te ih odnesi zecu, pa se vrati opet kod seljaka. </p>
                <p> "Pet koraka zapadno od nas nalaze se dvije kante. U jednoj su gliste i kukuruz, a u drugoj slatkiši. Čime treba nahraniti kokoši?" </p>
                <p class="action"> Odgovori: glistama i kukuruzom.  </p>
                <p> "Izvrsno!" pohvali te seljak.  </p>
                <p class="action"> Uzmi kantu, nahrani kokoši, pa se vrati kod seljaka.  </p>
                <p> "Jedna vreća krumpira je ostala kod mene. Koga ćemo time nahraniti?" </p>
                <p class="action"> Odgovori što misliš. </p>
                <p> "Stoci je bolje ne davati sirovi krumpir", prozbori seljak i nastavi, "ali ćemo ga zato s mesom i povrćem pripremiti za jedan dobar ručak! Ostani na ručku, stranče/strankinjo." </p>
                <p> Nakon slasnog i obilnog ručka oblizuješ prste, a seljak će:  </p>
                <p> "Dobro si obavi${gender1} posao danas. Izvoli sljedeći trag."  </p>
                <p class="action"> Zahvali se, pozdravi seljaka i pogledaj koji je sljedeći trag. </p>`,
        question: "",
        wrongAnswers: [],
        correctAnswer: "",
        type: ""
    },
    {
        num: 6, 
        img: "../images/random-events/sphinx.png",
        imgDesc: "Žuto smeđa sfinga",
        title: "Zagonetke sfinge",
        story: `<p> Dolaziš pred grandiozni kameni kip. Kip je to sfinge, stvorenja koje ima tijelo lava i glavu čovjeka. Začuješ duboki glas: </p>
                <p> "Ja sam sfinga. Čuvarica sam ovog prolaza. Svatko tko želi proći mora odgovoriti na moje zagonetke. Želiš li se okušati?"  </p>
                <p class="action"> Odgovori sfingi. </p>
                <p> "Ako si, dakle, sprem${gender3}, evo prve zagonetke:  </p>
                <br>
                <p> Samo noću bdije, </p>
                <p> Na nebu se krije, </p>
                <p> Mlad, star ili ljut, </p>
                <p> Kao limun uvijek žut! </p>
                <p> Što je to?" </p>
                <p class="action"> Pokušaj pogoditi. </p>
                <p> (Točan odgovor je mjesec) </p>
                <br>
                <p> "Ako si točno odgovori${gender1} evo sljedeće zagonetke: </p>
                <p> Lišće i oblake raznosi,  </p>
                <p> Brzinom se svojom ponosi, </p>
                <p> Ne vidiš ga, ali je jak, </p>
                <p> Puše i diže sve u zrak. </p>
                <p> Što je to?" </p>
                <p class="action"> Pokušaj pogoditi. </p>
                <p> (Točan odgovor je vjetar) </p>
                <br>
                <p> "Ostala je i posljednja zagonetka: </p>
                <p> Leti zrakom, ptica nije, </p>
                <p> Zuji, brunda, kukac nije. </p>
                <p> Kad je žedan benzin pije, </p>
                <p> A ni helikopter nije. </p>
                <p> Što je to?" </p>
                <p class="action"> Pokušaj pogoditi. </p>
                <p> (Točan odgovor je avion) </p>
                <br>
                <p> "Čestitam!" prozbori sfinga. "Točno si odgovorio na sve tri zagonetke." </p>
                <p> "Možeš proći dalje. Izvoli i trag." </p>
                <p class="action"> Pozdravi sfingu, pa pogledaj trag. </p>`,
        question: "Kako se zove stvorenje koje ima tijelo lava i glavu čovjeka?",
        wrongAnswers: ["Piramida", "Zmaj", "Faraon"],
        correctAnswer: "Sfinga",
        type: ""
    },
    {
        num: 7, 
        img: "../images/random-events/elephant.png",
        imgDesc: "Sivi slon",
        title: "Izgubljeni slon",
        story: `<p> Pred tobom se pojavi slon. Veliki slon. Hrapava mu koža, široke uši, dvije bijele kljove i duga surla. </p>
                <p> "Jesi li vidio moju mamu? Jesi li vidio moje krdo?" upita te. </p>
                <p class="action"> Odgovori mu da ih nisi vidio. </p>
                <p> "Izgubio sam se", kaže slon, "trebam pronaći svoje krdo. Ima nas 12. A moja majka je vođa krda." </p>
                <p> "Znaš, majka slonica je najbolja majka. Veoma se brine o svojoj djeci i svemu ih uči. Moja majka se brine o svima u krdu." </p>
                <p> "Znaš, mi slonovi imamo odlično pamćenje. Ja sam zapamtio cijeli put kuda sam išao sa svojim krdom. Samo... izgubio sam svoje krdo. Hoćeš li mi pomoći da ić pronađem?" </p>
                <p class="action"> Reci da mu želiš pomoći. </p>
                <p> "Fantastično!" oduševljeno će slon, "Idemo se onda vratiti na mjesto gdje sam ih zadnji put vidio. No da stignemo do tamo trebat ćeš pozorno pratiti moje upute. Jednom ću ti reći, a ti trebaš upamtiti i napraviti. Sprem${gender3}?" </p>
                <p class="action"> "Jedan korak naprijed." </p>
                <p class="action"> "Dva koraka ulijevo, jedan korak naprijed." </p>
                <p class="action"> "Tri koraka naprijed, jedan korak natrag." </p>
                <p class="action"> "Jedan korak naprijed, jedan korak udesno, jedan korak naprijed." </p>
                <p> "Popni se sada na najviše mjesto što možeš i pogledaj vidiš li moje krdo." </p>
                <p class="action"> Popenji se i reci da ne vidiš. </p>
                <p> "U redu, idemo dalje", kaže slon. </p>
                <p class="action"> "Dva koraka natrag." </p>
                <p class="action"> "Šest koraka naprijed." </p>
                <p class="action"> "Tri koraka ulijevo, četiri koraka udesno." </p>
                <p class="action"> "Jedan korak naprijed, dva koraka udesno, tri koraka naprijed." </p>
                <p> "Popni se opet na najviše mjesto i pogledaj vidiš li moje krdo." </p>
                <p class="action"> Popenji se i reci da ne vidiš. </p>
                <p> "U redu, idemo dalje", kaže slon. </p>
                <p class="action"> "Dva koraka udesno, dva koraka natrag." </p>
                <p class="action"> "Četiri koraka ulijevo, tri koraka naprijed." </p>
                <p class="action"> "Jedan korak natrag, jedan korak udesno, jedan korak naprijed." </p>
                <p class="action"> "Tri koraka udesno, dva koraka ulijevo, dva koraka naprijed." </p>
                <p> "Stigli smo!" slon će uzbuđeno. </p>
                <p> "Popni se opet na najviše mjesto i pogledaj vidiš li sada moje krdo." </p>
                <p class="action"> Popenji se i gledaj dobro na sve strane. Sa svoje lijeve strane uočavaš krdo slonova. Vikni slonu da ih vidiš. </p>
                <p> "Pronašli smo ih, pronašli smo ih!" uzvikuje slon dok radosno trči ukrug. "Hvala ti, prijatelj${gender7}." </p>
                <p> "Prije nego se rastanemo, imam nešto za tebe."  </p>
                <p> Ispruži on svoju dugu surlu, preda ti sljedeći trag, pa otrči prema svojoj majci. </p>
                <p class="action"> Pozdravi slona i pogledaj trag. </p>`,
        question: "Koja životinja ima dobro pamćenje?",
        wrongAnswers: ["Žirafa", "Pčela", "Hrčak"],
        correctAnswer: "Slon",
        type: ""
    },
    {
        num: 8, 
        img: "../images/random-events/enchanted-forest.png",
        imgDesc: "Svijetlo zelena šuma",
        title: "Začarana šuma i čarobni napitak",
        story: `<p> Stižeš u začaranu šumu. Izgleda kao sasvim obična šuma: mnoštvo stabala s razgranatim zelenim krošnjama i veseli ptičji pjev. No ipak kao da je nešto drugačije. Mirisi su mirisniji. Boje su obojenije. Osjećaš se nekako bolje... i kao da te netko gleda. </p>
                <p> Osvrneš se iza sebe. Ugledaš mladu ženu u blijedo zelenoj haljini s crvenom maramom na glavi. Sjedi na drvetu i nešto miješa u ljubičastom lončiću.  </p>
                <p class="action"> Pozdravi je i upitaj što radi. </p>
                <p> Ona te ni ne pozdravi niti odgovori na tvoje pitanje. Izvadi drvenu žlicu iz lončića, pogleda je, pa kaže: "Nedostaju mi nekoliko sastojaka. Trebat ćeš ih sakupiti za mene." </p>
                <p class="action"> Reci joj da je pristojno pozdraviti kad susretneš nekoga. </p>
                <p class="action"> Reci joj da te treba lijepo zamoliti ako želi tvoju pomoć. </p>
                <p> Žena se razljuti. Lice joj se izopači. Naraste velika poput stabla, pa te pogleda svojim opakim očima te piskutavim glasom prozbori: </p>
                <p> "Znaš li ti tko sam ja? Ja sam Aradia, strašna vještica. Mogu te pretvoriti u miša." </p>
                <p class="action"> Reci joj da je lijepo što se predstavila. </p>
                <p class="action"> Reci joj da joj miš neće pomoći skupiti sastojke. </p>
                <p> "Imaš pravo", vještica će.  </p>
                <p> Tada se opet pretvori u mladu lijepu djevojku. </p>
                <p> "Oprosti. Nervozna sam. Nemam puno vremena, a moram napraviti čarobni napitak. Hoćeš li mi pomoći, molim te?" </p>
                <p class="action"> Reci da hoćeš. </p>
                <p> "Hvala ti", zahvalno će Aradia, "treba mi nekoliko sastojaka. Prvi sastojak je list maslačka."  </p>
                <p class="action"> Pronađi nešto što je maleno, zeleno i mekano. </p>
                <p> "Sljedeće što mi treba je kornjačin oklop." </p>
                <p class="action"> Pronađi nešto šuplje. </p>
                <p> "Trebaju mi latice ruže." </p>
                <p class="action"> Pronađi nešto što miriše. </p>
                <p> "Treba mi grančica jabuke." </p>
                <p class="action"> Pronađi nešto drveno. </p>
                <p> "Trebaju mi tigrovi brkovi." </p>
                <p class="action"> Pronađi nešto dugo i tanko. </p>
                <p> "Sad mi treba zmijski zub." </p>
                <p class="action"> Pronađi nešto glatko i oštro. </p>
                <p> Još mi treba perje papige. </p>
                <p class="action"> Pronađi nešto što ima tri različite boje. </p>
                <p> Na kraju mi treba jedan poseban čarobni sastojak. Sastojak koji ima veze s tobom. </p>
                <p class="action"> Pronađi nešto što počinje prvim slovom tvog imena. </p>
                <p> "Savršeno!" zadovoljno će Aradia. </p>
                <p> Sve sastojke ubaci u lončić. Još malo promiješa, pa protrese. Izgovori zatim neke nerazumljive čarobne riječi, pa nastavi miješati. Gusti bijeli dim stvori se iznad lončića, a vještica će: </p>
                <p> "Čarobni napitak je spreman!" </p>
                <p> Lijepa Araida ti zahvali i kaže: "Imam nešto za tebe." </p>
                <p> Pruži ti kamenu pločicu na kojoj se nalazi sljedeći trag. Zatim odjuri negdje dalje u začaranu šumu.  </p>
                <p class="action"> Pozdravi je, pa pogledaj trag. </p>`,
        question: "",
        wrongAnswers: [],
        correctAnswer: "",
        type: ""
    },
    {
        num: 9, 
        img: "../images/random-events/forest.png",
        imgDesc: "Tamno zelena šuma",
        title: "Istraživanje šume",
        story: `<p> Dolaziš do šume. Misliš se gdje bi sljedeći trag mogao biti. Kročiš polagano naprijed i istražuješ. Čvrsta stabla uzdižu se do neba. Svuda naokolo zeleni se šumsko raslinje. Mirišeš cvijeće. </p>
                <p class="action"> Sagni se i pomiriši cvijeće. </p>
                <p> Koje li je to cvijeće. Ne znaš, ali lijepo miriše. Kročiš dalje. Ugledaš gljive na stablu.  </p>
                <p class="action"> Pobliže pogledaj gljive. </p>
                <p> Gladan si. Da ih ubereš i pojedeš? Baš bi ti dobro prijale. Možda je ipak bolje da ih ne diraš. Nisi siguran jesu li otrovne. Začuješ hukanje: </p>
                <p> "Huuu! Huuuuuuuu!" </p>
                <p> "Huuu! Huuuuuuuu!" </p>
                <p class="action"> Pogodi koja bi to mogla biti životinja. </p>
                <p> To je bila sova. Uto začuješ zavijanje:  </p>
                <p> "Auuuuuuuuuuu!" </p>
                <p> "Auuuuuuuuuuu!" </p>
                <p class="action"> Pogodi koja bi to mogla biti životinja. </p>
                <p> To je bio vuk. U daljini među stablima ugledaš veliku smeđu životinju kako brunda i reži: </p>
                <p> "Brund... Brund... Grrrrrrrrrrr!" </p>
                <p> "Brund... Brund... Grrrrrrrrrrr!" </p>
                <p class="action"> Pogodi koja bi to mogla biti životinja. </p>
                <p> To je medvjed. Čini se da je gladan i traži hranu. Bolje se sakrij negdje dok ne otiđe.  </p>
                <p class="action"> Sakrij se. </p>
                <p> Medvjed je otišao. Malo dalje spaziš kako nešto gmiže i sikće:  </p>
                <p> "Ssssssssss..." </p>
                <p> "Ssssssssss..." </p>
                <p class="action"> Pogodi koja bi to mogla biti životinja. </p>
                <p> To je zmija. Zmija odgmiže, a ti nastavljaš svoje traganje. Gaziš dalje preko zelenog raslinja. Jedna životinja s kitnjastim repom penje se uz stablo i nosi žir u svoju duplju. </p>
                <p class="action"> Pogodi koja bi to mogla biti životinja. </p>
                <p> To je vjeverica. Približiš se stablu. Na njemu uočiš nešto urezano. Trag! Pronašao si sljedeći trag! </p>
                <p class="action"> Pogledaj trag. </p>`,
        question: "Koja životinja huče huuu huuuu?",
        wrongAnswers: ["Vuk", "Medvjed", "Zmija"],
        correctAnswer: "Sova",
        type: ""
    },
    {
        num: 10, 
        img: "../images/random-events/sad-girl.png",
        imgDesc: "Zamišljena djevojčica sjedi na drvenoj klupi bez naslona",
        title: "Tužna djevojčica",
        story: `<p> Djevojčica sjedi na drvenoj klupi. Snuždena je i uplakana. Prilaziš joj. </p>
                <p class="action"> Sjedni pored djevojčice. </p>
                <p class="action"> Predstavi se.  </p>
                <p class="action"> Reci joj kako vidiš da je tužna. </p>
                <p> Djevojčica se posramila. Ništa ne govori.  </p>
                <p class="action"> Ponudi joj jedan slatkiš. </p>
                <p> Ona te pogleda i reče: </p>
                <p> "Hvala, ne želim." </p>
                <p> Ostaješ u tišini sjediti pored nje. Djevojčica prozbori: </p>
                <p> "Učiteljica me pitala nešto, ali nisam znala odgovoriti. Jako je vikala na mene. Zato sam tužna." </p>
                <p class="action"> Kaži djevojčici da nije lijepo što je učiteljica tako vikala na nju.  </p>
                <p> "Da, nije lijepo." potvrdi djevojčica. "Jako sam se prepala. Možeš li mi pomoći da znam za drugi put?" </p>
                <p class="action"> Kaži da ćeš joj vrlo rado pomoći. </p>
                <p> "Možeš li me naučiti brojati do 10?" </p>
                <p class="action"> Broji do 10. </p>
                <p> "A kako se to broji unatrag?" </p>
                <p class="action"> Broji unatrag od 10 do 0. </p>
                <p> "Koji su dani u tjednu?" </p>
                <p class="action"> Nabroji dane u tjednu. </p>
                <p> "Koja je lijeva ruka, koja desna?" </p>
                <p class="action"> Pokaži svoju lijevu i svoju desnu ruku. </p>
                <p> "Gdje je kuk, gdje je taban?" </p>
                <p class="action"> Pokaži svoj kuk i svoj taban. </p>
                <p> "Što je to zima?" </p>
                <p class="action"> Objasni što je zima. </p>
                <p> "A što je to mrkva?" </p>
                <p class="action"> Objasni što je mrkva. </p>
                <p> "A što to znači plivati?" </p>
                <p class="action"> Objasni što znači plivati. </p>
                <p> "A što to znači rasti?" </p>
                <p class="action"> Objasni što znači rasti. </p>
                <p> "Imam još jedno pitanje: Kako izgleda mrav?" </p>
                <p class="action"> Opiši kako izgleda mrav. </p>
                <p> "Više nisam tužna. Mislim da sada sve znam. Hvala ti." </p>
                <p> Djevojčica te zagrli. Onda se ustane i veselo odskakuće. Uto zastane kao da je nešto zaboravila. Dotrči natrag do tebe i pruži ti papirić. </p>
                <p> "Ovo je za tebe." </p>
                <p> To reče i opet odskakuće.  </p>
                <p> Pogledaš papirić. Na njemu je napisan novi trag. </p>
                <p class="action"> Pozdravi djevojčicu i pogledaj trag. </p>`,
        question: "",
        wrongAnswers: [],
        correctAnswer: "",
        type: ""
    }
]



// ***************
// ***************
// RANDOM TRAVELING
// ***************
// ***************

export const travelListHr = [
    {
        num: 1,
        title: "Ozljeda koljena",
        story: "<p> Raspoloženo krećeš prema sljedećoj lokaciji. Odjednom se spotakneš o neku granu i padneš. Desno koljeno te boli. Natučeno je. </p>",
        task: `<p class="action"> Šepaj. Bit će ti bolje kad stigneš do sljedeće lokacije. </p>`,
    },
    {
        num: 2,
        title: "Javljanje prijatelju",
        story: "<p> Tako se dobro osjećaš da odlučuješ podijeliti svoju radost. Dok ideš do sljedeće lokacije razgovaraš s prijateljem. </p>",
        task: `<p class="action"> Nazovi prijatelja ili poznanika i popričaj s njim. </p>`,
    },
    {
        num: 3,
        title: "Divovske pčele",
        story: "<p> Ispred tebe se prostire divovska livada. Sve je jako veliko na divovskoj livadi. Cvijeće je veliko, životinje su velike. Sad je vrijeme je oprašivanja i livada je puna divovskih žuto-smeđih pčela. One lete od cvijeta do cvijeta i sakupljaju slatki nektar. Pazi da se ne sudariš s nekom pčelom. </p>",
        task: `<p class="action"> Kad ugledaš nešto žuto sagni se. </p>`,
    },
    {
        num: 4,
        title: "Putovanje vlakom",
        story: "<p> Do sljedeće lokacije vozi vlak. Ukrcaješ se na vlak i krećeš. </p>",
        task: `<p class="action"> Glumi da se voziš u vlaku. </p>`,
    },
    {
        num: 5,
        title: "Visoka trava",
        story: "<p> Kiša je dobro napadala. Gusta trava je dobro narasla. Trebat ćeš dobro koračati da prijeđeš preko ove visoke trave. </p>",
        task: `<p class="action"> Visoko diži noge dok ideš prema sljedećoj lokaciji. </p>`,
    },
    {
        num: 6,
        title: "Uski most",
        story: "<p> Pred tobom je močvarno područje. Preko njega prelazi jedan veoma uski drveni most. Oprezno ideš preko mosta dok održavaš ravnotežu. </p>",
        task: `<p class="action"> Do sljedeće lokacije stavljaj jednu nogu ispred druge i drži raširene ruke. </p>`,
    },
    {
        num: 7,
        title: "Pjevanje pjesme",
        story: "<p> Osjećaš se baš nekako radosno, pa zapjevaš pjesmu. </p>",
        task: `<p class="action"> Zapjevaj neku pjesmu. </p>`,
    },
    {
        num: 8,
        title: "Žurba",
        story: "<p> Počinje se spuštati mrak. Trebaš prije mraka stići do sljedeće lokacije. Tamo će opet zasjati sunce. </p>",
        task: `<p class="action"> Trči. </p>`,
    },
    {
        num: 9,
        title: "Pretvaranje u klokana",
        story: "<p> Nekakva čarolija te pogodila. Osjećaš kako se mijenjaš. Pretvaraš se u životinju. Rastu ti uši. Nos nestane, a pojavi se njuška. Ruke ti se smanjuju. Raste ti rep, dugačak i mišićav. Noge su postale snažnije, a tabani se izdužili. Na trbuhu ti se stvorio tobolac. Postao si klokan. Sva sreća da ova čarolija traje samo do sljedeće lokacije. </p>",
        task: `<p class="action"> Skači poput klokana. </p>`,
    },
    {
        num: 10,
        title: "Izgubljena lopta",
        story: "<p> Susrećeš dječaka koji te pita jesi li vidio njegovu loptu. Izgubio je. Svuda je traži, no ne nalazi. Odlučuješ pomoći dječaku. </p>",
        task: `<p class="action"> Pronađi putem nešto okruglo. </p>`,
    }
]



// ***************
// ***************
// RANDOM ENDING
// ***************
// ***************

export const endLocationListHr = [
    {
        num: 1,
        img: "",
        imgDesc: "",
        title: "Pustinja X",
        story1: `<p> Stižeš na lokaciju. To bi trebalo biti tu. Osvrneš se okolo, ali nema nigdje ničega. Samo suhi pijesak i vrućina u zraku. Gdje je blago? Zatim se dosjetiš, možda je ispod pijeska. </p>
                <p> Rukama krećeš kopati rupu. </p>
                <p class="action"> Kopaj rukama rupu. </p>
                <p> Kopaš sve dublje i dublje. Prsti te počinju boljeti, ali ti ne odustaješ. Umaraš se, ali i dalje ne odustaješ. Ne možeš odustati sad kad si toliko blizu. </p>
                <p> Tad osjetiš nešto tvrdo pod prstima. Što je to? Vadiš neobičan plavi kamen. Odjednom osjetiš trnce na ruci. Kamen se miče. I mijenja. Prepadneš se pa ga baciš od sebe. </p>
                <p> Kamen se polagano pretvori u malo plavo čudovište. Čudovište doskakuće do tebe i prozbori: </p>
                <p> "Dobar dan, lijepo mi te vidjeti. Ja sam Hop-Hop i volim skakati." </p>
                <p class="action"> Pozdravi Hop-Hopa. </p>
                <p> "Vidim da si stiga${gender1} sve do ovdje. Izvrsno! Za tebe imam sljedeći zadatak. Pozorno slušaj jer ćeš morati izvršiti točno sve što ti kažem. Može?" </p>
                <p> "Krenimo onda:" </p>
                <p class="action"> Tri koraka naprijed, tri koraka natrag, skoči visoko, sad čučni, stavi ruke na pod i noge digni u zrak, skoči tri puta u dalj. </p>
                <p> "U redu. Idemo dalje:" </p>
                <p class="action"> Skoči jednom unatrag, skoči opet udalj, skoči najviše što možeš. Skoči opet. Digni koljeno do brade. Počeši se po glavi. </p>
                <p class="action"> Sada reci glasno: "Volim jesti blitvu i brokulu."" </p>
                <p class="action"> Reci tiho: "Svaki dan se peru zubi." </p>
                <p class="action"> Ponavljaj za mnom: "keke reke", "buku laka", "miki baka", "caka saka". </p>
                <p class="action"> Ponavljaj za mnom: "miš mi je repu pojeo", "maca mi mlijeko popila". </p>
                <p class="action"> Ponavljaj za mnom: "švrćo", "brćo", "matematika", "astrofizika", "pire bez krumpira". </p>
                <p class="action"> Sad raširi i ruke i noge najviše što možeš. Stoj tako deset sekundi. </p>
                <p> "Izvrsno! Zadovoljan sam. Izvrši${gender1} si što sam tražio od tebe. Možeš proći dalje." </p>`,
        story2: `<p> Ponosno kreneš dalje. Sigurno je blago tu negdje. U tom trenu ispred tebe stvori se duh. Smiješan neki duh. Prekriva ga bijela plahta s jednom povećom rupom. I kroz tu rupu viri mu nos. Žarko crveni nos, a na njemu tri bubuljice. Baš smiješan duh. </p>
                <p> Duh prozbori: </p>
                <p> "Ispred tebe je blago. Ali do njega možeš doći jedino ako odgovoriš točno na moje pitanje. Dobro se sjeti svega što si dosad proša${gender1}. Pitanje je sljedeće:" </p>`,
        winMessage: `BRAVOO!! USP${genderUpper2} SI! IZVRŠI${genderUpper1} SI SVE IZAZOVE I NAPOKON OTKRI${genderUpper1} BLAGO! ZASLUŽI${genderUpper1} SI GA.`,
        conclusion: `Uvijek je dobar osjećaj kad uspiješ napraviti nešto dobro. Čestitam ti na tom uspjehu. Podijeli svoju sreću s drugima. A mi se vidimo drugi put u novoj pustolovini.`,
        type: ""
    }, 
    {
        num: 2,
        img: "",
        imgDesc: "",
        title: "Gusarsko blago",
        story1: `<p> Stižeš na mjesto. Ispred tebe se pojavi brod. Gledaš ga i diviš mu se. Ratni jedrenjak s 40 topova i crnom zastavom što vijori na vrhu jarbola. Oh, izgleda da je to Osveta kraljice Anne, brod najslavnijeg pirata - Crnobradog. Budi oprez${gender3}. </p>
                <p> Kapetan iznenada naređuje svojim piratima da upere topove prema tebi. Brzo, trebaš izmaknuti topovskim kuglama. </p>
                <p class="action"> Sagni se. Skoči ulijevo. Raširi noge. Skoči i raširi noge. Zakotrljaj se udesno. Čučni. Zakotrljaj se udesno. </p>
                <p class="action"> Skoči naprijed. Opet se sagni. Skoči lijevo. Opet čučni. Skoči unatrag. Sada trči brzo na lijevu stranu. Stani. Trči brzo na desnu stranu. Stani. Čučni. Lezi dole i budi miran. </p>
                <p> Ostaješ mir${gender3} neko vrijeme. Izgleda da se ništa ne događa. Podižeš pogled, a ispred tebe... sam kapetan Crnobradi! Crna istrošena kapa prekriva mu glavu, oko pasa pištolj i nož, a u ruci oštra sablja. Ima gustu crnu bradu i gustu crnu kosu, a iz ušiju mu suklja dim. Gleda te svojim divljim tamnim očima. Tad upita: </p>
                <p> "Želiš uzeti blago koje sam sakrio? Hrabro od tebe." </p>
                <p> Ostane u tišini nekoliko dugih sekundi, a onda reče: </p>
                <p> "U redu. Ako me uspiješ pobijediti u borbi mačevanja, možeš uzeti moje blago." </p>
                <p> Jedan od gusara ti dobaci sablju. Uzmeš je i krećeš odvažno u borbu. </p>
                <p class="action"> Uzmi sablju i mačuj se 10 sekundi. </p>
                <p> Kapetan ti izbije sablju iz ruke. Daje ti još jednu priliku. </p> 
                <p class="action"> Mačuj se 20 sekundi. </p>
                <p> Crnobradi te stjera u kut. "Oho, duplo duža borba. Hajde opet", reče. </p>
                <p class="action"> Mačuj se 10 sekundi. </p>
                <p> "Bojiš se, kukavico?", izaziva te. </p>
                <p class="action"> Mačuj se 5 sekundi. </p>
                <p> Kapetan ti opet izbije mač. "Odustaješ, kukavico?", upita. </p>
                <p> Izgleda da je kapetan previše snažan. Nećeš ga moći pobijediti na ovaj način. U taj čas sine ti jedna zamisao. Možda možeš na lijepi način... </p>
                <p class="action"> Ispričaj Crnobradom o svojim dosadašnjim pothvatima i o svom trudu. </p>
                <p class="action"> Zatim ga lijepo zamoli za blago. </p>
                <p class="action"> I onda ga čvrsto zagrli. </p>`,
        story2: `<p> Crnobradi je dirnut tvojom pričom. Dok mu lice poprima blagi izraz, a jedna suza klizi niz obraz, kaže ti: </p>
                <p> "Pobjeda je tvoja. Ali... do blaga ćeš stići samo ako točno odgovoriš na sljedeće pitanje:" </p>`,
        winMessage: `IZVRŠI${genderUpper1} SI SVE IZAZOVE I PRONAŠ${genderUpper4} BLAGO! TI SI STVARNO JEDAN SNAŽAN BORAC!`,
        conclusion: `Bori${gender1} si se s različitim neprijateljima i izvrši${gender1} mnoge izazove. Čestitam! Sigurno si ponos${gender3} na sebe. Bilo je lijepo biti s tobom u ovoj pustolovini. Nadam se da se vidimo opet.`,
        type: ""
    }
]


