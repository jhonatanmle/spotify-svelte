import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";

const getPath = (route) => {
  const { pathname } = new URL(route, import.meta.url);

  return pathname;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: preprocess(),
    }),
  ],
  resolve: {
    alias: {
      "@src": getPath("./src/"),
      "@components": getPath("./src/components/"),
      "@icons": getPath("./src/components/icons"),
    },
  },
});
