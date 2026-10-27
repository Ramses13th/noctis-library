import { defineConfig } from 'vite';
export default defineConfig({base:'/noctis-library/',build:{outDir:'docs',emptyOutDir:true,rollupOptions:{output:{manualChunks(id){if(id.includes('chapters.json')||id.includes('catalog.json'))return 'library-content';if(id.includes('node_modules'))return 'vendor';}}}}});
