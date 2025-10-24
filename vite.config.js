import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import handlebars from "vite-plugin-handlebars";
import tailwindcss from "tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      partialsDirectory: resolve(__dirname, 'src', 'partials'),
      context: { siteName: "Lab Project", labName: "Лабораторна робота №6" },
      reloadOnPartialChange: true
    }),
  ],
  resolve: {alias: {'@': resolve(__dirname, 'src')}},
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contacts: resolve(__dirname, "contacts.html"),
      },
    },
  },
});
