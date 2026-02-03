import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
});
