<template>
  <button
    class="relative flex gap-1 justify-center items-center md:hidden"
    @click="handleClick"
  >
    <Icon name="simple-icons:nuxtdotjs" class="text-primary h-16 w-16" />
    <span class="text-2xl font-bold text-theme-text">Layout</span>

    <Icon
      name="ic:round-keyboard-double-arrow-down"
      class="w-4 h-4 text-theme-text animate-pulse opacity-40 absolute -bottom-2"
    />
  </button>
</template>
<script setup lang="ts">
const emit = defineEmits(["click"]);
const handleClick = () => {
  emit("click");
};
</script>
