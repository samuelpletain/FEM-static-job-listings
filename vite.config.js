import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/FEM-static-job-listings/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/_variables.scss"; @import "./src/assets/scss/_mixins.scss";`
      }
    }
  },  
})
