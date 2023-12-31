import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createWebHistory} from "vue-router"

// https://vitejs.dev/config/
export default defineConfig({
  // history: createWebHistory('/vite/'),
  plugins: [vue()],
  base: '/vite/',
  build: {
    outDir: 'docs' // 打包文件的输出目录
  }
})
