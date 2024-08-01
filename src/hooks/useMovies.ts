import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Movie from "../entities/movies";
import { MovieQuery } from "../components/MovieGrid";

interface FetchMoviesResponse {
  page: number;
  results : Movie[];
}


const useMovies = (movieQuery: MovieQuery) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient.get<FetchMoviesResponse>('discover/movie', { params: {with_genres: movieQuery.genre?.id, sort_by: movieQuery.sortOrder } })
    .then(res =>{ setMovies(res.data.results); setLoading(false)})
    .catch(err => {setError(err.message); setLoading(false) })
    
  }, [movieQuery]);

  return {movies, error, isLoading}
}

export default useMovies;