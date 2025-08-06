import { useContext } from "react";
import { MoviesContext } from "../../context/MovieContext";
import MovieCard from "./MovieCard/MovieCard";
import SkeletonCard from "../common/Loading/SkeletonCard";
import MovieNotFound from "./MovieNotFound";
import UsePagination from "../../hooks/UsePagination";

function MovieList({ movies }) {
  const { loading } = useContext(MoviesContext);

  if (loading)
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-6">
        {Array.from({ length: 12 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );

  if (movies.length === 0) {
    return <MovieNotFound />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-6">
      {movies.slice(0, 12).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
