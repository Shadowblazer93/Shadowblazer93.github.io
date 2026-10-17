import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The portfolio is published to the root of a GitHub Pages user site
// (https://shadowblazer93.github.io), so the base path stays "/".
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Keep generated bundles out of "assets/" so they never collide with the
    // hand-authored files served from public/assets/.
    assetsDir: 'static',
  },
})
