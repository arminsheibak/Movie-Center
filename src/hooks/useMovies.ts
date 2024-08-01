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
    setLoading(true);
    apiClient.get<FetchMoviesResponse>('discover/movie')
    .then(res =>{ setMovies(res.data.results); setLoading(false)})
    .catch(err => {setError(err.message); setLoading(false) })
    
  }, []);

  return {movies, error, isLoading}
}

export default useMovies;