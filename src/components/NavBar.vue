<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
import vkIcon from "@/components/icons/vkIcon.vue";
import instagramIcon from "@/components/icons/instagramIcon.vue";
import facebookIcon from "@/components/icons/facebookIcon.vue";
import twitterIcon from "@/components/icons/twitterIcon.vue";
import searchIcon from "@/components/icons/searchIcon.vue";
import menuBarIcon from "@/components/icons/menuBarIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import { Motion } from "@motionone/vue";

const isMenuOpen = ref(false);
const isSearchOpen = ref(false);
const isMobile = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "auto";
};

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  document.body.style.overflow = isSearchOpen.value ? "hidden" : "auto";
};

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<template>
  <nav class="flex items-center h-[80px] relative z-[50]">
    <Motion
      class="container flex justify-between items-center"
      :initial="{ opacity: 0, y: -50 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5 }"
    >
      <div class="flex flex-col gap-[6px] w-[130px] h-[55px] z-[60]">
        <RouterLink to="/" class="cursor-pointer">
          <img src="@/assets/images/logo.svg" alt="Logo" />
        </RouterLink>
        <div class="flex justify-between">
          <vkIcon class="text-[#686868] hover:text-[#fff]" :size="20" />
          <instagramIcon class="text-[#686868] hover:text-[#fff]" :size="20" />
          <facebookIcon class="text-[#686868] hover:text-[#fff]" :size="20" />
          <twitterIcon class="text-[#686868] hover:text-[#fff]" :size="20" />
        </div>
      </div>

      <ul
        v-if="!isMobile"
        class="flex max-w-[550px] w-full justify-between items-center z-[60]"
      >
        <li>
          <RouterLink class="text-[#fff] font-[600] text-[17px]" to="/"
            >Главная</RouterLink
          >
        </li>
        <li>
          <RouterLink class="text-[#fff] font-[600] text-[17px]" to="/"
            >Фильмы</RouterLink
          >
        </li>
        <li>
          <RouterLink class="text-[#fff] font-[600] text-[17px]" to="/"
            >Сериалы</RouterLink
          >
        </li>
        <li>
          <RouterLink class="text-[#fff] font-[600] text-[17px]" to="/"
            >Каталог</RouterLink
          >
        </li>
        <li>
          <RouterLink class="text-[#fff] font-[600] text-[17px]" to="/"
            >Жанры</RouterLink
          >
        </li>
      </ul>

      <div
        v-if="!isMobile"
        @click="toggleSearch"
        class="w-[300px] h-[52px] bg-[#fff] rounded-[10px] flex justify-end pr-[20px] items-center text-[#3657cb] cursor-pointer z-[60]"
      >
        <searchIcon :size="30" />
      </div>

      <div v-if="isMobile" class="flex items-center gap-[10px] z-[60]">
        <searchIcon
          class="text-[#fff] cursor-pointer"
          :size="28"
          @click="toggleSearch"
        />
        <menuBarIcon
          class="text-[#fff] cursor-pointer"
          :size="28"
          @click="toggleMenu"
        />
      </div>
    </Motion>

    <Transition name="fade-slide">
      <div
        v-if="isMenuOpen"
        class="fixed top-[0] left-[0] w-full h-[50%] bg-[#000000d9] flex flex-col items-center justify-center z-[90]"
        @click.self="toggleMenu"
      >
        <CloseIcon
          class="absolute top-[30px] right-[30px] text-[#fff] cursor-pointer"
          :size="40"
          @click="toggleMenu"
        />
        <RouterLink class="text-[#fff] text-[24px] font-bold" to="/"
          >Главная</RouterLink
        >
        <RouterLink class="text-[#fff] text-[24px] font-bold" to="/"
          >Фильмы</RouterLink
        >
        <RouterLink class="text-[#fff] text-[24px] font-bold" to="/"
          >Сериалы</RouterLink
        >
        <RouterLink class="text-[#fff] text-[24px] font-bold" to="/"
          >Каталог</RouterLink
        >
        <RouterLink class="text-[#fff] text-[24px] font-bold" to="/"
          >Жанры</RouterLink
        >
      </div>
    </Transition>

    <Transition name="fade-slide">
      <div
        v-if="isSearchOpen"
        class="fixed top-0 left-0 w-full h-full bg-[#000000d9] flex flex-col items-center justify-center z-[90]"
        @click.self="toggleSearch"
      >
        <CloseIcon
          class="absolute top-6 right-6 text-[#fff] cursor-pointer"
          :size="40"
          @click="toggleSearch"
        />
        <div class="max-w-[815px] w-full flex flex-col items-center">
          <img
            src="@/assets/images/logo.svg"
            alt="Logo"
            class="mb-[40px] w-[140px]"
          />
          <div class="flex items-center gap-[20px] w-full px-4">
            <div
              class="flex bg-[#fff] items-center p-[10px] rounded-[10px] gap-[10px] w-full"
            >
              <input
                type="text"
                class="w-full outline-none text-[18px] font-[500] text-[#151a26]"
              />
              <FilterIcon :size="30" />
              <div
                class="w-[55px] h-[52px] bg-[#F2F60F] rounded-[10px] flex justify-center items-center text-[#3657cb] cursor-pointer"
              >
                <searchIcon :size="30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
@media (max-width: 768px) {
  nav ul {
    display: none;
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
