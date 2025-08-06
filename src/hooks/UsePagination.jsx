import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function usePagination(totalPages = 1) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const goToPage = useCallback(
    (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        searchParams.set("page", newPage);
        setSearchParams(searchParams);
      }
    },
    [totalPages, searchParams, setSearchParams]
  );

  const next = useCallback(() => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, totalPages, goToPage]);

  const prev = useCallback(() => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  return { prev, next, currentPage, goToPage };
}
