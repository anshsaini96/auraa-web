import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom']
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      // 👇 Tell Vite to ignore admin folder completely
      external: ['admin']
    }
  },
  server: {
    port: 5173
  }
})
