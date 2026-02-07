import { defineStore } from "pinia";
import axios from "axios";

export const useFilmStore = defineStore("filmStore", {
  state: () => ({
    movies: []
  }),

  actions: {
    async fetchMoviesByGenre() {
      try {
        const response = await axios.get(
          `/api/search_by_genre?genre_name=%D0%BA%D1%80%D0%B8%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB`
        );
        this.movies = response.data.results.slice(0, 4);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    },
  },
});
