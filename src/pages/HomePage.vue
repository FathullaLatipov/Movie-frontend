<script setup>
import { onMounted, computed } from "vue";
import FamousFilms from "../views/HomePage/FamousFilms.vue";
import FamousSerials from "../views/HomePage/FamousSerials.vue";
import Header from "../views/HomePage/Header.vue";
import Soon from "../views/HomePage/Soon.vue";
import Subscribe from "../views/HomePage/Subscribe.vue";
import { useHomeStore } from "@/stores/homeStore";

const homeStore = useHomeStore();

onMounted(() => {
  homeStore.fetchHomeBlocks();
});

const isEmpty = computed(() => {
  const s = homeStore;
  return !s.loading && !s.popularNow?.length && !s.popularMovies?.length && !s.popularSeries?.length && !s.comingSoon?.length;
});
</script>
<template>
  <div v-if="isEmpty && homeStore.error" class="container py-4 px-2 rounded-lg bg-amber-500/15 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200 text-center">
    {{ homeStore.error }}
  </div>
  <Header />
  <FamousFilms />
  <FamousSerials />
  <Soon />
  <Subscribe />
</template>
