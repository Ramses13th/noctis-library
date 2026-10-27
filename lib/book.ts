import rawChapters from './chapters.json';
import rawCatalog from './catalog.json';
export type Block = {type: string; en?: string; ro?: string; quoteLanguage?:'grc'|'la'; enRows?: string[][]; roRows?: string[][];cellKinds?:string[][]; src?:string;alt?:string;altRo?:string;enTitle?:string;roTitle?:string;enCategory?:string;roCategory?:string;enAction?:string;roAction?:string;url?:string;links?:{text:string;url:string}[]};
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
 {category:'magick',id:'zevist-numerology-7',title:'7 · Heptada',detail:'Continuarea seriei după Hexadă.',stage:'next'},
 {category:'meditation',id:'finding-your-meditation-type',title:'Găsirea tipului tău de meditație',detail:'Următoarea lectură propusă pentru traseul de meditație.',stage:'next'},
 {category:'gods',id:'our-goddess-sekhmet',title:'Zeița Sekhmet',detail:'Continuarea lecturilor despre Zei, după Bastet.',stage:'next'},
 {category:'meditation',id:'energy-meditation',title:'Meditația energiei',detail:'Continuarea traseului despre energie și practica sursei.',stage:'planned'},
 {category:'reference',id:'sacred-geometry',title:'Geometrie sacră',detail:'Formele la care trimit articolele de numerologie.',stage:'planned'},
 {category:'teachings',id:'ancientwisdom',title:'Înțelepciunea antică',detail:'Continuarea lecturilor despre izvoarele antice.',stage:'planned'},
];
export const emptyProgress = (id:string): Progress => ({chapterId:id, position:0, furthest:0, completed:false, bookmarked:false, note:'', updatedAt:0});
