import rawChapters from './chapters.json';
import rawCatalog from './catalog.json';
export type Block = {type: string; en?: string; ro?: string; enRows?: string[][]; roRows?: string[][];cellKinds?:string[][]; src?:string;alt?:string;altRo?:string;enTitle?:string;roTitle?:string;enCategory?:string;roCategory?:string;enAction?:string;roAction?:string;url?:string;links?:{text:string;url:string}[]};
export type Chapter = {id: string; title: string; originalTitle: string; category: string; url: string; author: string; credit: string; consultedAt?:string; portion: string; status: string; sourceWords: number; translatedSourceWords: number; blocks: Block[]};
export type Progress = {chapterId: string; position: number; furthest: number; completed: boolean; bookmarked: boolean; note: string; updatedAt: number};
export const chapters = rawChapters as Chapter[];
export const catalog = rawCatalog;
export const volumes = [
  {id:'temple', title:'Templul', subtitle:'Începutul călătoriei', numeral:'I', icon:'temple'},
  {id:'gods', title:'Zeii și daimonii', subtitle:'Nume și tradiții', numeral:'II', icon:'sparkles'},
  {id:'meditation', title:'Meditația', subtitle:'Fundamentele practicii', numeral:'III', icon:'moon'},
  {id:'magick', title:'Magie și teurgie', subtitle:'Minte, energie, intenție', numeral:'IV', icon:'flame'},
  {id:'astrology', title:'Astrologia', subtitle:'Introducere în divinație', numeral:'V', icon:'orbit'},
  {id:'teachings', title:'Învățăturile', subtitle:'Texte și doctrine', numeral:'VI', icon:'scroll'},
  {id:'community', title:'Comunitatea', subtitle:'Personalități', numeral:'VII', icon:'users'},
  {id:'reference', title:'Simboluri și repere', subtitle:'Limbajul formelor', numeral:'VIII', icon:'diamond'},
];
export const roadmap = [
 {category:'temple',id:'friendsofzevism',title:'Prietenii zevismului: pentru cei interesați',detail:'Continuarea traseului pentru atei și sceptici, cu dialog și izvoare antice.',stage:'next'},
 {category:'magick',id:'zevist-numerology-5',title:'5 · Pentada',detail:'Continuarea seriei după Monadă, Diadă, Triadă și Tetradă.',stage:'next'},
 {category:'meditation',id:'aum',title:'AUM',detail:'Textul complet, imaginile și interpretările din sursă.',stage:'next'},
 {category:'meditation',id:'yoga',title:'Despre Kundalini Yoga',detail:'Articolul explicativ al autorului; practica rămâne în contextul instrucțiunilor originale.',stage:'planned'},
 {category:'reference',id:'zevism-inheritance',title:'Sinteza moștenirii',detail:'Contextul Tabelului general al sintezei.',stage:'planned'},
 {category:'gods',id:'our-goddess-bastet',title:'Zeița Bastet',detail:'Continuarea lecturilor despre Zei.',stage:'planned'},
];
export const emptyProgress = (id:string): Progress => ({chapterId:id, position:0, furthest:0, completed:false, bookmarked:false, note:'', updatedAt:0});
