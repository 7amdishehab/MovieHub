import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../context/MovieContext";
import SearchBar from "../components/search/SearchBar";
import SearchInfo from "../components/search/SearchInfo";
import Pagination from "../components/Pagination/Pagination";
import usePagination from "../hooks/usePagination";
import useSearch from "../hooks/useSearch";
import ListGrid from "../components/lists/ListGrid";
import ListSkeleton from "../components/lists/ListSkeleton";
import ListEmptyState from "../components/lists/ListEmptyState";

const SearchResultsPage = () => {
  const { search, page, setSearchAndPage } = useSearch();
  const { movies, loadingSearch, totalPages, handleSearch, setQuery } =
    useContext(MoviesContext);
  const { currentPage, prev, next, goToPage } = usePagination(totalPages);
  const [initialLoad, setInitialLoad] = useState(true);
  const [prevSearch, setPrevSearch] = useState(search);

  useEffect(() => {
    if (search && search.trim()) {
      setQuery(search);
      const targetPage = initialLoad ? page : currentPage;
      handleSearch(search, targetPage);
      if (initialLoad) {
        setInitialLoad(false);
      }
    }
  }, [search, currentPage, handleSearch, setQuery, initialLoad, page]);

  useEffect(() => {
    if (search && search !== prevSearch) {
      goToPage(1);
      setSearchAndPage(search, 1);
    }
    setPrevSearch(search);
  }, [search, prevSearch, goToPage, setSearchAndPage]);

  const showNoResults = !loadingSearch && search && movies.length === 0;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <SearchBar />
          {search && <SearchInfo />}
        </div>
        {loadingSearch && movies.length === 0 ? (
          <ListSkeleton />
        ) : showNoResults ? (
          <ListEmptyState message={`No movies found for "${search}"`} />
        ) : (
          <>
            <ListGrid items={movies} type="movie" />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              next={next}
              prev={prev}
              goToPage={goToPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
