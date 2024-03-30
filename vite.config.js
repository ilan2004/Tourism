import { defineConfig } from 'vite';
import { html } from 'vite-plugin-html';

export default defineConfig({
  // other configurations
  plugins: [
    html({
      minify: true, // Optional minification
      inject: {
        injectData: {
          title: 'My App' // Optionally inject data into HTML
        }
      },
      entryFile: 'A:/Git/Tourism/src/Components/Bookcomp/Options/room1/hotel1.html' // Specify entry HTML file
    })
  ]
});
