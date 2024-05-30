import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn, util } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        // 对应油猴脚本中的header配置
        name: 'vite-monkey-csdn-test',
        description: 'CSDN 删除广告 DEMO',
        namespace: 'http://tampermonkey.net/',
        version: '0.1',
        author: 'wyd',
        include: '*://*.csdn.net/*',
      },
      build: {
        // 打包的时候可以将对应的外链引导到cdn上，减少打包体积
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js').concat(
            await util.fn2dataUrl(() => {
              // @ts-ignore
              window.Vue = Vue;
            }),
          ),
          'element-plus': cdn.jsdelivr('ElementPlus', 'dist/index.full.min.js'),
        },
        externalResource: {
          'element-plus/dist/index.css': cdn.jsdelivr(),
        },
      },
    }),
  ],
});
