import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: process.env.NODE_ENV === "development" },
    }),
    tsconfigPaths(),
    svgr(),
    react(),
  ],
  resolve: {
    alias: {
      styles: "./src/assets/styles",
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
});
