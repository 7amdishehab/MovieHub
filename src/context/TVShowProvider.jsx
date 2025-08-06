import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  fetchPopularTV,
  searchTV,
  fetchTVDetails,
  fetchTVRecommendations,
} from "../services/api/tmdbApi";
import { TVShowsContext } from "./TVShowContext";

const TVShowsProvider = ({ children }) => {
  const [tvshows, setTVShows] = useState([]);
  const [loadingTVShows, setLoadingTVShows] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [query, setQuery] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("search") || "";
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [tvshowDetail, setTVShowDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);

  const fetchPopularTVShows = useCallback(async (currentPage = 1) => {
    setLoadingTVShows(true);
    try {
      const data = await fetchPopularTV(currentPage);
      setTVShows(data.results || []);
      setTotalPages(data.total_pages || 1);
      setPage(currentPage);
    } catch (error) {
      console.error("Error fetching popular TV shows:", error);
    } finally {
      setLoadingTVShows(false);
    }
  }, []);

  const handleSearch = useCallback(
    async (searchText, currentPage = 1) => {
      setQuery(searchText);
      if (searchText.trim() === "") {
        fetchPopularTVShows(1);
        return;
      }

      setLoadingSearch(true);
      try {
        const data = await searchTV(searchText, currentPage);
        setTVShows(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (error) {
        console.error("Error searching for TV shows:", error);
        setTVShows([]);
        setTotalPages(1);
        setPage(currentPage);
      } finally {
        setLoadingSearch(false);
      }
    },
    [fetchPopularTVShows]
  );

  const handlePageChange = useCallback(
    (newPage) => {
      setPage(newPage);
      if (query.trim()) {
        handleSearch(query, newPage);
      } else {
        fetchPopularTVShows(newPage);
      }
    },
    [query, handleSearch, fetchPopularTVShows]
  );

  const getTVShowDetail = useCallback(async (id) => {
    setLoadingDetail(true);
    try {
      const data = await fetchTVDetails(id);
      setTVShowDetail(data);
    } catch (error) {
      console.error("Error fetching TV show details:", error);
    } finally {
      setLoadingDetail(false);
    }
  }, []);

  const getTVShowRecommendations = useCallback(async (id) => {
    setLoadingRecommendations(true);
    try {
      const data = await fetchTVRecommendations(id);
      setRecommendations(data.results || []);
    } catch (error) {
      console.error("Error fetching TV show recommendations:", error);
      setRecommendations([]);
    } finally {
      setLoadingRecommendations(false);
    }
  }, []);

  useEffect(() => {
    fetchPopularTVShows();
  }, [fetchPopularTVShows]);

  const contextValue = useMemo(
    () => ({
      tvshows,
      loadingTVShows,
      loadingSearch,
      query,
      setQuery,
      page,
      totalPages,
      handleSearch,
      fetchPopularTVShows,
      handlePageChange,
      tvshowDetail,
      loadingDetail,
      getTVShowDetail,
      recommendations,
      loadingRecommendations,
      getTVShowRecommendations,
    }),
    [
      tvshows,
      loadingTVShows,
      loadingSearch,
      query,
      page,
      totalPages,
      tvshowDetail,
      loadingDetail,
      recommendations,
      loadingRecommendations,
      handleSearch,
      fetchPopularTVShows,
      handlePageChange,
      getTVShowDetail,
      getTVShowRecommendations,
    ]
  );

  return (
    <TVShowsContext.Provider value={contextValue}>
      {children}
    </TVShowsContext.Provider>
  );
};

export default TVShowsProvider;
