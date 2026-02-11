import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    format: "file",
  },
  outDir: "./dist-tailwind",
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  // Use tailwind-styled as source
  srcDir: "./src/tailwind-styled",
  publicDir: "./public",
});
