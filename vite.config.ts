import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Adjust if not using React
import { fileURLToPath } from 'url';
import path from 'path';

// Emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Points to PostCSS config
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for src directory
    },
  },
});