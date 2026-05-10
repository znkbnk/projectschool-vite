import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 3000,
    open: true,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',   // your backend
        changeOrigin: true,
        secure: false,
      },
    },
  },

  preview: {
    port: 3000,
  },

  build: {
    outDir: 'build',
    sourcemap: true,
  },

  // Remove the esbuild jsx config — not needed with @vitejs/plugin-react
})