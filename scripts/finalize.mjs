import {writeFile,copyFile} from 'node:fs/promises';
await writeFile('docs/.nojekyll','');
await copyFile('docs/index.html','docs/404.html');
