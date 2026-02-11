import { defineStore } from "pinia";
import axios from "axios";
import { apiUrl } from "@/api/client";

export const useHomeStore = defineStore("homeStore", {
  state: () => ({
    popularNow: [],
    popularMovies: [],
    popularSeries: [],
    comingSoon: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchHomeBlocks() {
      this.loading = true;
      this.error = null;
      try {
        const [nowRes, moviesRes, seriesRes, soonRes] = await Promise.all([
          axios.get(apiUrl("/api/popular_now")).catch((e) => ({ data: {} })),
          axios.get(apiUrl("/api/popular_movies")).catch((e) => ({ data: {} })),
          axios.get(apiUrl("/api/popular_series")).catch((e) => ({ data: {} })),
          axios.get(apiUrl("/api/coming_soon")).catch((e) => ({ data: {} })),
        ]);
        this.popularNow = Array.isArray(nowRes.data?.results) ? nowRes.data.results : [];
        this.popularMovies = Array.isArray(moviesRes.data?.results) ? moviesRes.data.results : [];
        this.popularSeries = Array.isArray(seriesRes.data?.results) ? seriesRes.data.results : [];
        this.comingSoon = Array.isArray(soonRes.data?.results) ? soonRes.data.results : [];
      } catch (err) {
        console.error("Ошибка загрузки блоков главной:", err);
        this.error = err.message || "Ошибка загрузки";
      } finally {
        this.loading = false;
      }
    },
  },
});
