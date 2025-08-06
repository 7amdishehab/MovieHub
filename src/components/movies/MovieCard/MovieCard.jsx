import CardImage from "../../cards/CardImage";
import CardTitle from "../../cards/CardTitle";
import CardMeta from "../../cards/CardMeta";
import CardWishlistButton from "../../cards/CardWishlistButton";
import { useWishlist } from "../../../context/WishlistContext";
import { Link } from "react-router-dom";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, showType }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const isWished = wishlist.some(
    (item) => item.id === movie.id && item.type === "movie"
  );
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 relative group">
      <Link to={`/movie/${movie.id}`}>
        <div className="relative">
          <CardImage src={IMAGE_BASE + movie.poster_path} alt={movie.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {showType && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow">
              Movie
            </div>
          )}
        </div>
      </Link>
      <div className="p-4 flex flex-col justify-between items-start">
        <CardTitle>{movie.title}</CardTitle>
        <CardMeta
          rating={movie.vote_average}
          year={
            movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : undefined
          }
        />
        <CardWishlistButton
          isWished={isWished}
          onClick={() => toggleWishlist({ ...movie, type: "movie" })}
        />
      </div>
    </div>
  );
}

export default MovieCard;
