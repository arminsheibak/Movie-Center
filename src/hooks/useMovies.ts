import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Movie from "../entities/movies";

interface FetchMoviesResponse {
  page: number;
  results : Movie[];
}


const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    apiClient.get<FetchMoviesResponse>('popular')
    .then(res => setMovies(res.data.results))
    .catch(err => setError(err.message))
    
  }, []);

  return {movies, error, isLoading}
}

export default useMovies;