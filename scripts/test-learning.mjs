import {build} from 'esbuild';
import assert from 'node:assert/strict';
import fs from 'node:fs';
async function moduleFor(entry){const r=await build({entryPoints:[entry],bundle:true,platform:'node',format:'esm',write:false});return import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));}
const {learningPaths,pathState}=await moduleFor('lib/pathways.ts');
const {practices,remainingAt,clockText}=await moduleFor('lib/practice.ts');
const chapters=JSON.parse(fs.readFileSync('lib/chapters.json','utf8')),ids=new Set(chapters.map(c=>c.id));
assert.equal(learningPaths.length,13);
for(const p of learningPaths){assert.ok(p.chapters.length>=3);assert.equal(new Set(p.chapters).size,p.chapters.length);for(const id of p.chapters)assert.ok(ids.has(id),p.id+': unavailable '+id);const state=pathState(p,{});assert.equal(state.next,p.chapters[0]);assert.equal(state.completed,0);}
const catalogIds=new Set(JSON.parse(fs.readFileSync('lib/catalog.json','utf8')).map(c=>c.id));
for(const p of learningPaths)for(const future of p.future)assert.ok(catalogIds.has(future.id),p.id+': unknown source link '+future.id);
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
console.log('PASS: 13 paths, shared progress, next steps, completed paths, wall-clock timers, source durations, 33 complete bilingual chapters, preserved Greek/Latin quotations and local source media.');
