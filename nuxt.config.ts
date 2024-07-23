// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [ { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' } ],
    },
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['~/assets/scss/app.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
