// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  i18n: {
    baseUrl: 'https://zooly.dev',
    strategy: 'no_prefix',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'fr',
        display: 'Français',
        iso: 'fr-FR',
      },
      {
        code: 'en',
        display: 'English',
        iso: 'en-US',
      },
    ],
    vueI18n: './i18n.config.ts',
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' },
      ],
    },
  },
})
