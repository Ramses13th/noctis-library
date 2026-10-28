import {build} from 'esbuild';
import assert from 'node:assert/strict';
import fs from 'node:fs';
async function moduleFor(entry){const r=await build({entryPoints:[entry],bundle:true,platform:'node',format:'esm',write:false});return import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));}
const {learningPaths,pathState}=await moduleFor('lib/pathways.ts');
const {practices,remainingAt,clockText}=await moduleFor('lib/practice.ts');
const chapters=JSON.parse(fs.readFileSync('lib/chapters.json','utf8')),ids=new Set(chapters.map(c=>c.id));
assert.equal(learningPaths.length,23);
for(const p of learningPaths){assert.ok(p.chapters.length>=3);assert.equal(new Set(p.chapters).size,p.chapters.length);for(const id of p.chapters)assert.ok(ids.has(id),p.id+': unavailable '+id);const state=pathState(p,{});assert.equal(state.next,p.chapters[0]);assert.equal(state.completed,0);}
const catalogIds=new Set(JSON.parse(fs.readFileSync('lib/catalog.json','utf8')).map(c=>c.id));
for(const p of learningPaths)for(const future of p.future){assert.ok(catalogIds.has(future.id),p.id+': unknown source link '+future.id);assert.ok(!ids.has(future.id),p.id+': published chapter left in future queue '+future.id);}
const path=learningPaths.find(p=>p.id==='atei-sceptici');
const one={outsiders:{completed:true,furthest:1}};
assert.equal(pathState(path,one).next,'friendsofzevism');
assert.equal(pathState(path,one).completed,1);
assert.equal(pathState(path,one).fraction,1/path.chapters.length);
assert.equal(pathState(path,Object.fromEntries(path.chapters.map(id=>[id,{completed:true,furthest:1}]))).next,null);
assert.equal(remainingAt(8000,1000),7000);
assert.equal(remainingAt(8000,50000),0); // A late tick after a background tab catches up to the wall clock.
assert.equal(clockText(120000),'02:00');assert.equal(clockText(1),'00:01');assert.equal(clockText(-200),'00:00');
assert.deepEqual(practices['dot-meditation'].stages.map(s=>s.seconds),[120,240,360,360,600]);
assert.deepEqual(practices['self-observation-meditation'].stages.map(s=>s.seconds),[300,300,300]);
const audit=JSON.parse(fs.readFileSync('lib/translation-audit-2026-10-27.json','utf8'));
assert.equal(audit.pages.length,9);
const newAudit=JSON.parse(fs.readFileSync('lib/translation-audit-2026-10-27b.json','utf8'));
assert.equal(newAudit.pages.length,7);
for(const a of newAudit.pages){const chapter=chapters.find(c=>c.id===a.id);assert.equal(chapter.blocks.length,a.blocks);assert.equal(chapter.sourceWords,a.sourceWords);assert.equal(a.textExtractionMatched,true);for(const i of a.originalQuotationBlocks){const b=chapter.blocks[i];assert.equal(b.ro.slice(b.ro.indexOf('«')),b.en.slice(b.en.indexOf('«')));}}
for(const c of chapters){assert.equal(c.sourceWords,c.translatedSourceWords);for(const b of c.blocks){if(b.en)assert.ok(b.ro,c.id);if(b.enRows){assert.equal(b.roRows.length,b.enRows.length);b.enRows.forEach((row,i)=>assert.equal(b.roRows[i].length,row.length));}if(b.src?.startsWith('source/'))assert.ok(fs.existsSync('public/'+b.src),b.src);}}
const largeAudit=JSON.parse(fs.readFileSync('lib/translation-audit-2026-10-27c.json','utf8'));
assert.equal(largeAudit.pages.length,67);
for(const a of largeAudit.pages){const c=chapters.find(c=>c.id===a.id);assert.equal(c.blocks.length,a.blocks);assert.equal(c.sourceWords,a.sourceWords);assert.equal(a.textExtractionMatched,true);for(const i of a.originalLanguageBlocks)assert.equal(c.blocks[i].ro,c.blocks[i].en);}
assert.equal(chapters.length,300);
const volumeOrder=['temple','gods','meditation','magick','astrology','teachings','community','reference'];
for(let i=0;i<chapters.length;i++){assert.ok(chapters[i].section);if(i)assert.ok(volumeOrder.indexOf(chapters[i].category)>=volumeOrder.indexOf(chapters[i-1].category));}
const finalAudit=JSON.parse(fs.readFileSync('lib/translation-audit-2026-10-28.json','utf8'));
assert.equal(finalAudit.pages.length,200);
for(const a of finalAudit.pages){const c=chapters.find(c=>c.id===a.id);assert.equal(c.blocks.length,a.blocks);assert.equal(c.sourceWords,a.sourceWords);assert.equal(a.textExtractionMatched,true);for(const i of a.originalLanguageBlocks)assert.equal(c.blocks[i].ro,c.blocks[i].en);}
assert.equal(chapters.filter(c=>c.section.startsWith('Mudre: pecețile')).length,72);
console.log('PASS: 23 paths, shared progress, source timers, 300 complete bilingual chapters, 200-page audit, original-language quotations, 72 ordered seals, linear volumes and local media.');
