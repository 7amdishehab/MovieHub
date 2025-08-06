import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../../../context/MovieContext";
import { TVShowsContext } from "../../../../context/TVShowContext";

function NavLink({ to, children }) {
  const { setQuery: setMovieQuery } = useContext(MoviesContext) || {};
  const { setQuery: setTVQuery } = useContext(TVShowsContext) || {};

  const handleClick = () => {
    if (setMovieQuery) setMovieQuery("");
    if (setTVQuery) setTVQuery("");
  };

  return (
    <Link
      to={to}
      className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group focus:outline-none  hover:scale-105"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

export default NavLink;
