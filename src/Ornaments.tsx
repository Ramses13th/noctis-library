import React from 'react';
import {volumeArt} from '../lib/art';

// Small original line drawings share the same ribbon, moon and book vocabulary.
export function NoctisMark({kind,size=20}:{kind:'shelf'|'book'|'progress'|'translation'|'bow';size?:number}) {
  const paths={
    shelf:<><path d="M4 5h4v15H4zM10 3h4v17h-4zM16 6l3-1 4 14-3 1zM2 22h23"/><path d="M5 9h2m4-2h2m5 2 2-.6"/></>,
    book:<><path d="M13 6C9 3 5 4 2 5v16c4-2 8-2 11 0 3-2 7-2 11 0V5c-4-1-7-2-11 1v15"/><path d="M17 4v9l2-2 2 2V4M5 9l5 1m-5 3 5 1"/></>,
    progress:<><path d="M5 20a10 10 0 1 1 17-4M5 20l-1-5m1 5 5-1"/><path d="M13 7v6l4 2M17 23l2-2 2 2 2-2"/><path d="m4 4 1-2 1 2 2 1-2 1-1 2-1-2-2-1z"/></>,
    translation:<><path d="M4 4h15v17H4zM7 8h9M7 12h5M7 16h7M19 7h4v17H8v-3"/><path d="m18 14 1-2 1 2 2 1-2 1-1 2-1-2-2-1z"/></>,
    bow:<><path d="M11 12C2 2 0 7 3 14c2 4 5 1 8-2m4 0C24 2 26 7 23 14c-2 4-5 1-8-2"/><path d="M11 10h4v5h-4zM11 15l-4 8 4-1 2 2 1-9m1 0 5 8-4-1"/></>
  };
  return <svg width={size} height={size} viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={'noctis-mark mark-'+kind} aria-hidden="true">{paths[kind]}</svg>;
}

// Original volume emblems use the same cat, ribbon, crescent and book vocabulary.
export function NoctisVolumeMark({category,size=24}:{category:string;size?:number}){
  const icons:Record<string,React.ReactNode>={
    temple:<><path d="m4 13 12-7 12 7H4Zm3 2v12m6-12v12m6-12v12m6-12v12M3 29h26M5 27h22"/><path d="m14 4 2-2 2 2-2 2-2-2Zm-3 13h2m4 0h2m4 0h2"/></>,
    gods:<><path d="M8 9 9 4l5 3h4l5-3 1 5c4 3 4 12 0 15-4 4-12 4-16 0-4-3-4-12 0-15Z"/><path d="M6 27c-3-1-5-4-5-8m25 8c3-1 5-4 5-8M3 22l3 1m-2 1 3 1m22-3-3 1m2 1-3 1"/><path d="M11 15v2m10-2v2m-6 2h2M20 7l2-3 3 1-1 3-3 1-1-2Z"/></>,
    meditation:<><path d="M25 5a12 12 0 1 0 2 19A11 11 0 0 1 25 5Z"/><path d="m8 15 1-4 4 2h4l4-2 1 4c2 2 2 6 0 8-3 3-10 3-13 0-2-2-3-6-1-8Zm3 4 2 1m4 0 2-1M8 28c4-3 12-3 16 0M24 2v4m-2-2h4"/></>,
    magick:<><path d="M15 12C10 9 6 9 2 11v17c4-2 9-2 13 0 4-2 9-2 13 0V11c-4-2-9-2-13 1v16"/><path d="M5 15h6m-6 4h6m9-1a4 4 0 1 0 5 5 4 4 0 0 1-5-5Zm-2-9 8-8m-4 0h4v4M9 6 6 3 3 4l1 3 4 1m2-2 3-3 3 1-1 3-4 1"/></>,
    astrology:<><circle cx="16" cy="17" r="9"/><ellipse cx="16" cy="17" rx="14" ry="5" transform="rotate(-28 16 17)"/><path d="M16 8c-5 5-5 13 0 18 5-5 5-13 0-18ZM7 29h18m-9-3v3M6 5 5 2 2 3l1 3 3 1m2-2 2-3 3 1-1 3-3 1m16-5 1 2 2 1-2 1-1 2-1-2-2-1 2-1Z"/></>,
    teachings:<><path d="M8 4h16a4 4 0 0 1 0 8h-2V8H8v18a3 3 0 0 1-6 0V4h6Zm14 8v15a3 3 0 0 1-3 3H5m17-3h5m-5 3h5V15"/><path d="M11 13h7m-7 5h7m-7 5h4M26 2l3 2-3 4-3-2 3-4Z"/></>,
    community:<><path d="m4 13 1-5 4 3h4l3-3 1 5c3 3 2 10-1 12-4 2-8 2-11 0-3-2-4-9-1-12ZM18 10l1-4 3 2h3l3-2 1 4c1 2 1 7-1 9M20 12v2m5-2v2M8 17v2m5-2v2m7 6c2-2 5-2 8 0v5c-3-1-6-1-8 0-3-1-6-1-8 0v-4m8-1v5"/><path d="m24 7 1-3 3 1-1 3-2 1"/></>,
    reference:<><path d="m16 2 13 14-13 14L3 16 16 2Zm0 5v3m0 12v3M7 16h3m12 0h3"/><path d="m11 22 5-12 5 12m-8-5h6m-4-7 1-3 1 3M5 4 3 2 1 3l1 3 3 1m2-3 2-2 3 1-1 3-3 1"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" className={'noctis-volume-mark volume-mark-'+category} aria-hidden="true">{icons[category]||icons.reference}</svg>;
}

export function ChapterPlate({category}:{category:string;section?:string}) {
  const art=volumeArt(category);
  return <figure className="chapter-plate"><span className="plate-rule"/><img src={import.meta.env.BASE_URL+'assets/'+art.file} alt="" width="110" height="110" loading="lazy"/><span className="plate-rule"/><figcaption>ORNAMENT NOCTIS · ILUSTRAȚIE AI</figcaption></figure>;
}
