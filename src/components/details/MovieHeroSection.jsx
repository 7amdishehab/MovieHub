import { useWishlist } from "../../context/WishlistContext";

const BACKDROP_BASE = "https://image.tmdb.org/t/p/original";

function MovieHeroSection({ movie }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const isWished = wishlist.some(
    (item) => item.id === movie.id && item.type === "movie"
  );
  return (
    <div className="relative h-96 md:h-[500px]">
      <img
        src={
          movie.backdrop_path
            ? `${BACKDROP_BASE}${movie.backdrop_path}`
            : "https://placehold.co/800x450/1f2937/ffffff?text=No+Image"
        }
        alt={movie.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src =
            "https://placehold.co/800x450/1f2937/ffffff?text=No+Image";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {movie.title}
        </h1>
        <div className="flex items-center flex-wrap gap-4 text-white/90">
          <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
            {movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : "N/A"}
          </span>
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </span>
          <span>{movie.runtime ? `${movie.runtime} min` : "N/A"}</span>
          <button
            onClick={() => toggleWishlist({ ...movie, type: "movie" })}
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

export default MovieHeroSection;
