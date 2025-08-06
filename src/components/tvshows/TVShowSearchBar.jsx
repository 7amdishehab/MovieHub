import { useState } from "react";

function TVShowSearchBar({ query, setQuery, onSearch }) {
  const [input, setInput] = useState(query || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setQuery(input);
      onSearch(input);
    }
  };

  return (
    <form
      className="flex items-center mx-auto gap-2 md:gap-4 w-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search TV shows..."
        className="bg-white outline-none px-4 py-2 w-full rounded-md dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium"
      >
        Search
      </button>
    </form>
  );
}

export default TVShowSearchBar;
