import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { IoHeartDislike } from "react-icons/io5";
import ListGrid from "../components/lists/ListGrid";
import ListEmptyState from "../components/lists/ListEmptyState";

const WishListPage = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <ListEmptyState message="No items in your watchlist!" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Wishlist
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            You have {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} in
            your wishlist
          </p>
        </div>
        <ListGrid items={wishlist} type={null} />
      </div>
    </div>
  );
};

export default WishListPage;
