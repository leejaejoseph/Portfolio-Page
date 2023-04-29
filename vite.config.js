import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  // ...
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'src/assets/reactor.glb', dest: 'dist' }
          ]
        })
      ]
    }
  }
});