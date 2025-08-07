import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import HomePage from "./pages/HomePage";
import Spinner from "./components/common/Loading/Spinner";
import { useContext } from "react";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import WishlistPage from "./pages/WishlistPage";
import NotFoundPage from "./pages/NotFoundPage";
import TVShowsPage from "./pages/TVShowsPage";
import TVShowDetailsPage from "./pages/TVShowDetailsPage";
import { MoviesContext } from "./context/MovieContext";

function App() {
  const { loading } = useContext(MoviesContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tv" element={<TVShowsPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/tv/:id" element={<TVShowDetailsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
