import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    host: true, // Listen on all network interfaces
    port: 5173, // Default Vite port
    proxy: {
      '/api': {
        target: 'http://10.168.126.75:3000',
        changeOrigin: true,
        secure: false,
        ws: true,
        bypass: (req, res, options) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        }
      }
    }
  }
})