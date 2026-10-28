export type PracticeStage={label:string;seconds:number;fixed?:boolean;hint:string;shape?:'dot'|'circle'|'square'|'triangle'|'sigil'};
export type PracticeConfig={title:string;kind:'focus'|'observation'|'listening'|'counter'|'chakras';stages:PracticeStage[];fixed:boolean};
const quiet=(seconds:number)=>({label:'Sesiune de liniște',seconds,hint:'Urmează instrucțiunile textului. Revino la concentrare când observi că mintea a rătăcit.'});
export const practices:Record<string,PracticeConfig>={
 'dot-meditation':{title:'Atelierul punctului',kind:'focus',fixed:true,stages:[{label:'1 · Punct',seconds:120,shape:'dot',hint:'Atenție neîmpărțită asupra punctului.'},{label:'2 · Cerc',seconds:240,shape:'circle',hint:'Atenție asupra punctului din interiorul cercului.'},{label:'3 · Pătrat',seconds:360,shape:'square',hint:'Atenție asupra punctului din interiorul pătratului.'},{label:'4 · Triunghi',seconds:360,shape:'triangle',hint:'Atenție asupra punctului din interiorul triunghiului.'},{label:'5 · Sigiliul ales',seconds:600,shape:'sigil',hint:'Alege imaginea sigiliului descris în text. Fișierul se deschide doar pe dispozitivul tău.'}]},
 'zevist-void-meditation':{title:'Spațiul de liniște',kind:'observation',fixed:true,stages:[{...quiet(300),label:'Început · 5 minute'},{...quiet(900),label:'Practică avansată · 15 minute'}]},
 concentration:{title:'Antrenarea concentrării',kind:'observation',fixed:true,stages:[{...quiet(30),label:'30 de secunde'},{...quiet(300),label:'5 minute'}]},
 'self-observation-meditation':{title:'Cele trei niveluri ale observației',kind:'observation',fixed:true,stages:[{label:'1 · Gânduri',seconds:300,hint:'Observă gândurile fără să le urmezi sau să le judeci.'},{label:'2 · Emoții',seconds:300,hint:'Observă emoțiile, fără să te identifici cu ele.'},{label:'3 · Dorințe',seconds:300,hint:'Observă impulsurile descrise în text, fără să acționezi asupra lor sau să le condamni.'}]},
 'awareness-of-sound-meditation':{title:'Camera de ascultare',kind:'listening',fixed:false,stages:[{label:'1 · Ascultare',seconds:300,hint:'Ascultă sunetele din jur sau un fișier ales de tine. Primește sunetul fără să îl analizezi.'},{label:'2 · Reamintire',seconds:300,hint:'Oprește înregistrarea. Reascultă în minte piesa cunoscută, urmând instrucțiunile sursei.'}]},
 'foundation-meditation':{title:'Repere pentru sesiunea ta',kind:'counter',fixed:false,stages:[{label:'Observă și numără',seconds:300,hint:'Respiră în ritmul tău și urmărește exercițiul integral. Contorul este opțional; sursa nu impune un ritm sau un număr de respirații.'}]},
 aum:{title:'Contor de repetiții',kind:'counter',fixed:false,stages:[{label:'Repetiții în ritmul tău',seconds:300,hint:'Un clic poate nota o repetiție. Urmează pronunția și explicațiile din articol; instrumentul nu produce o înregistrare a autorului.'}]},
 'chakra-sounds-meditation':{title:'Reperele sonore din text',kind:'chakras',fixed:false,stages:[{label:'Bază',seconds:300,hint:'Tunet sau șuierat ușor. Roșu.'},{label:'Sacrală',seconds:300,hint:'Vuietul oceanului sau sunetul vântului. Portocaliu.'},{label:'Solară',seconds:300,hint:'H-h-h-a-a-h-h-h fără voce, ca o expirație; sau vibrația AUM. Galben.'},{label:'Inimă',seconds:300,hint:'Zumzet de albină sau sunet de flaut. Verde.'},{label:'Gât',seconds:300,hint:'Sunetul descris de autor ca răsucirea unui balon; poate fi folosit și zumzetul. Albastru.'},{label:'A șasea',seconds:300,hint:'Instrumente de suflat din lemn. Violet albăstrui (indigo).'},{label:'Coroană',seconds:300,hint:'Șoaptă sau lipsa sunetului, mai degrabă simțită decât auzită. Violet.'}]},
};
Object.assign(practices,{
  "awareness-of-touch-meditation": {
    "title": "Două etape de atenție și reamintire tactilă",
    "kind": "observation",
    "fixed": false,
    "stages": [
      {
        "label": "1 · Senzația",
        "seconds": 120,
        "fixed": true,
        "hint": "Cu mâna opusă, aplică o presiune fermă și constantă pe palmă sau dosul mâinii. Observă locul exact, limitele, intensitatea, textura și temperatura senzației fără judecată."
      },
      {
        "label": "2 · Reamintirea",
        "seconds": 300,
        "fixed": false,
        "hint": "Eliberează presiunea și odihnește mâinile. Cu ochii închiși, recreează senzația în același loc numai din amintire și imaginație; reconstruiește-o dacă se estompează."
      }
    ]
  },
  "awareness-of-taste-meditation": {
    "title": "Două cronometre de câte 2 minute",
    "kind": "observation",
    "fixed": true,
    "stages": [
      {
        "label": "1 · Gustul",
        "seconds": 120,
        "fixed": true,
        "hint": "Alege o bucățică din mâncarea preferată. Cu ochii închiși, concentrează-te asupra gustului, texturii, temperaturii și aromei, fără să te gândești despre mâncare."
      },
      {
        "label": "2 · Reamintirea",
        "seconds": 120,
        "fixed": true,
        "hint": "După înghițire, recreează experiența gustului numai din memorie și imaginație. Menține-o vie și stabilă; dacă se estompează, reconstruiește-o."
      }
    ]
  },
  "awareness-of-smell-meditation": {
    "title": "Două etape cu durată aleasă de cititor",
    "kind": "observation",
    "fixed": false,
    "stages": [
      {
        "label": "1 · Perceperea mirosului",
        "seconds": 300,
        "fixed": false,
        "hint": "Alege un miros distinct și ține sursa în apropiere. Cu ochii închiși, observă senzația mirosului și calitățile ei cu atenție neîmpărțită."
      },
      {
        "label": "2 · Reamintirea mirosului",
        "seconds": 300,
        "fixed": false,
        "hint": "Îndepărtează obiectul parfumat sau mergi într-un spațiu neutru. Reconstituie un miros bine cunoscut din memorie; încearcă să îl simți, nu doar să te gândești la el."
      }
    ]
  },
  "recollection-meditation": {
    "title": "Selector de nivel și cronometru opțional",
    "kind": "observation",
    "fixed": false,
    "stages": [
      {
        "label": "1 · Trecutul recent",
        "seconds": 300,
        "fixed": false,
        "hint": "Alege un eveniment recent și simplu, precum ultima masă. Reconstituie culorile, texturile, mirosurile, temperatura, locul și persoanele; menține această reconstrucție detaliată."
      },
      {
        "label": "2 · Amintire încărcată emoțional",
        "seconds": 300,
        "fixed": false,
        "hint": "Alege o amintire mai puternică și reconstituie-o cu toate simțurile. Observă emoțiile fără să te încurci în ele: rămâi martorul amintirii."
      },
      {
        "label": "3 · Copilăria",
        "seconds": 300,
        "fixed": false,
        "hint": "Alege o amintire din copilăria timpurie și concentrează-te asupra senzației reamintirii, angajând toate cele cinci simțuri."
      }
    ]
  },
  "pythagorean-day-meditation": {
    "title": "Patru întrebări de reflecție și jurnal local opțional",
    "kind": "observation",
    "fixed": false,
    "stages": [
      {
        "label": "1 · Binele făcut",
        "seconds": 300,
        "fixed": false,
        "hint": "Ce bine am făcut în această zi? Scopul este cunoașterea, nu pedeapsa. Nu insista asupra vinovăției sau rușinii."
      },
      {
        "label": "2 · Ce trebuia făcut",
        "seconds": 300,
        "fixed": false,
        "hint": "Ce nu am făcut, deși ar fi trebuit să fac? Scopul este cunoașterea, nu pedeapsa. Nu insista asupra vinovăției sau rușinii."
      },
      {
        "label": "3 · Ce a rămas nefăcut",
        "seconds": 300,
        "fixed": false,
        "hint": "Ce am lăsat nefăcut? Scopul este cunoașterea, nu pedeapsa. Nu insista asupra vinovăției sau rușinii."
      },
      {
        "label": "4 · Armonia",
        "seconds": 300,
        "fixed": false,
        "hint": "În ce fel am încălcat legile armoniei? Scopul este cunoașterea, nu pedeapsa. Nu insista asupra vinovăției sau rușinii."
      }
    ]
  },
  "anchor-meditation-1": {
    "title": "Trei repere corporale; necesită durată configurabilă per etapă",
    "kind": "observation",
    "fixed": false,
    "stages": [
      {
        "label": "1 · Respirația",
        "seconds": 300,
        "fixed": false,
        "hint": "Așezat sau întins, cu ochii închiși, simte aerul intrând pe nări, umplerea plămânilor și coborârea pieptului. Revino la senzația fizică a respirației când mintea rătăcește."
      },
      {
        "label": "2 · Respirație și corp",
        "seconds": 300,
        "fixed": true,
        "hint": "Păstrează atenția asupra respirației și extinde conștientizarea asupra greutății corpului, gravitației și punctelor de contact cu suprafața de sprijin."
      },
      {
        "label": "3 · Existența materială",
        "seconds": 300,
        "fixed": true,
        "hint": "Menține conștientizarea respirației și corpului și găsește pulsul, în piept, la încheietură sau la gât. Păstrează atenția asupra celor trei repere."
      }
    ]
  },
  "emotional-control-level-1": {
    "title": "Sesiune cu o emoție pozitivă și revenire la Vid",
    "kind": "observation",
    "fixed": false,
    "stages": [
      {
        "label": "1 · Așezarea",
        "seconds": 300,
        "fixed": false,
        "hint": "Practică odihnit, alert și calm, într-un loc liniștit. Așază-te drept și respiră lent. Alege o singură emoție pozitivă din tabel. Sursa indică aproximativ 1 minut; intervalul se alege mai jos. Alege o singură emoție în primele două săptămâni; oprește-te dacă sesiunea te tulbură."
      },
      {
        "label": "2 · Simțirea emoției",
        "seconds": 120,
        "fixed": true,
        "hint": "Spune-i în minte numele și evocă un singur moment mic. Părăsește amintirea și observă viu emoția însăși: locul în corp, căldura sau greutatea, ritmul și efectul asupra respirației. Alege o singură emoție în primele două săptămâni; oprește-te dacă sesiunea te tulbură."
      },
      {
        "label": "3 · Eliberarea",
        "seconds": 300,
        "fixed": false,
        "hint": "Observă emoția pentru ultima oară, apoi expiră lent și las-o să se stingă. Nu o mai alimenta. Sursa indică aproximativ 1 minut; intervalul se alege mai jos. Alege o singură emoție în primele două săptămâni; oprește-te dacă sesiunea te tulbură."
      },
      {
        "label": "4 · Meditația Vidului",
        "seconds": 300,
        "fixed": true,
        "hint": "Treci direct în Meditația Vidului și lasă mintea să devină complet liniștită. Alege o singură emoție în primele două săptămâni; oprește-te dacă sesiunea te tulbură."
      }
    ]
  },
  "energy-meditation": {
    "title": "Contor opțional de cicluri, fără metronom respirator",
    "kind": "counter",
    "fixed": false,
    "stages": [
      {
        "label": "Un ciclu de energie",
        "seconds": 300,
        "fixed": false,
        "hint": "La inspirație, imaginează lumina albă strălucitoare venind din toate părțile corpului. La expirație, vizualizează aura extinzându-se. Repetă, imaginând energia tot mai luminoasă și mai puternică."
      }
    ]
  },
  "chakra-focus-meditation": {
    "title": "Selector între patru niveluri; câte 5 minute pentru nivelul ales",
    "kind": "observation",
    "fixed": true,
    "stages": [
      {
        "label": "1 · Observația pasivă",
        "seconds": 300,
        "fixed": true,
        "hint": "Cu coloana dreaptă și ochii închiși, menține atenția la baza coloanei, în perineu. Nu vizualiza și nu analiza; revino la punct dacă mintea rătăcește."
      },
      {
        "label": "2 · Vortexul",
        "seconds": 300,
        "fixed": true,
        "hint": "La același punct, vizualizează o sferă roșie vie ca un vortex care se rotește în sensul acelor de ceasornic. Nu forța; observă-l cu atenție stabilă."
      },
      {
        "label": "3 · Încărcarea",
        "seconds": 300,
        "fixed": true,
        "hint": "Păstrează vortexul roșu și, la inspirație, vizualizează energie roșie pură absorbită din pământul din jur, făcându-l mai luminos și mai puternic."
      },
      {
        "label": "4 · Sinteza",
        "seconds": 300,
        "fixed": true,
        "hint": "Păstrează vortexul și unește senzația, sunetul interior, mirosul, vizualizarea și respirația într-o singură experiență. Urmează toate descrierile din text pentru nivelul 4."
      }
    ]
  },
  "sight-and-visualization-meditation": {
    "title": "Trei cronometre inițiale clare; nivelul 4 are o neconcordanță în sursă",
    "kind": "observation",
    "fixed": true,
    "stages": [
      {
        "label": "1 · Observarea obiectului",
        "seconds": 180,
        "fixed": true,
        "hint": "Alege un obiect simplu și distinct. Observă-i forma, culoarea, textura, lumina și umbra, fără etichete sau analiză."
      },
      {
        "label": "2 · Păstrarea imaginii",
        "seconds": 180,
        "fixed": true,
        "hint": "Închide ochii sau privește în altă parte. Păstrează imaginea reamintită a obiectului la fel de stabilă și detaliată ca în observație."
      },
      {
        "label": "3 · Evocarea",
        "seconds": 180,
        "fixed": true,
        "hint": "Într-un moment ales aleatoriu al zilei, evocă imaginea obiectului în minte și păstreaz-o stabilă și clară ca și cum s-ar afla înaintea ta."
      }
    ]
  }
});
export function remainingAt(deadline:number,now:number){return Math.max(0,deadline-now);}
export function clockText(milliseconds:number){const seconds=Math.ceil(Math.max(0,milliseconds)/1000);return String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');}
