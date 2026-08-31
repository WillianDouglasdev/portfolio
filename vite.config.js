import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// URL base necessária para os assets funcionarem no GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: "/Portifolio/",
});
