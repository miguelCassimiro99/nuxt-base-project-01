const defaultTheme = require("tailwindcss/defaultTheme");

import type Config from "@nuxtjs/tailwindcss";

export default <Partial<typeof Config>>{
  content: ["components/**/*.{vue,js}", "pages/**/*.vue"],
  theme: {
    extend: {
      colors: {
        "theme-bg": "var(--background)",
        "theme-bg-secondary": "var(--background-secondary)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "theme-text": "var(--text-color)",
      },
    },
  },
};
