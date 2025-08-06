import axios from "axios";
import { API_KEY, BASE_URL } from "../../constants/config";

export const fetchNowPlaying = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data;
};

export const fetchMovieRecommendations = async (id, page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/recommendations`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return response.data;
};

export const fetchMovieReviews = async (id, page = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return response.data;
};

export const searchMovies = async (query, page = 1) => {
  if (!query) return { results: [], total_pages: 1 };
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      query: query,
      page: page,
    },
  });
  return response.data;
};

export const fetchPopularTV = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/tv/popular`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return response.data;
};

export const fetchTVDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/tv/${id}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return response.data;
};

export const searchTV = async (query, page = 1) => {
  if (!query) return { results: [], total_pages: 1 };
  const response = await axios.get(`${BASE_URL}/search/tv`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      query: query,
      page: page,
    },
  });
  return response.data;
};

export const fetchTVRecommendations = async (id, page = 1) => {
  const response = await axios.get(`${BASE_URL}/tv/${id}/recommendations`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return response.data;
};
