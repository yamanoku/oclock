import { resolve } from 'path';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'


import { cloudflare } from "@cloudflare/vite-plugin";


// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        seconds: resolve(import.meta.dirname, 'seconds.html')
      },
    },
  },
  plugins: [svelte({
    compilerOptions: {
      customElement: true,
    },
  }), cloudflare()],
})