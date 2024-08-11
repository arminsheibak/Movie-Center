import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"
import ms from "ms"
import Cast from "../entities/cast"

interface FetchCastResponse {
  cast: Cast[];
  id: number;
}

const useCast = (movieId: string) => {
  return useQuery<FetchCastResponse, Error>({
    queryKey: ['movies', movieId, 'credits'],
    queryFn: () => {
      return apiClient.get<FetchCastResponse>(`/movie/${movieId}/credits`).then(res => res.data)
    },
    staleTime: ms('24h')
  })
}

export default useCast;