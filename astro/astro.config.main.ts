import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    format: "file",
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@assets": "/src/assets",
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@styles": "/src/styles",
        "@features": "/src/features",
      },
    },
  },
  // Exclude tailwind-styled folder
  srcDir: "./src",
  publicDir: "./public",
});
