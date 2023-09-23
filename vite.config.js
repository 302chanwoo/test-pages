// vite.config.js
import dns from "dns";

import { defineConfig } from "vite";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  base: "./",
  build: {
    outDir: "build",
  },
});
