import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"
import ms from "ms"

interface FetchImagesResponse {
  backdrops: {file_path: string}[];
}

const useImages = (movieId: string) => {
  return useQuery<FetchImagesResponse, Error>({
    queryKey: ['movies', movieId, 'images'],
    queryFn: () => {
      return apiClient.get<FetchImagesResponse>(`/movie/${movieId}/images`).then(res => res.data)
    },
    staleTime: ms('24h')
  })
}

export default useImages;