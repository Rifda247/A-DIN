import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        app: resolve(__dirname, "src/main.ts"),
        style: resolve(__dirname, "src/styles.css"),

        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "contact.html"),
        terms: resolve(__dirname, "terms.html"),
        privacy: resolve(__dirname, "privacy.html"),
      },
    },
  },
});
