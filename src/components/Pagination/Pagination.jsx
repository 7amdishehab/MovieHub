import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const getPageNumbers = (currentPage, totalPages) => {
  const pages = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        "...",
        totalPages
      );
    }
  }
  return pages;
};

const Pagination = ({ prev, next, currentPage, totalPages, goToPage }) => {
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 my-8 select-none">
      <button
        onClick={prev}
        disabled={currentPage === 1}
        className="p-2 rounded text-xl text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        <FaChevronLeft />
      </button>

      {pages.map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="px-2 text-lg text-gray-500 dark:text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => {
              if (goToPage) {
                goToPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`w-fit h-9 px-2 rounded text-lg font-medium transition-colors duration-200 ${
              page === currentPage
                ? "bg-blue-500 text-white shadow"
                : "text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={next}
        disabled={currentPage === totalPages}
        className="p-2 rounded text-xl text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
