<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useGenreStore } from "@/stores/categoryStore";
import { storeToRefs } from "pinia";
import Poster from "@/assets/images/poster.png";

const screenWidth = ref(window.innerWidth);
const updateWidth = () => (screenWidth.value = window.innerWidth);

onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

const isMobile = computed(() => screenWidth.value <= 768);
const isTablet = computed(() => screenWidth.value > 768 && screenWidth.value <= 1024);
const isDesktop = computed(() => screenWidth.value > 1024);

const genreStore = useGenreStore();
const { genres, activeGenre, movies } = storeToRefs(genreStore);
genreStore.fetchMoviesByGenre();

const handleGenreChange = (genre) => {
  genreStore.setActiveGenre(genre);
};
</script>

<template>
  <header
    class="min-h-[66vh] flex flex-col gap-[60px] bg-[url('@/assets/images/header-bg.png')] bg-cover bg-no-repeat bg-center pt-[40px]"
  >
    <div
      :class="[
        'container flex justify-between gap-[20px]',
        isMobile ? 'flex-col items-start' : 'items-center'
      ]"
    >
      <h2
        :class="[
          'font-[700] text-[#fff]',
          isMobile ? 'text-[36px]' : isTablet ? 'text-[48px]' : 'text-[65px]'
        ]"
      >
        Популярное сейчас
      </h2>
    </div>

    <div class="flex flex-wrap justify-center gap-y-[35px] gap-x-[20px] container">
      <div
        class="max-w-[340px] w-full rounded-[10px] relative overflow-hidden group cursor-pointer"
        v-for="item in genreStore.movies.slice(4, 12)"
        :key="item.id"
      >
        <div
          v-if="item.poster !== 'Нет постера'"
          class="absolute z-2 top-0 left-0 w-full h-[460px] bg-[#00b7ff61] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]"
        ></div>
        <img
          v-if="item.poster === 'Нет постера'"
          class="w-full overflow-hidden h-[460px] object-cover rounded-[10px] transition-transform duration-300"
          :src="Poster"
          alt="Poster"
        />
        <img
          v-else
          class="w-full h-[460px] overflow-hidden object-cover rounded-[10px] transition-transform duration-300"
          :src="item.poster"
          alt=""
        />

        <button
          class="absolute z-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#3657cb] text-[18px] font-[700] bg-[#fff] max-w-[225px] w-full h-[70px] flex justify-center items-center cursor-pointer rounded-[10px] px-[16px] py-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Карточка фильма
        </button>

        <h2
          v-if="item.name === null"
          class="text-[18px] text-[#fff] font-[700] mt-[10px]"
        >
          {{ item.alternativeName }}
        </h2>
        <h2
          v-if="item.name !== null"
          class="text-[18px] text-[#fff] font-[700] mt-[10px]"
        >
          {{ item.name }}
        </h2>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <button
        class="border-[2px] w-[200px] h-[70px] text-[#fff] rounded-[10px] cursor-pointer text-[18px] font-[700]"
      >
        Все новинки
      </button>
    </div>
  </header>
</template>
