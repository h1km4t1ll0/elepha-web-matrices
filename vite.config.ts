import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import vitePluginRequire from 'vite-plugin-require'

export default defineConfig({
  plugins: [react(), vitePluginRequire.default()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ]
  }
})
