import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.{test,spec}.ts", "tests/integration/**/*.{test,spec}.ts", "tests/e2e/**/*.{test,spec}.ts"],
    isolate: true,
    clearMocks: false,
  },
});
