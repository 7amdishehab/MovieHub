import { FaHeart } from "react-icons/fa6";
import { useWishlist } from "../../../context/WishlistContext";
import { Link } from "react-router-dom";

function WatchListBtn() {
  const { wishlist } = useWishlist();
  const count = wishlist.length > 99 ? "99+" : wishlist.length;
  return (
    <Link
      to="/wishlist"
      className="flex items-center gap-2 relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium group focus:outline-none"
    >
      <div className="flex justify-center items-center relative">
        {wishlist.length > 0 && (
          <span className="absolute text-white text-xs font-bold z-50">
            {count}
          </span>
        )}
        <FaHeart className="text-2xl text-blue-500 group-hover:scale-110 transition-transform duration-200" />
      </div>
      <span>Watch List</span>
    </Link>
  );
}

export default WatchListBtn;
