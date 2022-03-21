import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  publicDir: './public',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
