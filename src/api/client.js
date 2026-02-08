/**
 * Базовый URL бэкенда.
 * - В продакшене (Vercel): задать VITE_API_BASE_URL=https://fast.telier.uz в настройках проекта.
 * - В dev: не задавать — запросы идут на /api/... и прокси Vite перенаправляет на бэкенд.
 */
export const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export function apiUrl(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${p}`;
}
