import React, { useContext } from "react";
import { MoviesContext } from "../../context/MovieContext";

function SearchInfo() {
  const { movies, query } = useContext(MoviesContext);
  return (
    <div className="mt-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Search Results for "{query}"
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Found {movies.length} result{movies.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default SearchInfo;
