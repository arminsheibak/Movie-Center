import apiClient from "../services/api-client";
import Movie from "../entities/movies";
import { MovieQuery } from "../components/MovieGrid";
import { useQuery } from "@tanstack/react-query";

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
}

const useMovies = (movieQuery: MovieQuery, searchText: string) =>
  useQuery<FetchMoviesResponse, Error>({
    queryKey: ["movies", movieQuery, searchText],
    queryFn: () => {
      if (searchText) {
        return apiClient
          .get<FetchMoviesResponse>("search/movie", {
            params: { query: searchText, include_adult: true },
          })
          .then((res) => res.data);
      } else {
        return apiClient
          .get<FetchMoviesResponse>("discover/movie", {
            params: {
              with_genres: movieQuery.genre?.id,
              sort_by: movieQuery.sortOrder,
              include_adult: true,
            },
          })
          .then((res) => res.data);
      }
    },
  });

export default useMovies;
