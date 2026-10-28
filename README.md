# NOCTIS · Gothic Reading Room

Bibliotecă românească cu tematică Hello Kitty gothic, fără backend. [GitHub Pages](https://ramses13th.github.io/noctis-library/) și un build static pentru Render, din același cod.

## Ediția de 300 de pagini

**300 de pagini integrale**, **161.062 de cuvinte-sursă**, opt volume și 23 de trasee de lectură. Textele provin exclusiv de pe [templeofzeus.org](https://templeofzeus.org/), din edițiile consultate la 26–28 octombrie 2026. Articolele nu sunt rezumate. Titlurile și creditele sunt separate de corpul textului; navigarea repetată este exclusă. Citatele grecești, latine, sanscrite și transliterările sunt păstrate, iar versiunile engleze oferite de autor sunt traduse în română.

Cele 267 de pagini adăugate după ediția de 33 includ numerologia1–10, toate cele **72 de peceți ale mâinii**, toate cele **36 de principii ale matricei etice**, meditații, chakre, respirație, magie, orientare și etica vieții. Colecția Etica vieții are încă articole netraduse. Seriile urmează numerotarea sau ordinea autorului; volumele și traseele sunt organizarea editorială NOCTIS.

Fiecare articol oferă sursa, mod română/engleză/paralel, progres prin derulare, semn de carte și însemnări. Traducerile sunt asistate de AI, confruntate cu sursa, fără revizie umană independentă. Un index tradus nu implică traducerea articolelor către care trimite.

Datele complete sunt în `lib/chapters.json`; rapoartele în `lib/translation-audit-*.json`. Lotul final de 200 are raportul `translation-audit-2026-10-28.json`. `source-format-audit.json` documentează citatele, atribuirile, listele, legendele și legăturile recuperate din sursă.

Inventarul păstrează 1.407 adrese, inclusiv adrese tehnice. Procentul global se referă la adrese, nu la toate cuvintele site-ului. Coada viitoarelor traduceri are surse și nu promite termene; nu există traducere ori publicare automată.

## Performanță și mobil

- Articolele sunt fișiere JSON independente, cu hash. Deschiderea bibliotecii încarcă metadatele; textul se descarcă la cerere, se păstrează în memorie, iar cererile simultane se reunesc. Următorul articol este pregătit după deschidere.
- Textul este memorat la randare: progresul de lectură nu reconstruiește articolul. Listele, căutarea și traseele lungi sunt afișate progresiv.
- Cele13 ilustrații Hello Kitty au versiuni WebP transparente și miniaturi. Imaginile din articole se încarcă întârziat. Fonturile latine și pentru diacritice sunt locale, cu `font-display: swap` și licențe în `public/fonts`.
- Cele16 apariții audio nu se descarcă automat și nu pornesc singure. Media originală și proveniența sunt în `public/source` și `lib/source-assets.json`. O imagine din Aphrodite9 a răspuns HTTP403: este indicată ca indisponibilă, cu legătură la original, fără înlocuitor inventat.

Prima pagină evidențiază traseele, următorul capitol, recomandarea zilei și volumele. Modul Focus, textul reglabil și navigarea mobilă păstrează lectura simplă. Animațiile respectă preferința pentru mișcare redusă; animația decorativă continuă este oprită pe ecrane mici.

## Unelte și progres local

18articole au instrumente opționale pentru concentrare, simțuri, memorie, autoobservare, energie și chakre: ținte nemișcate, temporizatoare, contoare și fișiere locale. Duratele prescrise, aproximative și alese de cititor sunt distincte. Nivelurile sunt alese manual; temporizatorul nu certifică stăpânirea practicii și nu marchează lectura drept încheiată. Instrucțiunile complete ale autorului rămân în articol.

Profilurile, progresul, însemnările și setările sunt locale în browser. Numele profilului nu este autentificare. Exportul/importul din Profiluri transferă datele între dispozitive și domenii, inclusiv din vechea ediție. Datele nu migrează automat de la GitHub Pages la Render. Progresul personal nu este trimis pe server și nu este inclus în repository.

## Dezvoltare și publicare

Necesită Node.js22.13 sau mai nou.

```sh
npm ci
npm run dev
npm test
npm run build
npm run build:render
```

Build-ul implicit produce `docs/`, cu baza `/noctis-library/`, pentru Pages main/docs. Build-ul Render produce `dist/`, cu baza `/`; configurare Static Site: build `npm ci && npm run build:render`, director publicat `dist`. Nu necesită un proces Node permanent ori o bază de date.

`prepare-content.mjs` generează metadatele și articolele înainte de dezvoltare, verificări și teste. Fișierele cu hash anterioare sunt păstrate pentru edițiile încă deschise de cititori.

Testele verifică profilurile, export/import, progresul, traseele, timpii, acoperirea celor300pagini, tabelele bilingve, limbile originale, ordinea peceților, legăturile inline, citatele și încărcarea/cache-ul articolelor. Ambele build-uri includ verificarea TypeScript.

## Atribuire

Proiect personal, neoficial. Proprietarul a declarat că deține drepturile de republicare și traducere. Autorii sunt creditați pe fiecare pagină. Hello Kitty este un personaj Sanrio; ilustrațiile sunt fan art neoficial generate pentru proiect. Prompturile și fișierele sunt în [ASSETS.md](ASSETS.md). Pictogramele proprii și ornamentația NOCTIS sunt distincte de sursa originală.
