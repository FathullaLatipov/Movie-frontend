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
      const endpoints = [
        { key: "popularNow", url: apiUrl("/api/popular_now") },
        { key: "popularMovies", url: apiUrl("/api/popular_movies") },
        { key: "popularSeries", url: apiUrl("/api/popular_series") },
        { key: "comingSoon", url: apiUrl("/api/coming_soon") },
      ];
      try {
        const results = await Promise.all(
          endpoints.map(async ({ key, url }) => {
            try {
              const res = await axios.get(url);
              return { key, data: res.data?.results ?? [] };
            } catch (err) {
              console.error(`Ошибка загрузки ${key}:`, err);
              return { key, data: [] };
            }
          })
        );
        for (const { key, data } of results) {
          this[key] = data;
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
