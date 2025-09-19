import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/Layers-e-Overlays-com-Figma/',
=======
  base: process.env.NODE_ENV === 'production' ? '/Layers-e-Overlays-com-Figma/' : '/',
>>>>>>> 86b4d4961bd3797954ee53e4abee8b75946672a9
})
