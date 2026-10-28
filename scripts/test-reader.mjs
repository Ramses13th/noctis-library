import fs from 'node:fs';
import assert from 'node:assert/strict';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {build} from 'esbuild';
async function moduleFor(entry){const result=await build({entryPoints:[entry],bundle:true,platform:'node',format:'esm',write:false,define:{'import.meta.env.BASE_URL':'"/noctis-library/"'}});return import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));}
const {default:SourceBlock,SourceContent}=await moduleFor('src/SourceBlock.tsx');
const render=block=>renderToStaticMarkup(React.createElement(SourceBlock,{block,language:'ro',onNavigate:()=>{}}));
const paragraph=render({type:'p',en:'Read this guide.',ro:'Citește acest ghid.',links:[{text:'this guide',ro:'acest ghid',url:'https://templeofzeus.org/unpublished-guide'}]});
assert.match(paragraph,/<p>Citește <a /);assert.ok(!paragraph.includes('source-index-link'));
assert.match(render({type:'li',en:'Step',ro:'Pas',listStyle:'ordered',ordinal:3,listDepth:1}),/3\.<\/span><p>Pas<\/p>/);
assert.match(render({type:'figcaption',ro:'Vedere laterală'}),/source-caption/);
assert.match(render({type:'p',role:'citation',ro:'Marcus Aurelius, Meditații V.16'}),/<cite /);
const quote=renderToStaticMarkup(React.createElement(SourceContent,{blocks:[{type:'p',role:'citation',quoteGroup:'q1',ro:'Autor'},{type:'p',role:'quote',quoteGroup:'q1',ro:'Textul citat.'}],language:'ro',onNavigate:()=>{}}));
assert.equal((quote.match(/<blockquote/g)||[]).length,1);assert.match(quote,/<cite[^>]*>Autor<\/cite>/);assert.match(quote,/<p>Textul citat\.<\/p>/);
const table=render({type:'table',headerRow:true,enRows:[['A','B'],['C','D']],roRows:[['A','B'],['C','D']]});assert.match(table,/<thead>/);assert.match(table,/scope="col"/);assert.match(table,/scope="row"/);
const {chapters,loadChapter}=await moduleFor('lib/book.ts');
for(const c of chapters){assert.equal(c.blocks.length,0);const file='public/chapters/'+c.id+'.'+c.contentHash+'.json';assert.ok(fs.existsSync(file));const full=JSON.parse(fs.readFileSync(file,'utf8'));assert.equal(full.id,c.id);assert.ok(full.blocks.length>0);assert.equal(full.sourceWords,c.sourceWords);}
let requests=0;const originalFetch=globalThis.fetch;
globalThis.fetch=async url=>{requests++;return new Response(fs.readFileSync('public/'+String(url).split('/noctis-library/')[1],'utf8'),{status:200});};
const first=await loadChapter(chapters[0].id);assert.ok(first.blocks.length);await loadChapter(chapters[0].id);assert.equal(requests,1);
globalThis.fetch=async()=>new Response('',{status:503});await assert.rejects(loadChapter(chapters[1].id));
globalThis.fetch=originalFetch;
console.log('PASS: inline links, source quotations with attribution, numbered nested steps, captions, table headers, independent complete chapter files, load/cache and failure handling.');
