import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://driver.marsview.cc",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  },
  // 配置alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    }
  },
  plugins: [react()],
})
