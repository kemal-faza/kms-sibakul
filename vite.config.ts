import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // vitest@2 bundles its own vite@5 types, while the app builds with vite@6;
  // the Vite 6 plugin instances are cast to vitest's expected plugin option type.
  plugins: [react(), tailwindcss()] as never,
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
