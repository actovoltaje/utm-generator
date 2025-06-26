import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "public",
  publicDir: "public",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  plugins: [react()],
  base: "/"
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",        // ← hace que todos los <script> y <link> sean rutas relativas
  plugins: [react()],
});
