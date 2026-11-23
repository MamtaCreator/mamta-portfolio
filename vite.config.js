import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Site is served from the root of mamtayadav.in
export default defineConfig({
  base: '/',
  plugins: [react()],
});
