import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
/// <reference types="vitest/config" />
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
    exports: 'named' as const,
  },
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SSYUI',
      fileName: 'ssy-ui',
      formats: ['es', 'umd', 'iife'], // 导出模块类型
    },
  },
  resolve: { alias: { vue: 'vue/dist/vue.esm-bundler' } },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
} as UserConfig & { test: any })
