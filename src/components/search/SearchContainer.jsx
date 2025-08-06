import SearchBar from "./SearchBar";

function SearchContainer() {
  return (
    <div className="bg-gradient-to-tl from-blue-500 to-purple-600 m-4 rounded-lg flex flex-col items-center justify-center p-8 gap-6 text-white shadow-lg">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-3xl font-bold">Welcome to MovieHub</h2>
        <p className="text-lg opacity-90 max-w-md">
          Discover millions of movies, TV shows and people. Start exploring now!
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <SearchBar />
      </div>
    </div>
  );
}

export default SearchContainer;
