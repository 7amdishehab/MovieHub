function CardTitle({ children }) {
  return (
    <h2 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2 h-11">
      {children}
    </h2>
  );
}

export default CardTitle;
