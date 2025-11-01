import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import handlebars from "vite-plugin-handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Мапа для pageCode залежно від файлу
const pageCodes = {
  'index.html': 'main',
  'about.html': 'about',
  'contacts.html': 'contacts'
};

export default defineConfig({
  plugins: [
    handlebars({
      partialsDirectory: resolve(__dirname, 'src', 'partials'),
      // Глобальні дані
      context: {
        siteName: "Lab Project",
        labName: "Лабораторна робота №8",
        studentGroup: "6.1213-1"  // Якщо потрібно
      },
      // Динамічний context per файл (додає pageCode)
      contextModifier: (context, filename) => {
        const pageCode = pageCodes[filename] || 'default';
        return { ...context, pageCode };
      },
      // Хелпер для порівнянь (eq: 'about' === pageCode)
      helpers: {
        eq: (a, b) => a === b
      },
      reloadOnPartialChange: true
    }),
  ],
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
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