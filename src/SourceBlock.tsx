import React from 'react';
import {ArrowUpRight,ChevronDown} from 'lucide-react';
import {chapters,type Block} from '../lib/book';
import SourceTable from './SourceTable';

type Language='ro'|'en'|'parallel';
type Props={block:Block;language:Language;onNavigate:(id:string)=>void;grouped?:boolean};
export function SourceLink({url,children,className,onNavigate}:{url?:string;children:React.ReactNode;className?:string;onNavigate:(id:string)=>void}){
 if(!url)return <span className={className}>{children}</span>;
 let local;try{const u=new URL(url);if(!['https:','http:'].includes(u.protocol))return <span>{children}</span>;if(u.hostname==='templeofzeus.org'&&!u.hash)local=chapters.find(c=>c.id===u.pathname.slice(1));}catch{return <span>{children}</span>;}
 return local?<a className={className} href={'#read/'+local.id} onClick={e=>{e.preventDefault();onNavigate(local.id);}}>{children}</a>:<a className={className} href={url} target="_blank" rel="noopener noreferrer">{children}</a>;
}
function positions(text:string,label:string){
 const found:number[]=[];if(!label)return found;
 let from=0;for(;;){const i=text.indexOf(label,from);if(i<0)break;const left=text[i-1]||'',right=text[i+label.length]||'';if(!(/[\p{L}\p{N}]/u.test(left)&&/^[\p{L}\p{N}]/u.test(label))&&!(/[\p{L}\p{N}]/u.test(right)&&/[\p{L}\p{N}]$/u.test(label)))found.push(i);from=i+label.length;}
 return found;
}
export function SourceInline({block:b,lang,onNavigate}:{block:Block;lang:'ro'|'en';onNavigate:(id:string)=>void}){
 const text=b[lang]||'',used=new Set<number>();
 function plain(value:string){
  const marks=(b.emphasis||[]).map(m=>({label:lang==='en'?m.text:m.ro||'',kind:m.kind})).filter(m=>m.label);
  const spans=marks.flatMap(m=>positions(value,m.label).map(start=>({...m,start,end:start+m.label.length}))).sort((a,z)=>a.start-z.start||z.end-a.end);
  const out:React.ReactNode[]=[];let at=0;for(const m of spans){if(m.start<at)continue;out.push(value.slice(at,m.start));out.push(m.kind==='em'?<em key={m.start}>{m.label}</em>:<strong className="source-emphasis" key={m.start}>{m.label}</strong>);at=m.end;}out.push(value.slice(at));return out;
 }
 const ranges=(b.links||[]).flatMap((l,index)=>{const label=lang==='en'?l.text:l.ro||'';return positions(text,label).map(start=>({start,end:start+label.length,label,url:l.url,index}));}).sort((a,z)=>a.start-z.start||z.end-a.end);
 const result:React.ReactNode[]=[];let at=0;for(const range of ranges){if(range.start<at||used.has(range.index))continue;result.push(...plain(text.slice(at,range.start)));result.push(<SourceLink key={'link-'+range.start} url={range.url} onNavigate={onNavigate}>{plain(range.label)}</SourceLink>);used.add(range.index);at=range.end;}result.push(...plain(text.slice(at)));
 return <>{result}</>;
}
export default function TranslatedBlock({block:b,language,onNavigate,grouped=false}:Props){
 const link=(url:string|undefined,children:React.ReactNode,className?:string)=><SourceLink url={url} onNavigate={onNavigate} className={className}>{children}</SourceLink>;
 function part(lang:'ro'|'en'){
  const text=b[lang]||'',rows=(lang==='ro'?b.roRows:b.enRows)||[],rich=<SourceInline block={b} lang={lang} onNavigate={onNavigate}/>;
  const src=b.src?.startsWith('source/')?import.meta.env.BASE_URL+b.src:b.src;
  if(b.type==='comparison-table')return <SourceTable rows={rows} grades={b.cellKinds}/>;
  if(b.type==='audio')return <figure className="source-audio"><audio controls preload="none" aria-label={lang==='ro'?'Înregistrare audio din sursa originală':'Original source recording'} src={src}/><figcaption>{rich}</figcaption></figure>;
  if(b.type==='number-diagram')return <figure className={'number-diagram dots-'+(b.count||1)} aria-label={text}><div>{Array.from({length:b.count||1},(_,i)=><span key={i}/>)}</div><figcaption>{rich}</figcaption></figure>;
  if(b.unavailable)return <figure className="source-media-unavailable"><p>{lang==='ro'?'Imagine indisponibilă la sursă în momentul preluării.':'Image unavailable at the source when retrieved.'}</p>{link(b.url||b.src,lang==='ro'?'Deschide imaginea originală':'Open the original image','source-link')}</figure>;
  if(b.type==='image'||b.type==='diagram')return <figure className={'source-figure '+(b.type==='diagram'?'source-diagram-figure':'')}><img loading="lazy" decoding="async" src={src} alt={lang==='ro'?b.altRo:b.alt} width={b.width} height={b.height}/></figure>;
  if(b.type==='symbol')return <section className="source-symbol"><img loading="lazy" decoding="async" src={src} alt={lang==='ro'?b.altRo:b.alt}/><div><small>{lang==='ro'?b.roCategory:b.enCategory}</small><h3>{lang==='ro'?b.roTitle:b.enTitle}</h3><p>{rich}</p>{link(b.url,<>{lang==='ro'?b.roAction:b.enAction} <ArrowUpRight size={13}/></>,'source-link')}</div></section>;
  if(b.type==='person')return <section className="source-person"><div className="person-heading"><img loading="lazy" decoding="async" src={src} alt={b.alt}/><div>{link(b.url,<h3>{rows[0]?.[0]}</h3>)}<small>{rows[0]?.[1]}</small></div></div><div className="person-fields">{rows[0]?.slice(2).map((f,i)=><p key={i}>{f}</p>)}</div></section>;
  if(b.type==='table'){const row=(r:string[],i:number,head=false)=><tr key={i}>{r.map((c,j)=>head?<th scope="col" key={j}>{c}</th>:j===0?<th scope="row" key={j}>{c}</th>:<td key={j}>{c}</td>)}</tr>;return <div className="source-table-wrap" tabIndex={0} aria-label={lang==='ro'?'Tabel din sursă; se poate derula orizontal':'Source table; horizontally scrollable'}><table className="source-table">{b.headerRow&&<thead>{row(rows[0],0,true)}</thead>}<tbody>{rows.slice(b.headerRow?1:0).map((r,i)=>row(r,i))}</tbody></table></div>;}
  if(/^h[2-6]$/.test(b.type))return React.createElement(b.type,null,rich);
  if(b.type==='summary')return <h2>{rich}</h2>;
  if(b.role==='citation'||b.type==='cite')return <cite className="source-citation">{rich}</cite>;
  if(b.type==='figcaption'||b.role==='caption'||b.role==='credit')return <p className={'source-caption '+(b.role==='credit'?'source-credit':'')}>{b.type==='link'?link(b.url,text):rich}</p>;
  if(b.type==='link')return link(b.url,<><span>{rich}</span><ArrowUpRight size={14}/></>,'source-index-link');
  if(b.type==='names')return <p className="source-names">{text}</p>;
  if(b.type==='identifier')return <span className="source-identifier">{text}</span>;
  if(b.type==='dt')return <p className="source-term">{rich}</p>;
  if(b.type==='dd')return <p className="source-definition">{rich}</p>;
  if(b.quoteLanguage&&text.includes('«')){const start=text.indexOf('«');return <p className="source-quotation">{text.slice(0,start)}<span lang={b.quoteLanguage}>{text.slice(start)}</span></p>;}
  if(b.type==='blockquote'||b.role==='quote')return grouped?<p>{rich}</p>:<blockquote>{rich}</blockquote>;
  if(b.role==='callout')return grouped?<p>{rich}</p>:<aside className="source-callout">{rich}</aside>;
  if(b.type==='li')return <div className={'source-list-item '+(b.listStyle==='ordered'?'source-step':'')} style={{'--list-depth':b.listDepth||0} as React.CSSProperties}><span aria-hidden="true">{b.listStyle==='ordered'&&!/^\d+[.)]\s/.test(text)?String(b.ordinal||1)+'.':/^\d+[.)]\s/.test(text)?'':'·'}</span><p>{rich}</p></div>;
  return <p>{rich}</p>;
 }
 const refs=(b.links||[]).filter(l=>{if(b.type==='link'||b.type==='person'||b.type==='symbol')return false;const roMatch=l.ro&&positions(b.ro||'',l.ro).length;return language==='en'?false:!roMatch;});
 const className='source-block '+(b.poetry?'source-poetry ':'')+'source-kind-'+b.type+(b.role?' source-role-'+b.role:'');
 return <div className={className} id={b.anchor?'source-'+b.anchor:undefined}>{language==='parallel'?<div className="parallel-block"><div lang="ro"><span className="parallel-language">RO</span>{part('ro')}</div><div lang={b.sourceLanguage||'en'}><span className="parallel-language">EN</span>{part('en')}</div></div>:<div lang={b.sourceLanguage&&language==='ro'&&b.ro===b.en?b.sourceLanguage:language}>{part(language)}</div>}{refs.length>0&&<details className="source-references"><summary>Legături din acest pasaj ({refs.length}) <ChevronDown size={11}/></summary>{refs.map((l,i)=><React.Fragment key={l.url+i}>{link(l.url,<>{l.ro||l.text} <ArrowUpRight size={11}/></>)}</React.Fragment>)}</details>}</div>;
}
export const SourceContent=React.memo(function SourceContent({blocks,language,onNavigate}:{blocks:Block[];language:Language;onNavigate:(id:string)=>void}){
 const result:React.ReactNode[]=[];for(let i=0;i<blocks.length;){const b=blocks[i];if(b.quoteGroup){const members:Block[]=[];const start=i;while(i<blocks.length&&blocks[i].quoteGroup===b.quoteGroup)members.push(blocks[i++]);const children=members.map((block,j)=><TranslatedBlock key={j} block={block} language={language} onNavigate={onNavigate} grouped/>);result.push(b.role==='callout'?<aside className="source-callout" key={start}>{children}</aside>:<blockquote className="source-quote-group" key={start}>{children}</blockquote>);}else{result.push(<TranslatedBlock key={i} block={b} language={language} onNavigate={onNavigate}/>);i++;}}
 return <>{result}</>;
});
