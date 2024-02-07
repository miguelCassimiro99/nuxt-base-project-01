<template>
  <main
    :class="{
      'theme-light': selectedTheme === 'light',
      'theme-dark': selectedTheme === 'dark',
      'theme-food-good': selectedTheme === 'food-good',
      'theme-ocean-blue': selectedTheme === 'ocean-blue',
    }"
    class="h-screen w-[100vw] overflow-hidden bg-theme-bg"
  >
    <header class="h-20 border-b w-full"></header>
    <p class="p-4 pb-2">
      <select
        v-model="selectedTheme"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="food-good">Food Good</option>
        <option value="ocean-blue">Ocean Blue</option>
      </select>
    </p>
  </main>
</template>

<script lang="ts" setup>
type ThemesType = "light" | "dark" | "food-good" | "ocean-blue";

const LOCAL_STORAGE_THEME_KEY = "theme";
const selectedTheme = ref<ThemesType>("light");

const setTheme = (newTheme: ThemesType) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  selectedTheme.value = newTheme;
};

onMounted(() => {
  const themeFromLocalStorage = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY
  ) as ThemesType;
  if (!themeFromLocalStorage) return;
  setTheme(themeFromLocalStorage);
});

watch(selectedTheme, (selected) => {
  setTheme(selected);
});

const selectThemeClass = computed<string>(() => {
  return `theme-${selectedTheme}`;
});
</script>
