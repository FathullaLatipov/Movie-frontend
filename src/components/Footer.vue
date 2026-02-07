<script setup>
import { computed } from "vue";
import vkIcon from "@/components/icons/vkIcon.vue";
import instagramIcon from "@/components/icons/instagramIcon.vue";
import facebookIcon from "@/components/icons/facebookIcon.vue";
import twitterIcon from "@/components/icons/twitterIcon.vue";
import Subscribe from "../views/HomePage/Subscribe.vue";
import Soon from "../views/HomePage/Soon.vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="flex flex-col bg-[#151A26] py-8 gap-8">
    <Soon />
    <Subscribe />
    <div class="container mx-auto px-4 flex flex-col items-center">
      <div
        class="flex flex-wrap justify-between w-[20%] mt-[50px] gap-8 mb-6 sm:justify-start sm:gap-10"
      >
        <vkIcon
          class="cursor-pointer text-[#686868] hover:text-white transition-colors duration-300"
          :size="30"
        />
        <instagramIcon
          class="cursor-pointer text-[#686868] hover:text-white transition-colors duration-300"
          :size="30"
        />
        <facebookIcon
          class="cursor-pointer text-[#686868] hover:text-white transition-colors duration-300"
          :size="30"
        />
        <twitterIcon
          class="cursor-pointer text-[#686868] hover:text-white transition-colors duration-300"
          :size="30"
        />
      </div>

      <ul
        class="flex flex-wrap justify-center gap-6 sm:justify-start sm:gap-8 max-w-3xl mx-auto sm:mx-0"
      >
        <li>
          <RouterLink
            class="text-white font-semibold text-base cursor-pointer hover:underline"
            to="/"
            >Афиша</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="text-white font-semibold text-base cursor-pointer hover:underline"
            to="/"
            >Новости</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="text-white font-semibold text-base cursor-pointer hover:underline"
            to="/"
            >Персоны</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="text-white font-semibold text-base cursor-pointer hover:underline"
            to="/"
            >Рейтинги</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="text-white font-semibold text-base cursor-pointer hover:underline"
            to="/"
            >Рецензии</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="text-white font-semibold text-base cursor-pointer hover:underline"
            to="/"
            >Каталог фильмов</RouterLink
          >
        </li>
      </ul>

      <div
        class="mt-6 text-center sm:text-left px-2 sm:px-0 max-w-3xl mx-auto sm:mx-0"
      >
        <p class="text-[#E3E6F0] text-sm sm:text-base">
          {{ currentYear }} © Kinoarea. Все права защищены
        </p>
        <p
          class="underline text-[#E3E6F0] text-sm sm:text-base cursor-pointer mt-2"
        >
          Политика конфиденциальности
        </p>
      </div>
    </div>
  </footer>
</template>
