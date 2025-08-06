import { FaHeartCircleMinus, FaHeartCirclePlus } from "react-icons/fa6";

function CardWishlistButton({ isWished, onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-2 right-2 text-3xl hover:scale-110 transition-transform duration-200"
      aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isWished ? (
        <FaHeartCircleMinus className="text-red-500 drop-shadow-lg" />
      ) : (
        <FaHeartCirclePlus className="text-white drop-shadow-lg hover:text-red-400" />
      )}
    </button>
  );
}

export default CardWishlistButton;
