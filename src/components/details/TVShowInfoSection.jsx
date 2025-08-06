function TVShowInfoSection({ tvshow }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Overview
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {tvshow.overview || "No overview available."}
      </p>
      {tvshow.genres && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
            Genres
          </h3>
          <div className="flex flex-wrap gap-2">
            {tvshow.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TVShowInfoSection;
