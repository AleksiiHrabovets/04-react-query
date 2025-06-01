import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/movies";

import type { FetchMoviesResponse } from "../types/movie";

export const useMovies = (query: string, page: number) => {
  return useQuery<FetchMoviesResponse, Error>({
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: !!query,

    placeholderData: (previousData: FetchMoviesResponse | undefined) =>
      previousData,
  });
};
