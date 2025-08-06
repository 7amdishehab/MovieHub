import { useWishlist } from "../../context/WishlistContext";

const BACKDROP_BASE = "https://image.tmdb.org/t/p/original";

function TVShowHeroSection({ tvshow }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const isWished = wishlist.some(
    (item) => item.id === tvshow.id && item.type === "tv"
  );
  return (
    <div className="relative h-96 md:h-[500px]">
      <img
        src={
          tvshow.backdrop_path
            ? `${BACKDROP_BASE}${tvshow.backdrop_path}`
            : "https://placehold.co/800x450/1f2937/ffffff?text=No+Image"
        }
        alt={tvshow.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src =
            "https://placehold.co/800x450/1f2937/ffffff?text=No+Image";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {tvshow.name}
        </h1>
        <div className="flex items-center flex-wrap gap-4 text-white/90">
          <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
            {tvshow.first_air_date
              ? new Date(tvshow.first_air_date).getFullYear()
              : "N/A"}
          </span>
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            {tvshow.vote_average ? tvshow.vote_average.toFixed(1) : "N/A"}
          </span>
          <span>
            {tvshow.episode_run_time && tvshow.episode_run_time.length > 0
              ? `${tvshow.episode_run_time[0]} min/ep`
              : "N/A"}
          </span>
          <button
            onClick={() => toggleWishlist({ ...tvshow, type: "tv" })}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              isWished
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isWished ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TVShowHeroSection;
