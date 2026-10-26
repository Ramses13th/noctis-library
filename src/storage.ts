import {chapters, emptyProgress, type Progress} from '../lib/book';
export type LocalProfile={id:string;name:string};
export type LocalSettings={lastChapter:string|null;fontSize:number;lineHeight:number};
export type LocalState={progress:Record<string,Progress>;settings:LocalSettings};
const profilesKey='noctis.profiles.v1',activeKey='noctis.active-profile.v1';
const key=(id:string)=>'noctis.reader.v1.'+id;
const validId=(id:unknown):id is string=>typeof id==='string'&&chapters.some(c=>c.id===id);
const defaults=():LocalState=>({progress:{},settings:{lastChapter:null,fontSize:20,lineHeight:1.9}});
export function getProfiles():LocalProfile[]{
  const saved=localStorage.getItem(profilesKey);
  if(saved){try{const p=JSON.parse(saved);if(Array.isArray(p)){const valid=p.filter(x=>x&&typeof x.id==='string'&&/^[a-zA-Z0-9-]{1,80}$/.test(x.id)&&typeof x.name==='string'&&x.name.trim().length>0).slice(0,30);if(valid.length)return valid;}}catch{}}
  const p=[{id:crypto.randomUUID(),name:'Cititor'}];localStorage.setItem(profilesKey,JSON.stringify(p));localStorage.setItem(activeKey,p[0].id);return p;
}
export function getActiveProfile(profiles:LocalProfile[]){return profiles.find(p=>p.id===localStorage.getItem(activeKey))||profiles[0];}
export function activateProfile(id:string){localStorage.setItem(activeKey,id);}
export function createProfile(name:string){const profiles=getProfiles();if(profiles.length>=30)throw new Error('Poți păstra până la 30 de profiluri.');const n=name.trim().slice(0,50);if(!n)throw new Error('Scrie un nume pentru profil.');const p={id:crypto.randomUUID(),name:n};localStorage.setItem(profilesKey,JSON.stringify([...profiles,p]));activateProfile(p.id);return p;}
function cleanProgress(raw:unknown):Record<string,Progress>{
  const out:Record<string,Progress>={};if(!raw||typeof raw!=='object'||Array.isArray(raw))throw new Error('Fișierul nu conține un progres valid.');
  for(const [id,value] of Object.entries(raw)){
    if(!validId(id)||!value||typeof value!=='object')continue;
    const p=value as Partial<Progress>;
    if(typeof p.position!=='number'||!Number.isFinite(p.position)||typeof p.furthest!=='number'||!Number.isFinite(p.furthest)||typeof p.completed!=='boolean'||typeof p.bookmarked!=='boolean'||typeof p.note!=='string'||p.note.length>10000)throw new Error('Fișierul conține date de progres invalide.');
    out[id]={...emptyProgress(id),position:Math.max(0,Math.min(1,p.position)),furthest:Math.max(0,Math.min(1,p.furthest)),completed:p.completed,bookmarked:p.bookmarked,note:p.note,updatedAt:typeof p.updatedAt==='number'&&Number.isFinite(p.updatedAt)?p.updatedAt:0};
  }
  return out;
}
export function readState(id:string):LocalState{
  const saved=localStorage.getItem(key(id));if(!saved)return defaults();
  let raw;try{raw=JSON.parse(saved);}catch{throw new Error('Datele locale nu pot fi citite. Exportă-le înainte de a le modifica.');}
  const progress=cleanProgress(raw.progress||{}),s=raw.settings||{},state=defaults();
  state.progress=progress;state.settings={lastChapter:validId(s.lastChapter)?s.lastChapter:null,fontSize:Number.isInteger(s.fontSize)&&s.fontSize>=17&&s.fontSize<=28?s.fontSize:20,lineHeight:[1.7,1.9,2.1].includes(s.lineHeight)?s.lineHeight:1.9};return state;
}
export function writeProgress(id:string,p:Progress){const state=readState(id);state.progress[p.chapterId]={...p,furthest:Math.max(state.progress[p.chapterId]?.furthest||0,p.furthest)};state.settings.lastChapter=p.chapterId;localStorage.setItem(key(id),JSON.stringify(state));}
export function writeSettings(id:string,fontSize:number,lineHeight:number){const state=readState(id);state.settings={...state.settings,fontSize,lineHeight};localStorage.setItem(key(id),JSON.stringify(state));}
export function backupProfile(profile:LocalProfile){return {format:'noctis-progress',version:1,edition:'2026-10-26',exportedAt:new Date().toISOString(),profile:{name:profile.name},...readState(profile.id)};}
export function importProgress(profileId:string,text:string){
  if(text.length>3000000)throw new Error('Fișierul este prea mare.');const raw=JSON.parse(text);if(!raw||typeof raw!=='object')throw new Error('Fișier invalid.');
  const imported=cleanProgress(raw.progress),state=readState(profileId);
  for(const [id,p] of Object.entries(imported)){
    const old=state.progress[id];state.progress[id]=old?{...(p.updatedAt>=old.updatedAt?p:old),furthest:Math.max(p.furthest,old.furthest),completed:p.completed||old.completed,bookmarked:p.bookmarked||old.bookmarked}:p;
  }
  if(raw.settings&&typeof raw.settings==='object'){
    const s=raw.settings;if(validId(s.lastChapter))state.settings.lastChapter=s.lastChapter;if(Number.isInteger(s.fontSize)&&s.fontSize>=17&&s.fontSize<=28)state.settings.fontSize=s.fontSize;if([1.7,1.9,2.1].includes(s.lineHeight))state.settings.lineHeight=s.lineHeight;
  }
  localStorage.setItem(key(profileId),JSON.stringify(state));return Object.keys(imported).length;
}
