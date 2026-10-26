import React from 'react';

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

export function ChapterPlate({category}:{category:string}) {
  const asset=category==='meditation'?'hello-kitty-gothic-meditation.png':category==='magick'||category==='astrology'?'hello-kitty-gothic-numerology.png':'hello-kitty-gothic-reader.png';
  return <figure className="chapter-plate"><span className="plate-rule"/><img src={import.meta.env.BASE_URL+'assets/'+asset} alt="" width="110" height="110" loading="lazy"/><span className="plate-rule"/><figcaption>ORNAMENT NOCTIS · ILUSTRAȚIE AI</figcaption></figure>;
}
