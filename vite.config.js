import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sahiltalekarr.github.io/', // this is important!
  plugins: [react()],
})
