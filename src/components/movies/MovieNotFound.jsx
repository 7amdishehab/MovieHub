function MovieNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
      <div className="text-6xl mb-4">🎬</div>
      <h3 className="text-xl font-semibold mb-2">No movies found</h3>
      <p className="text-center">Try search again or browse our collection</p>
    </div>
  );
}

export default MovieNotFound;
