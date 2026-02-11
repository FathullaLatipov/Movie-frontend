/**
 * Базовый URL бэкенда. По умолчанию — fast.telier.uz (работает на Vercel без env).
 * Для локального dev с прокси Vite задайте в .env: VITE_API_BASE_URL=
 */
export const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "https://fast.telier.uz";

export function apiUrl(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${p}`;
}

/** Постер через прокси только для Yandex (часто блокируются). TMDB грузим напрямую — меньше 502. */
const POSTER_PROXY_HOSTS = ["avatars.mds.yandex.net", "st.kp.yandex.net"];
export function posterUrl(url) {
  if (!url || typeof url !== "string") return url;
  try {
    const host = new URL(url).hostname;
    if (POSTER_PROXY_HOSTS.some((h) => host === h || host.endsWith("." + h)))
      return apiUrl("/api/poster?url=" + encodeURIComponent(url));
  } catch (_) {}
  return url;
}
