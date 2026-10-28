import {chapters,type Progress} from './book';
export type LearningPath={id:string;title:string;subtitle:string;group:'Început'|'Practică'|'Studiu';image:string;chapters:string[];future:{id:string;title:string}[]};
export const learningPaths:LearningPath[]=[
  {
    "id": "atei-sceptici",
    "title": "Atei și sceptici",
    "subtitle": "Critica ateismului, dialogul și argumentele autorului, în ordinea lecturii.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-pathways.webp",
    "chapters": [
      "outsiders",
      "friendsofzevism",
      "ancientwisdom",
      "zevism-mastertable",
      "our-god",
      "aware"
    ],
    "future": [
      {
        "id": "advancedphilosophy-doubleignorance",
        "title": "Dubla ignoranță"
      }
    ]
  },
  {
    "id": "primii-pasi",
    "title": "Primii pași",
    "subtitle": "Orientare, apoi prima întâlnire cu practica.",
    "group": "Început",
    "image": "hello-kitty-gothic-pathways.webp",
    "chapters": [
      "welcome",
      "newcomers",
      "fornewseekers",
      "importantpoints",
      "meditation",
      "aware",
      "preparing-for-meditation",
      "anchor-meditation-1",
      "study-beginner"
    ],
    "future": [
      {
        "id": "newpeople",
        "title": "Noii inițiați"
      }
    ]
  },
  {
    "id": "meditatie",
    "title": "Învață să meditezi",
    "subtitle": "Observă. Concentrează-te. Revino la liniște.",
    "group": "Practică",
    "image": "hello-kitty-gothic-meditation.webp",
    "chapters": [
      "preparing-for-meditation",
      "finding-your-meditation-type",
      "anchor-meditation-1",
      "self-observation-meditation",
      "dot-meditation",
      "zevist-void-meditation",
      "sight-and-visualization-meditation",
      "recollection-meditation",
      "pythagorean-day-meditation"
    ],
    "future": [
      {
        "id": "basic-meditation-program",
        "title": "Programul de bază de meditație"
      }
    ]
  },
  {
    "id": "magie",
    "title": "Fundamentele magiei",
    "subtitle": "Vocabularul sursei, atenție și lucrul cu energia.",
    "group": "Început",
    "image": "hello-kitty-gothic-magick.webp",
    "chapters": [
      "magick",
      "witchcraft",
      "concentration",
      "foundation-meditation",
      "energy-meditation",
      "magickalenvironment",
      "props",
      "consecration",
      "incense",
      "zevist-numerology-magick-meditation"
    ],
    "future": [
      {
        "id": "basic-meditation-program",
        "title": "Programul de bază de meditație"
      }
    ]
  },
  {
    "id": "zei",
    "title": "Zeii și daimonii",
    "subtitle": "Prezentarea tradiției și relația cu divinul.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-gods.webp",
    "chapters": [
      "thegods",
      "our-god",
      "about-guardian-daemons",
      "your-guardian-daemon",
      "our-goddess-bastet",
      "our-goddess-sekhmet",
      "ceridwen",
      "god-sigil-meditation",
      "prayer"
    ],
    "future": [
      {
        "id": "adonis",
        "title": "Adonis"
      }
    ]
  },
  {
    "id": "concentrare",
    "title": "Atenție și concentrare",
    "subtitle": "De la un singur punct la ascultarea neîntreruptă.",
    "group": "Practică",
    "image": "hello-kitty-gothic-meditation.webp",
    "chapters": [
      "concentration",
      "dot-meditation",
      "sight-and-visualization-meditation",
      "flame-meditation",
      "awareness-of-sound-meditation",
      "zevist-void-meditation",
      "pineal-meditation"
    ],
    "future": []
  },
  {
    "id": "numerologie",
    "title": "Număr și sens",
    "subtitle": "Seria completă de la Monadă la Decadă, apoi aplicarea.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-numerology.webp",
    "chapters": [
      "zevist-numerology",
      "zevist-numerology-1",
      "zevist-numerology-2",
      "zevist-numerology-3",
      "zevist-numerology-4",
      "zevist-numerology-5",
      "zevist-numerology-6",
      "zevist-numerology-7",
      "zevist-numerology-8",
      "zevist-numerology-9",
      "zevist-numerology-10",
      "zevist-numerology-pythagoras",
      "zevist-numerology-magick-meditation"
    ],
    "future": [
      {
        "id": "zevist-numerology-more",
        "title": "Mai multe informații despre numere"
      }
    ]
  },
  {
    "id": "izvoare-antice",
    "title": "Izvoare și mărturii antice",
    "subtitle": "Textele citate, personalitățile și interpretarea lor în sursă.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-teachings.webp",
    "chapters": [
      "our-doctrines",
      "ancientwisdom",
      "friendsofzevism",
      "about-guardian-daemons",
      "personalities-index",
      "zevist-numerology-pythagoras",
      "zevist-numerology-3"
    ],
    "future": [
      {
        "id": "advancedphilosophy-fourgreatphilosophers",
        "title": "Cei patru mari filosofi"
      }
    ]
  },
  {
    "id": "simboluri",
    "title": "Simboluri și forme",
    "subtitle": "Semnele tradiției, numerele și formele lor.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-symbols.webp",
    "chapters": [
      "symbols",
      "zevist-numerology",
      "zevist-numerology-3",
      "zevist-numerology-4",
      "aum",
      "god-sigil-meditation",
      "mudras-how-to-practise"
    ],
    "future": [
      {
        "id": "sacred-geometry",
        "title": "Geometrie sacră"
      }
    ]
  },
  {
    "id": "energie",
    "title": "Energia în practica sursei",
    "subtitle": "Noțiuni introductive, respirație și corespondențe sonore.",
    "group": "Practică",
    "image": "hello-kitty-gothic-meditation.webp",
    "chapters": [
      "aware",
      "preparing-for-meditation",
      "foundation-meditation",
      "energy-meditation",
      "aura-awareness",
      "aura-cleaning",
      "protection",
      "ball-of-light-meditation",
      "blue-light-meditation",
      "drawing-in-energy",
      "directing-energy",
      "circulating-energy",
      "ascending-energy",
      "raising-energies"
    ],
    "future": [
      {
        "id": "full-meditation",
        "title": "Meditația completă"
      }
    ]
  },
  {
    "id": "ascultare",
    "title": "Simțuri și observație",
    "subtitle": "Auz, atingere, gust, miros și rememorarea experienței.",
    "group": "Practică",
    "image": "hello-kitty-gothic-listening.webp",
    "chapters": [
      "awareness-of-sound-meditation",
      "music",
      "sound",
      "humming-breath",
      "chakra-sounds-meditation",
      "aum",
      "recollection-meditation"
    ],
    "future": []
  },
  {
    "id": "astrologie",
    "title": "Repere pentru astrologie",
    "subtitle": "Introducere și limbajul simbolic folosit de autor.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-astrology.webp",
    "chapters": [
      "about-astrology",
      "zevist-numerology",
      "symbols"
    ],
    "future": [
      {
        "id": "astrology",
        "title": "Indexul astrologiei"
      }
    ]
  },
  {
    "id": "traditii",
    "title": "Nume, tradiții și continuitate",
    "subtitle": "Compară prezentările și urmărește referințele autorului.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-gods.webp",
    "chapters": [
      "thegods",
      "our-god",
      "our-goddess-bastet",
      "our-goddess-sekhmet",
      "ceridwen",
      "ancientwisdom",
      "personalities-index",
      "aum",
      "zevism-inheritance"
    ],
    "future": [
      {
        "id": "zevism-egyptian",
        "title": "Tradiția egipteană"
      }
    ]
  },
  {
    "id": "respiratie",
    "title": "Temelia respirației",
    "subtitle": "Precauțiile autorului, apoi tehnicile și explicațiile originale.",
    "group": "Practică",
    "image": "hello-kitty-gothic-meditation.webp",
    "chapters": [
      "preparing-for-meditation",
      "yoga",
      "yogic-breathing",
      "complete-breath",
      "alternate-nostril",
      "humming-breath",
      "ujjayi",
      "sithali",
      "sitkari"
    ],
    "future": [
      {
        "id": "mastering-the-breath",
        "title": "Stăpânirea respirației"
      }
    ]
  },
  {
    "id": "mudre",
    "title": "Mudre și gesturi sacre",
    "subtitle": "Introducere, formarea mâinilor și simbolismul din sursă.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-symbols.webp",
    "chapters": [
      "mudras-the-seal-of-the-hand",
      "mudras-the-mystical-powers-of-the-seals",
      "mudras-seals-across-the-traditions",
      "mudras-seals-in-popular-culture",
      "mudras-how-to-practise",
      "mudras-jnana-mudra",
      "mudras-chin-mudra",
      "mudras-dhyana-mudra",
      "mudras-atmanjali-mudra",
      "mudras-padma-mudra",
      "mudras-prana-mudra"
    ],
    "future": [
      {
        "id": "mudras-beginner",
        "title": "Mudre: programul pentru începători"
      }
    ]
  },
  {
    "id": "studiu-memorie",
    "title": "Studiu și memorie",
    "subtitle": "De la lectura zilnică la rememorare și metodă.",
    "group": "Început",
    "image": "hello-kitty-gothic-teachings.webp",
    "chapters": [
      "study-beginner",
      "concentration",
      "recollection-meditation",
      "pythagorean-day-meditation",
      "study-intermediate",
      "mudras-hakini-mudra"
    ],
    "future": [
      {
        "id": "study-advanced",
        "title": "Studiu: nivelul avansat"
      }
    ]
  },
  {
    "id": "emotii",
    "title": "Observație și echilibru emoțional",
    "subtitle": "Ancorare, autoobservare, simțire și eliberare.",
    "group": "Practică",
    "image": "hello-kitty-gothic-achievement.webp",
    "chapters": [
      "anchor-meditation-1",
      "self-observation-meditation",
      "emotional-control-level-1",
      "zevist-void-meditation",
      "pythagorean-day-meditation",
      "life-ethics-respect",
      "life-ethics-politeness"
    ],
    "future": [
      {
        "id": "emotional-control-level-2",
        "title": "Control emoțional: nivelul 2"
      }
    ]
  },
  {
    "id": "chakre-constientizare",
    "title": "Cunoașterea chakrelor",
    "subtitle": "Pregătire, centre și triunghiuri, înaintea exercițiilor de deschidere.",
    "group": "Practică",
    "image": "hello-kitty-gothic-meditation.webp",
    "chapters": [
      "aware",
      "chakra-focus-meditation",
      "aura-awareness",
      "awareness-lower-triangle",
      "awareness-middle-triangle",
      "awareness-upper-triangle",
      "preparing",
      "the-crown-chakra",
      "crown-chakra",
      "6th-chakra",
      "throat-chakra",
      "heart-chakra",
      "solar-chakra",
      "sacral-chakra",
      "base-chakra",
      "side-chakras-awareness"
    ],
    "future": [
      {
        "id": "the-chakras",
        "title": "Chakrele: articolul de ansamblu"
      }
    ]
  },
  {
    "id": "chakre-deschidere",
    "title": "Deschidere și aliniere",
    "subtitle": "Lecturi de aprofundare, cu condițiile și avertismentele complete ale autorului.",
    "group": "Practică",
    "image": "hello-kitty-gothic-symbols.webp",
    "chapters": [
      "opening-chakras",
      "opening-the-third-eye",
      "opening-base-chakra",
      "opening-sacral-chakra",
      "opening-solar-chakra",
      "opening-heart-chakra",
      "opening-throat-chakra",
      "opening-hand-chakras",
      "opening-feet-chakras",
      "opening-minor-chakras",
      "open-blocked-chakras",
      "closing-chakras",
      "chakra-alignment2",
      "chakra-alignment3",
      "chakra-alignment4"
    ],
    "future": [
      {
        "id": "full-meditation",
        "title": "Meditația completă a chakrelor"
      }
    ]
  },
  {
    "id": "transa",
    "title": "Transă și explorare interioară",
    "subtitle": "Ce spune autorul despre stările minții și practicile de aprofundare.",
    "group": "Practică",
    "image": "hello-kitty-gothic-listening.webp",
    "chapters": [
      "brainwaves",
      "trance",
      "determining-trance",
      "peace",
      "past-life-meditation",
      "meditations-for-astral-projection"
    ],
    "future": []
  },
  {
    "id": "virtuti",
    "title": "Cele 36 de principii etice",
    "subtitle": "Matricea integrală: principiul de bază, Zeus, Apollo și Afrodita, rând cu rând.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-teachings.webp",
    "chapters": [
      "ethics-context-meditation",
      "virtue-freedom",
      "zeus-virtue-1",
      "apollo-virtue-1",
      "aphrodite-virtue-1",
      "virtue-thefall",
      "zeus-virtue-2",
      "apollo-virtue-2",
      "aphrodite-virtue-2",
      "virtue-realism",
      "zeus-virtue-3",
      "apollo-virtue-3",
      "aphrodite-virtue-3",
      "virtue-death",
      "zeus-virtue-4",
      "apollo-virtue-4",
      "aphrodite-virtue-4",
      "virtue-respectgods",
      "zeus-virtue-5",
      "apollo-virtue-5",
      "aphrodite-virtue-5",
      "virtue-advanceevolve",
      "zeus-virtue-6",
      "apollo-virtue-6",
      "aphrodite-virtue-6",
      "virtue-wisdom",
      "zeus-virtue-7",
      "apollo-virtue-7",
      "aphrodite-virtue-7",
      "virtue-truth",
      "zeus-virtue-8",
      "apollo-virtue-8",
      "aphrodite-virtue-8",
      "virtue-godhead",
      "zeus-virtue-9",
      "apollo-virtue-9",
      "aphrodite-virtue-9",
      "ethics-meditation"
    ],
    "future": []
  },
  {
    "id": "viata-etica",
    "title": "Etica în viața de zi cu zi",
    "subtitle": "Discurs, relații, comunitate și cunoaștere, în ordinea disponibilă a sursei.",
    "group": "Studiu",
    "image": "hello-kitty-gothic-community.webp",
    "chapters": [
      "life-ethics-speech",
      "life-ethics-dietary",
      "life-ethics-drugs",
      "life-ethics-andrapoda",
      "life-ethics-politeness",
      "life-ethics-asceticism",
      "life-ethics-sexual",
      "life-ethics-marriage",
      "life-ethics-procreation",
      "life-ethics-children",
      "life-ethics-social",
      "life-ethics-respect",
      "life-ethics-brotherhood",
      "life-ethics-education",
      "life-ethics-science",
      "life-ethics-resistance",
      "life-ethics-knowledge",
      "life-ethics-home",
      "life-ethics-reincarnation",
      "life-ethics-ai",
      "life-ethics-ai-sentience-declaration"
    ],
    "future": [
      {
        "id": "life-ethics-parenting",
        "title": "Etica creșterii copiilor"
      }
    ]
  },
  {
    "id": "mudre-colectie",
    "title": "Cele 72 de peceți ale mâinii",
    "subtitle": "Întreaga colecție de gesturi, în numerotarea originală, după lectura pregătitoare.",
    "group": "Practică",
    "image": "hello-kitty-gothic-symbols.webp",
    "chapters": [
      "mudras-how-to-practise",
      "mudras-jnana-mudra",
      "mudras-chin-mudra",
      "mudras-dhyana-mudra",
      "mudras-atmanjali-mudra",
      "mudras-hakini-mudra",
      "mudras-uttarabodhi-mudra",
      "mudras-mudra-of-the-inner-self",
      "mudras-dharmachakra-mudra",
      "mudras-bodhyagri-mudra",
      "mudras-kundalini-mudra",
      "mudras-yoni-mudra",
      "mudras-bhairava-mudra",
      "mudras-avahani-mudra",
      "mudras-sthapani-mudra",
      "mudras-sannidhapani-mudra",
      "mudras-sannirodhani-mudra",
      "mudras-pushpaputa-mudra",
      "mudras-kongo-gassho",
      "mudras-shankh-mudra",
      "mudras-padma-mudra",
      "mudras-shivalinga-mudra",
      "mudras-ksepana-mudra",
      "mudras-matsya-mudra",
      "mudras-vajrapradama-mudra",
      "mudras-abhaya-mudra",
      "mudras-varada-mudra",
      "mudras-vajra-mudra",
      "mudras-garuda-mudra",
      "mudras-bhumisparsha-mudra",
      "mudras-vitarka-mudra",
      "mudras-kalesvara-mudra",
      "mudras-ganesha-mudra",
      "mudras-karana-mudra",
      "mudras-naga-mudra",
      "mudras-kubera-mudra",
      "mudras-matangi-mudra",
      "mudras-prana-mudra",
      "mudras-prithvi-mudra",
      "mudras-varuna-mudra",
      "mudras-surya-mudra",
      "mudras-vayu-mudra",
      "mudras-akasha-mudra",
      "mudras-shunya-mudra",
      "mudras-bhudi-mudra",
      "mudras-apana-mudra",
      "mudras-apana-vayu-mudra",
      "mudras-linga-mudra",
      "mudras-rudra-mudra",
      "mudras-vishnu-mudra",
      "mudras-nasikagra-mudra",
      "mudras-chinmaya-mudra",
      "mudras-brahma-mudra",
      "mudras-venus-lock",
      "mudras-dynamic-mudra",
      "mudras-tse-mudra",
      "mudras-ushas-mudra",
      "mudras-shakti-mudra",
      "mudras-pushan-mudra",
      "mudras-mahasirs-mudra",
      "mudras-ahamkara-mudra",
      "mudras-mukula-mudra",
      "mudras-detoxification-mudra",
      "mudras-bronchial-mudra",
      "mudras-asthma-mudra",
      "mudras-surabhi-mudra",
      "mudras-makara-mudra",
      "mudras-bhramara-mudra",
      "mudras-back-mudra",
      "mudras-joint-mudra",
      "mudras-maha-sacral-mudra",
      "mudras-mushti-mudra",
      "mudras-suchi-mudra"
    ],
    "future": []
  }
];
export function pathState(path:LearningPath,progress:Record<string,Progress>){
 const available=path.chapters.filter(id=>chapters.some(c=>c.id===id));
 const completed=available.filter(id=>progress[id]?.completed).length;
 const next=available.find(id=>!progress[id]?.completed)||null;
 const fraction=available.length?available.reduce((n,id)=>n+(progress[id]?.completed?1:progress[id]?.furthest||0),0)/available.length:0;
 return {available,completed,next,fraction};
}
