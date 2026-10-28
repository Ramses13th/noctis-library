import {writeFile,copyFile} from 'node:fs/promises';
const directory=process.argv[2]||'docs';
await writeFile(directory+'/.nojekyll','');
await copyFile(directory+'/index.html',directory+'/404.html');
