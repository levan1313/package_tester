import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build files
    sourcemap: true, // Generate source maps for debugging
  },
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open the app in the browser
  },
  resolve: {
    alias: {
      '@': '/src', // Shortcut for importing from the src directory
    },
  },
});
