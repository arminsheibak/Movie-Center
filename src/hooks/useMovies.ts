import apiClient from "../services/api-client";
import Movie from "../entities/movies";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import { MovieQuery } from "../movieQueryStore";

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

const useMovies = (movieQuery: MovieQuery, searchText: string) =>
  useInfiniteQuery<FetchMoviesResponse, Error>({
    queryKey: ["movies", movieQuery, searchText],
    queryFn: ({pageParam = 1}) => {
      if (searchText) {
        return apiClient
          .get<FetchMoviesResponse>("search/movie", {
            params: { query: searchText, include_adult: true, page: pageParam },
          })
          .then((res) => res.data);
      } else {
        return apiClient
          .get<FetchMoviesResponse>("discover/movie", {
            params: {
              with_genres: movieQuery.genreId,
              sort_by: movieQuery.sortOrder,
              include_adult: true,
              page: pageParam
            },
          })
          .then((res) => res.data);
      }
    },
    getNextPageParam: (lastPage, allPages ) => {
      return (allPages.length + 2 > lastPage.total_pages ) ? undefined : allPages.length + 1
    },
    staleTime: ms('24h'),
  });

export default useMovies;
