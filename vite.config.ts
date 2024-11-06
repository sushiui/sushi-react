// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-refresh'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/sushi-react/"
})