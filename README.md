# 🎬 MovieHub - React Movie Discovery App

A modern, responsive movie discovery application built with React, Vite, and Tailwind CSS. This project allows users to browse movies, view detailed information, manage wishlists, and discover new content through an intuitive interface.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Team Members](#team-members)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Routing & Navigation](#routing--navigation)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Development Guidelines](#development-guidelines)
- [Performance Optimizations](#performance-optimizations)
- [Future Enhancements](#future-enhancements)
- [📚 Documentation](#-documentation)

## 🎯 Project Overview

MovieHub is a comprehensive movie discovery platform that leverages The Movie Database (TMDb) API to provide users with an extensive catalog of movies and TV shows. The application focuses on delivering a seamless user experience with modern UI/UX principles and responsive design.

### Main Objectives

- Browse and discover movies with detailed information
- Manage personal wishlists with persistent storage
- Search functionality with real-time results
- Responsive design for all device types
- Smooth animations and transitions

## 👥 Team Members

**Team 2 - Development Squad**

| #   | Name                   |
| --- | ---------------------- |
| 1   | محمد سامي محمد عبدالله |
| 2   | محمد إبراهيم غازي      |
| 3   | حمدي السيد أحمد حسين   |
| 4   | محمد فؤاد غانم         |
| 5   | سلمى رفعت علي          |
| 6   | روان محمد سعد          |

## ✨ Features

### Core Features

- **Movie Listing**: Browse current playing movies with pagination
- **Movie Details**: Comprehensive movie information with cast, crew, and ratings
- **Wishlist Management**: Add/remove movies with persistent storage
- **Search Functionality**: Real-time movie search with dedicated results page
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and interactions

### Bonus Features

- **TV Shows Integration**: Browse and manage TV shows
- **TV Show Details**: Detailed information for TV series
- **Mixed Wishlist**: Clear distinction between movies and TV shows in wishlist
- **Advanced Filtering**: Genre-based filtering and sorting options

## 🛠 Tech Stack

### Frontend Framework

- **React 18**: Modern React with hooks and functional components
- **Vite**: Lightning-fast build tool and development server
- **JavaScript (ES6+)**: Modern JavaScript features and syntax

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoint system

### State Management & Hooks

- **useState**: Component-level state management
- **useEffect**: Side effects and lifecycle management
- **useContext**: Global state for wishlist and user preferences
- **useReducer**: Complex state logic management
- **Custom Hooks**: Reusable logic abstraction

### Routing & Navigation

- **React Router DOM**: Client-side routing
- **Search Parameters**: URL-based state management
- **Dynamic Routing**: Parameter-based route handling

### API Integration

- **Fetch API**: HTTP requests to TMDb API
- **Custom API Hooks**: Abstracted API logic
- **Error Handling**: Comprehensive error management
- **Loading States**: User feedback during data fetching

## 📁 Project Structure

```text
src/
├── components/
│   ├── common/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Loading/
│   │   │   ├── Spinner.jsx
│   │   │   └── SkeletonCard.jsx
│   │   └── ErrorBoundary/
│   │       └── ErrorBoundary.jsx
│   ├── movies/
│   │   ├── MovieCard/
│   │   │   ├── MovieCard.jsx
│   │   │   └── WishlistButton.jsx
│   │   ├── MovieGrid/
│   │   │   └── MovieGrid.jsx
│   │   ├── MovieDetails/
│   │   │   ├── MovieHero.jsx
│   │   │   ├── MovieInfo.jsx
│   │   │   ├── CastSection.jsx
│   │   │   ├── ReviewsSection.jsx
│   │   │   └── RecommendationsSection.jsx
│   │   └── MovieFilters/
│   │       └── FilterBar.jsx
│   ├── tvshows/
│   │   ├── TVShowCard/
│   │   │   └── TVShowCard.jsx
│   │   ├── TVShowGrid/
│   │   │   └── TVShowGrid.jsx
│   │   └── TVShowDetails/
│   │       ├── TVShowHero.jsx
│   │       └── TVShowInfo.jsx
│   ├── wishlist/
│   │   ├── WishlistGrid/
│   │   │   └── WishlistGrid.jsx
│   │   ├── WishlistItem/
│   │   │   └── WishlistItem.jsx
│   │   └── WishlistCounter/
│   │       └── WishlistCounter.jsx
│   ├── search/
│   │   ├── SearchResults/
│   │   │   └── SearchResults.jsx
│   │   └── SearchFilters/
│   │       └── SearchFilters.jsx
│   └── ui/
│       ├── Button/
│       │   └── Button.jsx
│       ├── Card/
│       │   └── Card.jsx
│       ├── Modal/
│       │   └── Modal.jsx
│       └── Pagination/
│           └── Pagination.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── MovieDetailsPage.jsx
│   ├── TVShowDetailsPage.jsx
│   ├── WishlistPage.jsx
│   ├── SearchResultsPage.jsx
│   └── NotFoundPage.jsx
├── hooks/
│   ├── useMovies.js
│   ├── useMovieDetails.js
│   ├── useTVShows.js
│   ├── useSearch.js
│   ├── useWishlist.js
│   ├── usePagination.js
│   └── useLocalStorage.js
├── context/
│   ├── WishlistContext.jsx
│   ├── ThemeContext.jsx
│   └── AppContext.jsx
├── services/
│   ├── api/
│   │   ├── tmdbApi.js
│   │   ├── movieService.js
│   │   ├── tvShowService.js
│   │   └── searchService.js
│   └── utils/
│       ├── imageUtils.js
│       ├── dateUtils.js
│       └── formatUtils.js
├── constants/
│   ├── apiEndpoints.js
│   ├── routes.js
│   └── config.js
└── styles/
    ├── globals.css
    └── animations.css
```

## 🔌 API Integration

### The Movie Database (TMDb) API

#### Base Configuration

```javascript
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
```

#### Core Endpoints

- **Now Playing Movies**: `/movie/now_playing`
- **Movie Details**: `/movie/{id}`
- **Movie Recommendations**: `/movie/{movie_id}/recommendations`
- **Movie Reviews**: `/movie/{movie_id}/reviews`
- **Search Movies**: `/search/movie`
- **Popular TV Shows**: `/tv/popular`
- **TV Show Details**: `/tv/{series_id}`

#### API Service Architecture

```javascript
// Custom API hooks for data fetching
useMovies(page); // Fetch paginated movies
useMovieDetails(id); // Fetch movie details with recommendations
useSearch(query, page); // Search functionality
useTVShows(page); // Fetch TV shows
```

## 🏗 Component Architecture

### Component Hierarchy

#### 1. Layout Components

- **Header**: Navigation, search bar, wishlist counter
- **Footer**: Links and information
- **Layout**: Wrapper component for consistent structure

#### 2. Feature Components

- **MovieCard**: Reusable movie display component
- **MovieGrid**: Grid layout for movie collections
- **MovieDetails**: Comprehensive movie information display
- **WishlistButton**: Interactive wishlist toggle
- **SearchBar**: Real-time search input with suggestions

#### 3. UI Components

- **Button**: Customizable button with variants
- **Card**: Flexible card container
- **Modal**: Overlay component for additional content
- **Pagination**: Navigation between pages
- **Loading**: Various loading state indicators

#### 4. Smart Components

- **WishlistManager**: Handles wishlist operations
- **SearchManager**: Manages search state and results
- **PaginationManager**: Handles page navigation logic

## 🔄 State Management

### Context Providers

```javascript
// Global state management structure
AppProvider
├── WishlistProvider (wishlist items, add/remove functions)
├── ThemeProvider (dark/light mode toggle)
└── SearchProvider (search history, recent searches)
```

### Custom Hooks

- **useWishlist**: Manages wishlist operations with localStorage persistence
- **useSearch**: Handles search functionality with debouncing
- **usePagination**: Manages pagination state and navigation
- **useLocalStorage**: Persistent storage utility hook

### State Structure

```javascript
// Wishlist state example
{
  items: [
    {
      id: number,
      type: 'movie' | 'tv',
      title: string,
      poster_path: string,
      release_date: string,
      vote_average: number
    }
  ],
  count: number,
  isLoading: boolean
}
```

## 🧭 Routing & Navigation

### Route Structure

```javascript
// React Router configuration
/                          // Home page (movie listing)
/movie/:id                 // Movie details page
/tv/:id                    // TV show details page
/wishlist                  // User's wishlist
/search                    // Search results page
/search?query=:searchTerm  // Search with parameters
```

### Search Parameters Usage

- **Pagination**: `?page=2`
- **Search Query**: `?query=avengers`
- **Filters**: `?genre=action&year=2023`
- **Sorting**: `?sort=popularity&order=desc`

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- TMDb API key

### Installation Steps

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd moviehub

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your TMDb API key to .env.local
REACT_APP_TMDB_API_KEY=your_api_key_here

# Start development server
npm run dev
```

## 🌍 Environment Variables

```env
# TMDb API Configuration
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
REACT_APP_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500

# Application Configuration
REACT_APP_APP_NAME=MovieHub
REACT_APP_VERSION=1.0.0
```

## 📋 Development Guidelines

### Code Standards

- **ESLint**: Enforced code quality and consistency
- **Prettier**: Automated code formatting
- **Component Naming**: PascalCase for components, camelCase for functions
- **File Organization**: Feature-based folder structure
- **Import Order**: External libraries, internal modules, relative imports

### Performance Best Practices

- **Lazy Loading**: Route-based code splitting
- **Image Optimization**: Responsive images with proper sizing
- **Memoization**: React.memo for expensive components
- **Debouncing**: Search input optimization
- **Caching**: API response caching with custom hooks

### Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes
- **Focus Management**: Proper focus handling in modals and navigation

## 🚀 Performance Optimizations

### Code Splitting

```javascript
// Route-based lazy loading
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
```

### Image Optimization

- Progressive loading with placeholder images
- Responsive image sizing based on device
- WebP format support with fallbacks
- Lazy loading for off-screen images

### API Optimization

- Request debouncing for search
- Response caching with expiration
- Pagination for large datasets
- Error retry mechanisms

## 🔮 Future Enhancements

### Planned Features

- **User Authentication**: Personal accounts and preferences
- **Advanced Filtering**: Genre, year, rating filters
- **Social Features**: Reviews, ratings, and sharing
- **Offline Support**: PWA capabilities with service workers
- **Personalized Recommendations**: AI-powered suggestions
- **Multi-language Support**: Internationalization (i18n)

### Technical Improvements

- **TypeScript Migration**: Enhanced type safety
- **Testing Suite**: Unit and integration tests
- **CI/CD Pipeline**: Automated deployment
- **Performance Monitoring**: Analytics and error tracking
- **SEO Optimization**: Server-side rendering with Next.js

## 📊 Project Timeline

**Development Phase**: 10 Days Maximum

- **Days 1-2**: Project setup, API integration, basic routing
- **Days 3-4**: Core components development (MovieCard, MovieGrid)
- **Days 5-6**: Movie details page, wishlist functionality
- **Days 7-8**: Search functionality, TV shows integration
- **Days 9-10**: Testing, optimization, and final polish

## 🎨 Design Reference

**Figma Design**: [Movie App UI Design](https://www.figma.com/file/jvGvsGLg6X3T7JPU3E2rNl/Movie-App?type=design&node-id=0%3A1&mode=design&t=GaXQ9V2yV3EruZxZ-1)

The application follows the provided Figma design with:

- Modern card-based layout
- Consistent color scheme and typography
- Responsive breakpoints for all devices
- Smooth animations and micro-interactions

## 📚 Documentation

For detailed team assignments, development guidelines, and project structure, please refer to our comprehensive documentation:

- **[📋 Team Assignment & Responsibilities](./docs/TEAM_ASSIGNMENT.md)** - Complete division of tasks among team members
- **[📚 Documentation Index](./docs/README.md)** - Overview of all project documentation

### Quick Links

- **Developer 1 (Hamdy)**: Frontend Core & Infrastructure
- **Developer 2 (Rawan)**: Content Management & API Integration
- **Developer 3 (Mohamed Samy)**: User Experience & Wishlist Management

## 📚 Resources

- **TMDb API Documentation**: [https://developer.themoviedb.org](https://developer.themoviedb.org)
- **React Documentation**: [https://react.dev](https://react.dev)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [https://www.framer.com/motion](https://www.framer.com/motion)
- **Vite Documentation**: [https://vitejs.dev](https://vitejs.dev)

---

**Built with ❤️ by Team 2**

_This project demonstrates modern React development practices with a focus on user experience, performance, and maintainable code architecture._
