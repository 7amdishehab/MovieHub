function CardImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-80 object-cover group-hover:brightness-75 transition-all duration-300"
      onError={(e) => {
        e.target.src =
          "https://placehold.co/300x450/1f2937/ffffff?text=No+Image";
      }}
    />
  );
}

export default CardImage;
