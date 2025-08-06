import MovieCard from "../movies/MovieCard/MovieCard";
import TVShowCard from "../tvshows/TVShowCard/TVShowCard";

function ListGrid({ items, type }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-6">
      {items.slice(0, 12).map((item) => {
        const resolvedType = type || item.type;
        const showType = !type;
        return resolvedType === "movie" ? (
          <MovieCard
            key={item.id + "-movie"}
            movie={item}
            showType={showType}
          />
        ) : (
          <TVShowCard key={item.id + "-tv"} tvshow={item} showType={showType} />
        );
      })}
    </div>
  );
}

export default ListGrid;
