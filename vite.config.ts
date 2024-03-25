import { resolve } from 'path';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'


// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        seconds: resolve(__dirname, 'seconds.html')
      },
    },
  },
  plugins: [svelte({
    compilerOptions: {
      customElement: true,
    },
  })],
})
