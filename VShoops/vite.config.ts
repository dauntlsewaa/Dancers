import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    //设置域名
    host: '127.0.0.1',
    port: 8000,
    //配置代理跨域
    proxy: {
      '/apis': {
        target: 'https://www.dance365.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      }
    }
  }
  
})

