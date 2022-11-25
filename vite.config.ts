import { fileURLToPath } from "url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["./stores/*.test.ts", "./test/**"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
      "~": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
