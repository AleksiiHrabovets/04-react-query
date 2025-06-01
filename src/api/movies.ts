import axios from "axios";

import type { MovieResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieResponse> => {
  const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

  if (!TMDB_TOKEN) {
    console.error("VITE_TMDB_TOKEN is not defined in your .env file.");
    throw new Error("TMDB API token is missing. Please check your .env file.");
  }

  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      query,
      page,
      include_adult: false,
      language: "en-US",
    },
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
      Accept: "application/json",
    },
  });

  return response.data;
};
