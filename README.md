# 🎬 MovieHub

A modern, responsive movie and TV show discovery app built with React, Vite, and Tailwind CSS. MovieHub enables users to browse, search, and manage a wishlist for movies and TV shows, leveraging The Movie Database (TMDb) API.

---

## 🚀 Features

- Browse trending movies and TV shows
- Detailed movie and TV show pages
- Add/remove items to a persistent wishlist
- Real-time search with instant results
- Responsive design for all devices
- Smooth UI animations

---

## 🛠 Tech Stack

- **React 18** (with hooks)
- **Vite** (build tool)
- **Tailwind CSS** (utility-first styling)
- **React Router DOM** (routing)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── cards/
│   ├── common/
│   │   ├── ErrorBoundary/
│   │   ├── Footer/
│   │   ├── Header/
│   │   │   ├── Navbar/
│   │   │   └── ToggleMenu/
│   │   ├── Loading/
│   │   ├── SectionTitle.jsx
│   │   └── EmptyState.jsx
│   ├── details/
│   ├── lists/
│   ├── movies/
│   │   ├── MovieCard/
│   │   └── MovieList.jsx
│   ├── Pagination/
│   ├── search/
│   └── tvshows/
├── constants/
├── context/
├── hooks/
├── pages/
├── services/
└── index.css
```

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js v16+
- npm or yarn
- TMDb API key ([get one here](https://developer.themoviedb.org))

### Steps

```bash
# Clone the repository
git clone <repo-url>
cd Graduation-Project

# Install dependencies
npm install

# Create .env file and add your TMDb API key
# Example:
# VITE_TMDB_API_KEY=your_api_key_here

# Start the development server
npm run dev
```

---

## 🌍 Environment Variables

```
VITE_TMDB_API_KEY=your_tmdb_api_key
```

---

## 🧭 Main Pages

- `/` — Home (movies)
- `/movie/:id` — Movie details
- `/tv/:id` — TV show details
- `/wishlist` — Wishlist
- `/search` — Search results

---

## 👥 Team

| #   | Name                  |
| --- | --------------------- |
| 1   | Mohamed Samy Mohamed  |
| 2   | Mohamed Ibrahim Ghazy |
| 3   | Hamdy El-Sayed Ahmed  |
| 4   | Mohamed Fouad Ghanem  |
| 5   | Salma Refaat Ali      |
| 6   | Rawan Mohamed Saad    |

---

## 📚 Resources

- [TMDb API Docs](https://developer.themoviedb.org)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

---

**Built with ❤️ by Team 2**
