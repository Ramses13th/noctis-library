import rawChapters from './chapter-index.json';
import rawCatalog from './catalog.json';
export type Block = {count?:number; unavailable?:boolean;poetry?:boolean; role?:string;quoteGroup?:string;sourceLanguage?:string;anchor?:string;headerRow?:boolean;listStyle?:string;listDepth?:number;ordinal?:number;width?:number;height?:number;emphasis?:{text:string;ro?:string;kind:string}[];type: string; en?: string; ro?: string; quoteLanguage?:'grc'|'la'; enRows?: string[][]; roRows?: string[][];cellKinds?:string[][]; src?:string;alt?:string;altRo?:string;enTitle?:string;roTitle?:string;enCategory?:string;roCategory?:string;enAction?:string;roAction?:string;url?:string;links?:{text:string;ro?:string;url:string}[]};
export type Chapter = {section?:string;contentHash?:string;sourceTopics?:string[];id: string; title: string; originalTitle: string; category: string; url: string; author: string; credit: string; consultedAt?:string; portion: string; status: string; sourceWords: number; translatedSourceWords: number; blocks: Block[]};
export type Progress = {chapterId: string; position: number; furthest: number; completed: boolean; bookmarked: boolean; note: string; updatedAt: number};
export const chapters = rawChapters as Chapter[];
const contentCache=new Map<string,Chapter>();
const contentRequests=new Map<string,Promise<Chapter>>();
export async function loadChapter(id:string):Promise<Chapter>{
 const metadata=chapters.find(c=>c.id===id);if(!metadata)throw new Error('Capitol necunoscut.');
 const cached=contentCache.get(id);if(cached)return cached;
 const existing=contentRequests.get(id);if(existing)return existing;
 const request=(async()=>{
 const response=await fetch(import.meta.env.BASE_URL+'chapters/'+id+'.'+metadata.contentHash+'.json');
 if(!response.ok)throw new Error('Textul nu a putut fi încărcat.');
 const data=await response.json() as Chapter;
 if(data.id!==id||!Array.isArray(data.blocks)||!data.blocks.length||data.sourceWords!==metadata.sourceWords)throw new Error('Fișierul capitolului este incomplet.');
 const chapter={...metadata,blocks:data.blocks};contentCache.set(id,chapter);return chapter;
 })();contentRequests.set(id,request);
 try{return await request;}finally{contentRequests.delete(id);}
}
export const publicationTarget=300;
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
const proposedRoadmap = [
 {category:'magick',id:'zevist-numerology-more',title:'Mai multe informații despre numere',detail:'Continuarea seriei complete de la unu la zece.',stage:'next'},
 {category:'magick',id:'zevist-numerology-zero',title:'Zero filosofic',detail:'Unul dintre studiile numerice complementare.',stage:'planned'},
 {category:'reference',id:'sacred-geometry',title:'Geometrie sacră',detail:'Formele la care trimit articolele despre numere.',stage:'next'},
 {category:'meditation',id:'mudras-the-seal-of-the-hand',title:'Sigiliul mâinii',detail:'Continuarea secțiunii despre gesturile sacre.',stage:'next'},
 {category:'gods',id:'adonis',title:'Adonis',detail:'O nouă prezentare amplă din secțiunea Zeilor.',stage:'planned'},
 {category:'teachings',id:'advancedphilosophy-fourgreatphilosophers',title:'Cei patru mari filosofi',detail:'Continuarea lecturilor despre izvoarele antice.',stage:'planned'},
];
export const roadmap=proposedRoadmap.filter(item=>!chapters.some(c=>c.id===item.id));
export const emptyProgress = (id:string): Progress => ({chapterId:id, position:0, furthest:0, completed:false, bookmarked:false, note:'', updatedAt:0});
