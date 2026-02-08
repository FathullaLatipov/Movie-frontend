<script setup>
import { onMounted } from "vue";
import FamousFilms from "../views/HomePage/FamousFilms.vue";
import FamousSerials from "../views/HomePage/FamousSerials.vue";
import Header from "../views/HomePage/Header.vue";
import Subscribe from "../views/HomePage/Subscribe.vue";
import { useGenreStore } from "@/stores/categoryStore";

const genreStore = useGenreStore();

onMounted(() => {
  genreStore.fetchMoviesByGenre();
});
</script>
<template>
  <Header />
  <FamousFilms />
  <FamousSerials />
</template>
