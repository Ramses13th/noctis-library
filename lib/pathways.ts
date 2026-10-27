import {chapters,type Progress} from './book';
export type LearningPath={id:string;title:string;subtitle:string;group:'Început'|'Practică'|'Studiu';image:string;chapters:string[];future:{id:string;title:string}[]};
const reader='hello-kitty-gothic-reader.png',meditation='hello-kitty-gothic-meditation.png',numbers='hello-kitty-gothic-numerology.png',map='hello-kitty-gothic-pathways.png',sound='hello-kitty-gothic-listening.png';
export const learningPaths:LearningPath[]=[
 {id:'atei-sceptici',title:'Atei și sceptici',subtitle:'Critica ateismului, dialogul și argumentele autorului, în ordinea lecturii.',group:'Studiu',image:map,chapters:['outsiders','friendsofzevism','zevism-mastertable','our-god','aware'],future:[{id:'newpeople',title:'Noii inițiați'}]},
 {id:'primii-pasi',title:'Primii pași',subtitle:'Orientare, apoi prima întâlnire cu practica.',group:'Început',image:map,chapters:['welcome','newcomers','aware','meditation'],future:[{id:'newpeople',title:'Noii inițiați'}]},
 {id:'meditatie',title:'Învață să meditezi',subtitle:'Observă. Concentrează-te. Revino la liniște.',group:'Practică',image:meditation,chapters:['aware','self-observation-meditation','dot-meditation','zevist-void-meditation'],future:[{id:'finding-your-meditation-type',title:'Găsirea tipului tău de meditație'}]},
 {id:'magie',title:'Fundamentele magiei',subtitle:'Vocabularul sursei, atenție și lucrul cu energia.',group:'Început',image:reader,chapters:['magick','aware','foundation-meditation','concentration','zevist-numerology'],future:[{id:'basic-meditation-program',title:'Programul de bază de meditație'}]},
 {id:'zei',title:'Zeii și daimonii',subtitle:'Prezentarea tradiției și relația cu divinul.',group:'Studiu',image:reader,chapters:['thegods','our-god','about-guardian-daemons','our-goddess-bastet'],future:[{id:'our-goddess-sekhmet',title:'Zeița Sekhmet'}]},
 {id:'concentrare',title:'Atenție și concentrare',subtitle:'De la un singur punct la ascultarea neîntreruptă.',group:'Practică',image:meditation,chapters:['concentration','dot-meditation','awareness-of-sound-meditation','zevist-void-meditation'],future:[{id:'sight-and-visualization-meditation',title:'Vedere și vizualizare'}]},
 {id:'numerologie',title:'Număr și sens',subtitle:'O lectură treptată, de la Monadă la Hexadă.',group:'Studiu',image:numbers,chapters:['zevist-numerology','zevist-numerology-1','zevist-numerology-2','zevist-numerology-3','zevist-numerology-4','zevist-numerology-5','zevist-numerology-6'],future:[{id:'zevist-numerology-7',title:'7 · Heptada'}]},
 {id:'izvoare-antice',title:'Izvoare și mărturii antice',subtitle:'Textele citate, personalitățile și interpretarea lor în sursă.',group:'Studiu',image:map,chapters:['our-doctrines','friendsofzevism','about-guardian-daemons','personalities-index','zevist-numerology-3'],future:[{id:'ancientwisdom',title:'Înțelepciunea antică'}]},
 {id:'simboluri',title:'Simboluri și forme',subtitle:'Semnele tradiției, numerele și formele lor.',group:'Studiu',image:numbers,chapters:['symbols','zevist-numerology','zevist-numerology-3','zevist-numerology-4','aum'],future:[{id:'sacred-geometry',title:'Geometrie sacră'}]},
 {id:'energie',title:'Energia în practica sursei',subtitle:'Noțiuni introductive, respirație și corespondențe sonore.',group:'Practică',image:meditation,chapters:['aware','foundation-meditation','chakra-sounds-meditation','aum','yoga'],future:[{id:'energy-meditation',title:'Meditația energiei'}]},
 {id:'ascultare',title:'Ascultare și observație',subtitle:'Gânduri, emoții și atenție auditivă.',group:'Practică',image:sound,chapters:['self-observation-meditation','awareness-of-sound-meditation','chakra-sounds-meditation','zevist-void-meditation'],future:[{id:'awareness-of-touch-meditation',title:'Conștientizarea atingerii'}]},
 {id:'astrologie',title:'Repere pentru astrologie',subtitle:'Introducere și limbajul simbolic folosit de autor.',group:'Studiu',image:numbers,chapters:['about-astrology','zevist-numerology','symbols'],future:[{id:'astrology',title:'Indexul astrologiei'}]},
 {id:'traditii',title:'Nume, tradiții și continuitate',subtitle:'Compară prezentările și urmărește referințele autorului.',group:'Studiu',image:map,chapters:['thegods','our-god','our-goddess-bastet','personalities-index','aum','zevism-inheritance'],future:[{id:'zevism-egyptian',title:'Tradiția egipteană'}]},
];
export function pathState(path:LearningPath,progress:Record<string,Progress>){
 const available=path.chapters.filter(id=>chapters.some(c=>c.id===id));
 const completed=available.filter(id=>progress[id]?.completed).length;
 const next=available.find(id=>!progress[id]?.completed)||null;
 const fraction=available.length?available.reduce((n,id)=>n+(progress[id]?.completed?1:progress[id]?.furthest||0),0)/available.length:0;
 return {available,completed,next,fraction};
}
