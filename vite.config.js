import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Ensure Vite resolves .html files
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.html']
  },
  // assetsInclude: ['**/*.html'],
  // Configure Vite to exclude HTML files from JavaScript parsing
  exclude: ['**/*.html'],
  // Additional build options if needed
  build: {
    // You can add further build configurations here if needed
  }
})
