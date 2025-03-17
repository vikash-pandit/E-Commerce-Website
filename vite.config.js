import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Only needed for React projects

export default defineConfig({
  plugins: [react()], 
  server: {
    port: 3000, 
  },
});
