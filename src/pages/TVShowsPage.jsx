import { useContext, useEffect } from "react";
import { TVShowsContext } from "../context/TVShowContext";
import TVShowSearchBar from "../components/tvshows/TVShowSearchBar";
import Pagination from "../components/Pagination/Pagination";
import usePagination from "../hooks/usePagination";
import ListGrid from "../components/lists/ListGrid";
import ListSkeleton from "../components/lists/ListSkeleton";
import ListEmptyState from "../components/lists/ListEmptyState";

const TVShowsPage = () => {
  const {
    tvshows,
    loadingTVShows,
    loadingSearch,
    totalPages,
    query,
    setQuery,
    handleSearch,
    handlePageChange,
    fetchPopularTVShows,
  } = useContext(TVShowsContext);
  const { currentPage, prev, next, goToPage } = usePagination(totalPages);

  useEffect(() => {
    if (currentPage !== 1) {
      handlePageChange(currentPage);
    }
  }, [currentPage, handlePageChange]);

  useEffect(() => {
    if (query === "") {
      fetchPopularTVShows(1);
    }
  }, [query, fetchPopularTVShows]);

  const onSearch = (searchText) => {
    setQuery(searchText);
    handleSearch(searchText, 1);
    goToPage(1);
  };

  const isLoading = loadingTVShows || loadingSearch;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <TVShowSearchBar
            query={query}
            setQuery={setQuery}
            onSearch={onSearch}
          />
          {query && query.trim() && (
            <div className="mt-2 text-gray-600 dark:text-gray-300">
              Search Results for "{query}"
            </div>
          )}
        </div>
        {isLoading && tvshows.length === 0 ? (
          <ListSkeleton />
        ) : tvshows.length === 0 ? (
          <ListEmptyState message="No TV shows found." />
        ) : (
          <>
            <ListGrid items={tvshows} type="tv" />
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

export default TVShowsPage;
