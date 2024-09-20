// https://nuxt.com/docs/api/configuration/nuxt-config

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [ { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' } ],
    },
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    'nuxt-swiper',
    'vue-yandex-maps/nuxt',
  ],
  yandexMaps: {
    apikey: process.env.YANDEX_MAP_KEY,
  },
  appConfig: {
    apiPrefix: process.env.API_PREFIX,
    mimes: {
      pdf: 'application/pdf',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: [
    'animate.css/animate.min.css',
    '~/assets/scss/app.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            const tags = [ 'model-viewer' ];
            return tags.includes(tag);
          },
        },
      }
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [ path.resolve(process.cwd(), 'assets/icons') ],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/mixins/index.scss";`
        }
      }
    },
  },
  plugins: [
    '~/plugins/icons-sprite.ts',
    '~/plugins/yup-locales.ts',
    '~/plugins/model-viewer.client.ts',
  ],
})
