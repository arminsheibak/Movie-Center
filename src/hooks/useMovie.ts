import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"
import MovieDetail from "../entities/movie"
import ms from "ms"

const useMovie = (movieId: string) => {
  return useQuery<MovieDetail, Error>({
    queryKey: ['movies', movieId],
    queryFn: () => {
      return apiClient.get<MovieDetail>(`/movie/${movieId}`).then(res => res.data)
    },
    staleTime: ms('24h')
  })
}

export default useMovie;