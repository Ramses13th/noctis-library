import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..'),directory=path.join(root,'public','chapters');
fs.mkdirSync(directory,{recursive:true});
const chapters=JSON.parse(fs.readFileSync(path.join(root,'lib','chapters.json'),'utf8')),keep=new Set();
const index=chapters.map(chapter=>{
 const text=JSON.stringify(chapter),contentHash=crypto.createHash('sha256').update(text).digest('hex').slice(0,12),filename=chapter.id+'.'+contentHash+'.json';
 keep.add(filename);fs.writeFileSync(path.join(directory,filename),text);
 const {blocks,...metadata}=chapter;
 const topics=blocks.filter(b=>/^h[2-4]$/.test(b.type)&&!['Sources','Surse','Sources & reading','Surse și lecturi'].includes(b.en||b.ro)).slice(0,3).map(b=>b.ro||b.en);
 return {...metadata,contentHash,sourceTopics:topics.length?topics:[chapter.section].filter(Boolean),blocks:[]};
});
// Retain immutable previous files so a reader with an already-open edition can finish a chapter during publication.
fs.writeFileSync(path.join(root,'lib','chapter-index.json'),JSON.stringify(index,null,2));
console.log('Prepared '+chapters.length+' independent reading files; the opening page loads metadata only.');
