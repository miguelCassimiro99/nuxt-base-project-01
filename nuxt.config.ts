// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@pinia/nuxt",
  ],

  colorMode: {
    classSuffix: "",
  },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});