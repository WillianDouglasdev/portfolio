import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// A Vercel publica a aplicação na raiz do domínio.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
