// stores/genreStore.ts
import { defineStore } from "pinia";
import axios from "axios";

export const useGenreStore = defineStore("genreStore", {
  state: () => ({
    genres: [
      "приключения",
      "боевики",
      "комедии",
      "фантастика",
      "триллеры",
      "драма",
    ],
    activeGenre: "приключения",
    movies: [],
  }),

  actions: {
    async fetchMoviesByGenre() {
      try {
        const response = await axios.get(
          `/api/search_by_genre?genre_name=триллер`
        );
        this.movies = response.data.results;
        console.log(response.data.results);
        
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    },
    setActiveGenre(genre) {
      this.activeGenre = genre;
      this.fetchMoviesByGenre();
    },
  },
});
