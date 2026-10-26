# NOCTIS · Gothic Reading Room

Bibliotecă de lectură în română, cu tematică Hello Kitty gothic, publicată la **https://ramses13th.github.io/noctis-library/**.

O pagină de citit pe rând, cuprins liniar pe volume, recomandarea zilei, mod Focus, text reglabil, comparație RO/EN, legături către original și jurnalul traducerilor. Ilustrațiile transparente au fost generate special pentru proiect; pictogramele principale sunt desene vectoriale proprii.

## Conținut

17 pagini traduse integral din [templeofzeus.org](https://templeofzeus.org/), pentru ediția consultată la 26 octombrie 2026. Articolele sunt păstrate integral, fără rezumare; navigarea repetată și filtrele site-ului sursă nu fac parte din text. Un index tradus nu înseamnă că toate paginile către care trimite sunt traduse. Inventarul conține 1.407 adrese, inclusiv adrese tehnice; procentul afișat se referă la adrese, nu la cuvintele întregului site.

Lotul nou include **Meditația punctului**, **Meditația Vidului**, **Meditația de bază**, **1 · Monada** și **2 · Diada**. Datele și textele sunt în `lib/chapters.json`; inventarul în `lib/catalog.json`, iar volumele și coada propusă în `lib/book.ts`. Traducerile sunt asistate de AI, confruntate cu engleza și nu au revizie umană independentă. Autorii și legăturile sunt afișate pe fiecare pagină. Nu există publicare automată a loturilor viitoare.

## Progres local

Această ediție GitHub Pages funcționează fără backend. Profilurile sunt locale pe browser, cu progres după derulare, capitole încheiate, semne de carte, însemnări și setări de text separate pentru fiecare profil. Numele profilului nu este autentificare și nu protejează datele de altă persoană care folosește același browser.

Folosește **Profiluri → Exportă progresul / Importă progresul** pentru transfer pe alt dispozitiv sau pentru backup. Importul acceptă și exporturi din vechea ediție NOCTIS. Datele nu se transferă automat între domenii; ștergerea datelor browserului le elimină de pe acel dispozitiv. Progresul personal nu este inclus în acest repository și nu este trimis către GitHub.

## Dezvoltare și publicare

Necesită Node.js 22.13 sau mai nou.

```sh
npm ci
npm run dev
npm test
npm run build
```

Vite compilează aplicația în `docs/`, cu baza `/noctis-library/`. Pasul final adaugă `.nojekyll` și `404.html`. GitHub Pages este configurat să publice din **main / docs**. După modificări, rulează build-ul și comite și directorul `docs/` înainte de push. Dacă numele repository-ului se schimbă, actualizează `base` în `vite.config.ts`.

`npm test` verifică izolarea profilurilor, persistența progresului, poziția cea mai înaintată, setările, exportul/importul și respingerea fișierelor invalide. `npm run build` include verificarea TypeScript.

## Atribuire

Proiect personal, neoficial. Republicarea și traducerea au fost solicitate de proprietarul proiectului, care a declarat că deține drepturile necesare. Conținutul original rămâne atribuit autorilor săi. Hello Kitty este un personaj Sanrio; ilustrațiile sunt fan art neoficial. Prompturile și informațiile despre imaginile generate sunt în [ASSETS.md](ASSETS.md). Ilustrațiile NOCTIS sunt marcate separat și nu sunt prezentate ca imagini din sursa originală.
