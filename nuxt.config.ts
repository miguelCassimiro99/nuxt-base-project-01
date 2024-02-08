// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],

  colorMode: {
    classSuffix: "",
  },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
