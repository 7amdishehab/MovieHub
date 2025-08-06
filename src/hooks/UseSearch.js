import { useSearchParams } from "react-router-dom";

export default function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  const setSearchAndPage = (newSearch, newPage = 1) => {
    const params = new URLSearchParams();
    if (newSearch) params.set("search", newSearch);
    if (newPage > 1) params.set("page", newPage);
    else params.delete("page");
    setSearchParams(params);
  };

  return { search, page, setSearchAndPage };
}
