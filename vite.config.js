import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    loader: "jsx", // Ensure esbuild loader is set to jsx
    include: /src\/.*\.(js|jsx)$/, // Ensure that .js and .jsx files are included
  },
});
