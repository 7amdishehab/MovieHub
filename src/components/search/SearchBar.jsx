import { useContext } from "react";
import { MoviesContext } from "../../context/MovieContext";
import useSearch from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import usePagination from "../../hooks/UsePagination";

function SearchBar() {
  const { query, setQuery } = useContext(MoviesContext);
  const { setSearchAndPage, search } = useSearch();
  const { currentPage } = usePagination();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchAndPage(query, currentPage);
      if (!search) {
        navigate(`/search?search=${query.trim()}`);
      }
    }
  };

  return (
    <form
      className="flex items-center mx-auto gap-2 md:gap-4 w-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search and explore..."
        className="bg-white outline-none px-4 py-2 w-full rounded-md dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
