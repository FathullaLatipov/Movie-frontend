<script setup>
import { useGenreStore } from "@/stores/categoryStore";
import { posterUrl } from "@/api/client";
import Poster from "@/assets/images/poster.png";

const genreStore = useGenreStore();

function getPosterSrc(url) {
  try {
    return posterUrl(url) || Poster;
  } catch {
    return Poster;
  }
}
</script>
<template>
  <section class="mt-[55px]">
    <div class="container">
      <h2 class="font-[900] text-[65px] text-[#fff] mb-[60px]">Популярные сериалы</h2>
      <div class="flex flex-wrap justify-between gap-y-[35px] container">
        <div
          v-for="item in genreStore.movies.slice(0, 4)"
          :key="item.id"
          class="max-w-[340px] w-full rounded-[10px] relative overflow-hidden group cursor-pointer"
        >
          <div
            v-if="item.poster"
            class="absolute z-2 top-0 left-0 w-full h-[460px] bg-[#00b7ff61] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]"
          ></div>
          <img
            v-if="!item.poster"
            class="w-full overflow-hidden h-[460px] object-cover rounded-[10px] transition-transform duration-300"
            :src="Poster"
            alt="Poster"
          />
          <img
            v-else
            class="w-full h-[460px] overflow-hidden object-cover rounded-[10px] transition-transform duration-300"
            :src="getPosterSrc(item.poster)"
            alt=""
            loading="lazy"
            @error="($event.target).src = Poster"
          />
          <button
            class="absolute z-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[18px] font-bold bg-[#fff] max-w-[225px] w-full h-[70px] flex font-[700] text-[#3657cb] justify-center items-center cursor-pointer rounded-[10px] px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
    </div>
  </section>
</template>
