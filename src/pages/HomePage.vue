<script setup>
import { onMounted } from "vue";
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
</script>
<template>
  <Header />
  <FamousFilms />
  <FamousSerials />
  <Soon />
  <Subscribe />
</template>
