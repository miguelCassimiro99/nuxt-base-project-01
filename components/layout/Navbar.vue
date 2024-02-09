<template>
  <div class="relative flex md:inline justify-center items-center">
    <div
      class="hidden md:flex md:h-8 justify-between p-2 items-center container-align"
    >
      <NuxtLink
        to="#"
        class="text-theme-text hover:text-primary transition-all text-sm"
      >
        {{ $t("about") }}
      </NuxtLink>

      <div class="flex justify-end gap-2 items-center">
        <NuxtLink
          v-for="social in socials"
          :key="social.icon"
          :to="social.url"
          target="_blank"
        >
          <Icon
            :name="social.icon"
            class="w-5 h-5 text-theme-text hover:text-primary transition-all"
          />
        </NuxtLink>
      </div>

      <ClientOnly>
        <div
          class="absolute hidden md:block z-40 p-2 pb-3 right-[15%] shadow-md rounded-md -top-[36px] theme-select-buttons bg-theme-bg"
        >
          <div class="relative w-fit">
            <LayoutThemeSelect />

            <div class="w-fit absolute top-4 left-1 rounded-md border-t-0">
              <Icon
                name="material-symbols:arrow-downward-alt"
                class="h-4 w-4 text-theme-text z-10 animate-bounce opacity-70"
              />
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>

    <header
      class="h-20 md:h-20 w-full flex justify-center items-center shadow-md gap-10 sticky top-0 z-30 bg-theme-bg"
    >
      <NuxtLink to="#" class="header-menu-link"> {{ $t("option") }} </NuxtLink>

      <NuxtLink to="#" class="header-menu-link"> {{ $t("option") }} </NuxtLink>

      <div>
        <NuxtLink
          to="/"
          class="hidden md:flex gap-1 justify-center items-center"
        >
          <Icon name="simple-icons:nuxtdotjs" class="text-primary h-16 w-16" />
          <span class="text-2xl font-bold text-theme-text">Layout</span>
        </NuxtLink>

        <!-- Mobile Button -->
        <ClientOnly>
          <LayoutMobileButton @click="toggleMenu" />
        </ClientOnly>
      </div>

      <NuxtLink to="#" class="header-menu-link"> {{ $t("option") }} </NuxtLink>

      <NuxtLink to="#" class="header-menu-link"> {{ $t("option") }} </NuxtLink>
    </header>
    <transition
      name="slide-fade"
      mode="out-in"
      class="bg-theme-bg-secondary shadow-xl md:hidden"
    >
      <div
        v-if="isMenuOpen"
        @click.self="toggleMenu()"
        class="absolute w-full top-20 h-[40vh] z-10 bg-theme-bg-secondary flex flex-col justify-between p-8"
      >
        <div
          class="flex flex-col justify-evenly items-start h-full gap-2 relative"
        >
          <button
            v-for="option in menu"
            :key="option.label"
            class="font-bold text-theme-text tracking-wide uppercase font-tilt z-20"
            @click="pushToRouteMobile(option.url)"
          >
            {{ $t("option") }}
          </button>
        </div>

        <div class="flex justify-between w-full">
          <LayoutThemeSelect />

          <div class="flex justify-center items-center gap-2">
            <NuxtLink
              v-for="network in socials"
              :key="network.icon"
              :to="network.url"
              target="_blank"
            >
              <Icon
                :name="network.icon"
                class="w-7 h-7 text-primary transition-all"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
const socials = [
  {
    icon: "ph:github-logo-fill",
    url: "https://github.com/miguelCassimiro99",
  },
  {
    icon: "ph:linkedin-logo-fill",
    url: "https://www.linkedin.com/in/miguel-cassimiro",
  },
  {
    icon: "ph:pinterest-logo-fill",
    url: "https://pin.it/2eoXHcf",
  },
  {
    icon: "ph:envelope-fill",
    url: "mailto:miguel.cassimiro99@gmail.com",
  },
];

const menu = [
  {
    label: "Menu",
    url: "#",
  },
  {
    label: "Menu",
    url: "#",
  },
  {
    label: "Menu",
    url: "#",
  },
  {
    label: "Menu",
    url: "#",
  },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const pushToRouteMobile = (url: string) => {
  navigateTo(url);
  toggleMenu();
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.theme-select-buttons {
  transition: all ease-out 0.5s;
}
.theme-select-buttons:hover {
  transform: translateY(34px);
}
</style>
