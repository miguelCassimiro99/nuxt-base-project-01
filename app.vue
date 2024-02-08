<template>
  <main
    :class="{
      'theme-light': store.selectedTheme.name === 'light',
      'theme-dark': store.selectedTheme.name === 'dark',
      'theme-food-good': store.selectedTheme.name === 'food-good',
      'theme-ocean-blue': store.selectedTheme.name === 'ocean-blue',
    }"
    class="h-screen w-[100vw] overflow-x-hidden bg-theme-bg transition-all"
  >
    <LayoutNavbar />
    <section
      class="flex justify-start items-start h-screen w-full bg-theme-bg-secondary"
    >
      <form>
        <select v-model="locale">
          <option value="pt-BR">pt-BR</option>
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
        <p>{{ $t("welcome") }}</p>
      </form>
    </section>
    <section class="h-screen w-full"></section>
  </main>
</template>

<script lang="ts" setup>
import { useThemeStore } from "./stores/themes";
import type { ThemeType } from "./types";

const store = useThemeStore();
const { locale } = useI18n();

onMounted(() => {
  const themeFromLocalStorage = localStorage.getItem(
    "theme"
  ) as ThemeType | null;
  if (!themeFromLocalStorage) return;
  store.setTheme(themeFromLocalStorage);
});
</script>
