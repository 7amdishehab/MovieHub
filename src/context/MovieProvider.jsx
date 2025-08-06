import { useState, useEffect, useCallback, useMemo } from "react";
import {
  fetchNowPlaying,
  searchMovies,
  fetchMovieDetails,
  fetchMovieRecommendations,
} from "../services/api/tmdbApi";
import { MoviesContext } from "./MovieContext";

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [query, setQuery] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("search") || "";
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [movieDetail, setMovieDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);

  const fetchNowPlayingMovies = useCallback(async (currentPage = 1) => {
    setLoadingMovies(true);
    try {
      const data = await fetchNowPlaying(currentPage);
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
      setPage(currentPage);
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    } finally {
      setLoadingMovies(false);
    }
  }, []);

  const handleSearch = useCallback(
    async (searchText, currentPage = 1) => {
      setQuery(searchText);
      if (searchText.trim() === "") {
        fetchNowPlayingMovies(1);
        return;
      }

      setLoadingSearch(true);
      try {
        const data = await searchMovies(searchText, currentPage);
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (error) {
        console.error("Error searching for movies:", error);
        setMovies([]);
        setTotalPages(1);
        setPage(currentPage);
      } finally {
        setLoadingSearch(false);
      }
    },
    [fetchNowPlayingMovies]
  );

  const handlePageChange = useCallback(
    (newPage) => {
      setPage(newPage);
      if (query.trim()) {
        handleSearch(query, newPage);
      } else {
        fetchNowPlayingMovies(newPage);
      }
    },
    [query, handleSearch, fetchNowPlayingMovies]
  );

  const getMovieDetail = useCallback(async (id) => {
    setLoadingDetail(true);
    try {
      const data = await fetchMovieDetails(id);
      setMovieDetail(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoadingDetail(false);
    }
  }, []);

  const getMovieRecommendations = useCallback(async (id) => {
    setLoadingRecommendations(true);
    try {
      const data = await fetchMovieRecommendations(id);
      setRecommendations(data.results || []);
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
      setRecommendations([]);
    } finally {
      setLoadingRecommendations(false);
    }
  }, []);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, [fetchNowPlayingMovies]);

  const contextValue = useMemo(
    () => ({
      movies,
      loadingMovies,
      loadingSearch,
      query,
      setQuery,
      page,
      totalPages,
      handleSearch,
      fetchNowPlayingMovies,
      handlePageChange,
      movieDetail,
      loadingDetail,
      getMovieDetail,
      recommendations,
      loadingRecommendations,
      getMovieRecommendations,
    }),
    [
      movies,
      loadingMovies,
      loadingSearch,
      query,
      page,
      totalPages,
      movieDetail,
      loadingDetail,
      recommendations,
      loadingRecommendations,
      handleSearch,
      fetchNowPlayingMovies,
      handlePageChange,
      getMovieDetail,
      getMovieRecommendations,
    ]
  );

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
