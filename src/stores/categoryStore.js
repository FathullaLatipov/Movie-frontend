import { defineStore } from "pinia";
import axios from "axios";
import { apiUrl } from "@/api/client";

// Для API Кинопоиска жанры в единственном числе
const genreToApi = {
  приключения: "приключения",
  боевики: "боевик",
  комедии: "комедия",
  фантастика: "фантастика",
  триллеры: "триллер",
  драма: "драма",
};

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
    loading: false,
    error: null,
  }),

  actions: {
    async fetchMoviesByGenre(genre) {
      const name = genre ?? this.activeGenre;
      const genreName = genreToApi[name] ?? name;
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(apiUrl("/api/search_by_genre"), {
          params: { genre_name: genreName },
        });
        this.movies = response.data?.results ?? [];
      } catch (err) {
        console.error("Ошибка загрузки по жанру:", err);
        this.error = err.message || "Ошибка загрузки";
        this.movies = [];
      } finally {
        this.loading = false;
      }
    },
    setActiveGenre(genre) {
      this.activeGenre = genre;
      this.fetchMoviesByGenre();
    },
  },
});
