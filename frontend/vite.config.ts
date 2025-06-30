import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Porta que quiser para dev, opcional
  },
  build: {
    outDir: 'dist', // Pasta de saída do build, padrão 'dist'
  },
});
