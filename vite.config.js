import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression' // Asegúrate de que esto esté correctamente importado

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress', // O puedes usar 'gzip'
      ext: '.br', // Extensión para archivos Brotli
      threshold: 1024, // Umbral en bytes para comprimir archivos
    })
  ]
})
