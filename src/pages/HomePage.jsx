import { useContext, useEffect } from "react";
import { MoviesContext } from "../context/MovieContext";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination/Pagination";
import SearchContainer from "../components/search/SearchContainer";
import ListGrid from "../components/lists/ListGrid";
import ListSkeleton from "../components/lists/ListSkeleton";
import ListEmptyState from "../components/lists/ListEmptyState";

const HomePage = () => {
  const {
    movies,
    loadingMovies,
    totalPages,
    handlePageChange,
    page,
    query,
    fetchNowPlayingMovies,
  } = useContext(MoviesContext);
  const { currentPage, prev, next, goToPage } = usePagination(totalPages);

  useEffect(() => {
    if (currentPage !== page) {
      handlePageChange(currentPage);
    }
  }, [currentPage, page, handlePageChange]);

  useEffect(() => {
    if (query === "") {
      fetchNowPlayingMovies(1);
    }
  }, [query, fetchNowPlayingMovies]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
      <SearchContainer />
      <div className="max-w-7xl mx-auto">
        {loadingMovies && movies.length === 0 ? (
          <ListSkeleton />
        ) : movies.length === 0 ? (
          <ListEmptyState message="No movies found." />
        ) : (
          <>
            <ListGrid items={movies} type="movie" />
            <Pagination
              next={next}
              prev={prev}
              currentPage={currentPage}
              totalPages={totalPages}
              goToPage={goToPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
