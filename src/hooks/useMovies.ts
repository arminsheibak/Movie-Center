import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Movie from "../entities/movies";
import Genre from "../entities/genres";

interface FetchMoviesResponse {
  page: number;
  results : Movie[];
}


const useMovies = (selectedGenre: Genre | null) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient.get<FetchMoviesResponse>('discover/movie', { params: {with_genres: selectedGenre?.id} })
    .then(res =>{ setMovies(res.data.results); setLoading(false)})
    .catch(err => {setError(err.message); setLoading(false) })
    
  }, [selectedGenre?.id]);

  return {movies, error, isLoading}
}

export default useMovies;