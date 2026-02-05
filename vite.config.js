import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  define: {
    'import.meta.env.VITE_API_URL': (() => {
      try {
        const ip = readFileSync(join(__dirname, '.local-ip'), 'utf-8').trim()
        return JSON.stringify(`http://${ip}:5000`)
      } catch {
        return JSON.stringify('http://localhost:5000')
      }
    })()
  }
})