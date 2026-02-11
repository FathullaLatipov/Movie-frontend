import { defineStore } from "pinia";
import axios from "axios";
import { apiUrl } from "@/api/client";

// Стор для блока «фильмы по жанру» (если понадобится отдельно). Главная использует homeStore.
export const useFilmStore = defineStore("filmStore", {
  state: () => ({
    movies: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchMoviesByGenre(genreName = "криминал") {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(apiUrl("/api/search_by_genre"), {
          params: { genre_name: genreName },
        });
        this.movies = (response.data?.results ?? []).slice(0, 4);
      } catch (err) {
        console.error("Ошибка загрузки фильмов:", err);
        this.error = err.message || "Ошибка загрузки";
        this.movies = [];
      } finally {
        this.loading = false;
      }
    },
  },
});
