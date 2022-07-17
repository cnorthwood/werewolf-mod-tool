import react from "@vitejs/plugin-react";
import postcssPresetEnv from "postcss-preset-env";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssPresetEnv({ browsers: "defaults" })],
    },
  },
  resolve: {
    alias: [{ find: "~normalize.css", replacement: "normalize.css" }],
  },
});
