// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icons", "@nuxtjs/color-mode"],

  colorMode: {
    classSuffix: "",
  },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});
