/**
 * Базовый URL бэкенда. По умолчанию — fast.telier.uz (работает на Vercel без env).
 * Для локального dev с прокси Vite задайте в .env: VITE_API_BASE_URL=
 */
export const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "https://fast.telier.uz";

export function apiUrl(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${p}`;
}
