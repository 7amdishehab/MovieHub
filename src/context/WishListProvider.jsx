import { useState, useEffect } from "react";
import { WishlistContext } from "./WishlistContext";

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const addToWishlist = (movie) => {
    if (
      !wishlist.find((item) => item.id === movie.id && item.type === movie.type)
    ) {
      setWishlist([...wishlist, movie]);
    }
  };

  const removeFromWishlist = (id, type) => {
    setWishlist(
      wishlist.filter((movie) => movie.id !== id || movie.type !== type)
    );
  };

  const toggleWishlist = (movie) => {
    const isWished = wishlist.some(
      (item) => item.id === movie.id && item.type === movie.type
    );
    if (isWished) {
      removeFromWishlist(movie.id, movie.type);
    } else {
      addToWishlist(movie);
    }
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
