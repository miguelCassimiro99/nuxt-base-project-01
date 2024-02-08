import { defineStore } from "pinia";
import { type ThemeType } from "../types";

export const useThemeStore = defineStore("themes", {
  state: () => ({
    themes: [
      {
        name: "light",
        color: "#f1f5f9",
      },
      {
        name: "dark",
        color: "#030521",
      },
      {
        name: "food-good",
        color: "#af4f6b",
      },
      {
        name: "ocean-blue",
        color: "#0f182a",
      },
    ] as ThemeType[],

    selectedTheme: {
      name: "dark",
      color: "#030521",
    } as ThemeType,
  }),

  actions: {
    setTheme(theme: ThemeType) {
      this.selectedTheme = theme;
      localStorage.setItem("theme", theme.name);
    },
  },
});
