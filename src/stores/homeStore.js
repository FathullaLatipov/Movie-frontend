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
          axios.get(apiUrl("/api/popular_now")).catch((e) => ({ data: e.response?.data || {} })),
          axios.get(apiUrl("/api/popular_movies")).catch((e) => ({ data: e.response?.data || {} })),
          axios.get(apiUrl("/api/popular_series")).catch((e) => ({ data: e.response?.data || {} })),
          axios.get(apiUrl("/api/coming_soon")).catch((e) => ({ data: e.response?.data || {} })),
        ]);
        const takeResults = (res) => (Array.isArray(res?.data?.results) ? res.data.results : []);
        this.popularNow = takeResults(nowRes);
        this.popularMovies = takeResults(moviesRes);
        this.popularSeries = takeResults(seriesRes);
        this.comingSoon = takeResults(soonRes);
        const detail = nowRes.data?.detail || moviesRes.data?.detail || seriesRes.data?.detail || soonRes.data?.detail;
        if (detail && !this.popularNow.length && !this.popularMovies.length && !this.popularSeries.length && !this.comingSoon.length) {
          this.error = detail;
        }
      } catch (err) {
        console.error("Ошибка загрузки блоков главной:", err);
        this.error = err.message || "Ошибка загрузки";
      } finally {
        this.loading = false;
      }
    },
  },
});
