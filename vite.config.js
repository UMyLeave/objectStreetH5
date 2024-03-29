import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicPath: './',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  transpileDependencies: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      // patterns: [
      //   path.resolve(__dirname,'src/common/common.less')
      // ]
    }
  }
})
