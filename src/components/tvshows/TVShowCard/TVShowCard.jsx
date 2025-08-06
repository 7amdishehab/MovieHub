import CardImage from "../../cards/CardImage";
import CardTitle from "../../cards/CardTitle";
import CardMeta from "../../cards/CardMeta";
import CardWishlistButton from "../../cards/CardWishlistButton";
import { useWishlist } from "../../../context/WishlistContext";
import { Link } from "react-router-dom";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function TVShowCard({ tvshow, showType }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const isWished = wishlist.some(
    (item) => item.id === tvshow.id && item.type === "tv"
  );
  const tvshowName = tvshow.name || tvshow.title || "Unknown TV Show";
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 relative group">
      <Link to={`/tv/${tvshow.id}`}>
        <div className="relative">
          <CardImage src={IMAGE_BASE + tvshow.poster_path} alt={tvshowName} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {showType && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow">
              TV Show
            </div>
          )}
        </div>
      </Link>
      <div className="p-4 flex flex-col justify-between items-start">
        <CardTitle>{tvshowName}</CardTitle>
        <CardMeta
          rating={tvshow.vote_average}
          year={
            tvshow.first_air_date
              ? new Date(tvshow.first_air_date).getFullYear()
              : undefined
          }
        />
        <CardWishlistButton
          isWished={isWished}
          onClick={() => toggleWishlist({ ...tvshow, type: "tv" })}
        />
      </div>
    </div>
  );
}

export default TVShowCard;
