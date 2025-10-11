import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import unoConfig from '../uno.config'

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(unoConfig),
  ],
  server: {
    port: 3000,
  },
})
