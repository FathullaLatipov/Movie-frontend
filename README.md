# Kinoarea — Vue 3 + Vite + Tailwind CSS

Фронтенд кино-приложения на Vue 3, Vite и Tailwind CSS 4.

## Требования

- **Node.js** 18+ (рекомендуется 20 LTS)
- **npm** 9+ (или pnpm/yarn)

## Локальный запуск

### 1. Установка зависимостей

Из корня проекта:

```bash
cd frontend
npm install
```

### 2. Режим разработки

Запуск dev-сервера с горячей перезагрузкой:

```bash
npm run dev
```

Приложение откроется по адресу **http://localhost:5173** (или другой порт, если 5173 занят — порт будет указан в консоли).

### 3. Сборка для продакшена

```bash
npm run build
```

Собранные файлы появятся в папке `dist/`.

### 4. Просмотр продакшен-сборки локально

После `npm run build`:

```bash
npm run preview
```

Откроется локальный сервер с собранным приложением (по умолчанию http://localhost:4173).

---

## API и деплой на Vercel

- **Локально (npm run dev):** запросы к `/api` проксируются на бэкенд через Vite.
- **На Vercel:** прокси нет, поэтому нужно задать переменную окружения, чтобы фронт ходил на бэкенд напрямую.

В настройках проекта Vercel добавьте:

| Имя | Значение |
|-----|----------|
| `VITE_API_BASE_URL` | `https://fast.telier.uz` |

После этого пересоберите проект (Redeploy). Запросы будут уходить на `https://fast.telier.uz/api/...`.

## Структура

- `src/` — исходный код (компоненты, страницы, роутер, stores)
- `public/` — статические файлы
- `src/views/HomePage/` — блоки главной страницы (Header, FamousFilms, Subscribe и т.д.)

---

This template uses Vue 3 `<script setup>` SFCs. See [Vue script setup docs](https://vuejs.org/api/sfc-script-setup.html) and [Vue scaling up guide](https://vuejs.org/guide/scaling-up/tooling.html).
