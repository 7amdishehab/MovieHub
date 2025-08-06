import TVShowCard from "../TVShowCard/TVShowCard";

function TVShowGrid({ tvshows }) {
  if (!tvshows || tvshows.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 dark:text-gray-400">
        No TV shows found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-6">
      {tvshows.slice(0, 12).map((tvshow) => (
        <TVShowCard key={tvshow.id} tvshow={tvshow} />
      ))}
    </div>
  );
}

export default TVShowGrid;
