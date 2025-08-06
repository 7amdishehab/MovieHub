const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function PosterWithInfo({
  poster_path,
  name,
  status,
  original_language,
  number_of_seasons,
  number_of_episodes,
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
      <img
        src={
          poster_path
            ? `${IMAGE_BASE}${poster_path}`
            : "https://placehold.co/300x450/1f2937/ffffff?text=No+Image"
        }
        alt={name}
        className="w-full rounded-lg shadow-md mb-4"
      />
      <div className="space-y-3">
        <div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Status
          </span>
          <p className="text-gray-900 dark:text-white">{status}</p>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Original Language
          </span>
          <p className="text-gray-900 dark:text-white">
            {original_language?.toUpperCase()}
          </p>
        </div>
        {number_of_seasons !== undefined && (
          <div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Seasons
            </span>
            <p className="text-gray-900 dark:text-white">{number_of_seasons}</p>
          </div>
        )}
        {number_of_episodes !== undefined && (
          <div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Episodes
            </span>
            <p className="text-gray-900 dark:text-white">
              {number_of_episodes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PosterWithInfo;
