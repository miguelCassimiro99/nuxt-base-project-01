<template>
  <div class="flex justify-center items-center gap-2">
    <button
      v-for="theme in themesList"
      :key="theme.name"
      :style="`background: ${theme.color}`"
      :class="`rounded-full flex w-6 h-6 border-[1px] border-theme-text ${
        theme.name === store.selectedTheme.name ? 'ring-4 ring-primary' : ''
      }`"
      @click="store.setTheme(theme)"
    ></button>
  </div>
</template>
<script setup lang="ts">
import { type ThemeType } from "../../types";

const store = useThemeStore();

const themesList = [
  {
    name: "light",
    color: "#F1F5F9",
  },
  {
    name: "dark",
    color: "#030521",
  },
  {
    name: "food-good",
    color: "#Af4F6B",
  },
  {
    name: "ocean-blue",
    color: "#0f182a",
  },
] as ThemeType[];
</script>
<style scoped></style>
