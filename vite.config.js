import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  history: createWebHistory('/learn/'),
  plugins: [vue()],
})
