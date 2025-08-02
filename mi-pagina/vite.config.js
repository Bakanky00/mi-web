// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mi-web/", // el nombre del repo, con slashes
  plugins: [react()],
});
