import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
/// <reference types="vitest/config" />
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
// vitest.config.ts
// import { defineConfig } from "vitest/config";

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
    
    coverage: {
      provider: "istanbul", // or 'v8',
      reporter: ["text", "json", "html"],
      // include: ['src/**/*.ts', 'src/**/*.tsx'], // 指定你要测试的文件路径
      // exclude: ['src/*.ts', 'src/utils/**'],// 指定你要忽略的文件路径
    },
  
    globals: true,
    environment: 'happy-dom',
  },
  
  
} as UserConfig & { test: any })
