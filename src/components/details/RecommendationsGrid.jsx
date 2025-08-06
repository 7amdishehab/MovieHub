import { Link } from "react-router-dom";
import TVShowCard from "../tvshows/TVShowCard/TVShowCard";
import MovieCard from "../movies/MovieCard/MovieCard";
import EmptyState from "../common/EmptyState";

function RecommendationsGrid({ items, type, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  if (!items || items.length === 0) {
    return (
      <EmptyState
        message={`No recommendations available for this ${
          type === "tv" ? "TV show" : "movie"
        }.`}
      />
    );
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {items
        .slice(0, 12)
        .map((item) =>
          type === "tv" ? (
            <TVShowCard key={item.id} tvshow={item} />
          ) : (
            <MovieCard key={item.id} movie={item} />
          )
        )}
    </div>
  );
}

export default RecommendationsGrid;
