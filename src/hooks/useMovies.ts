import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Movie from "../entities/movies";
import { MovieQuery } from "../components/MovieGrid";

interface FetchMoviesResponse {
  page: number;
  results : Movie[];
}


const useMovies = (movieQuery: MovieQuery, searchText: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (searchText) {
      apiClient.get<FetchMoviesResponse>('search/movie', {params: {query: searchText ,include_adult: true }})
      .then(res => {setMovies(res.data.results); setLoading(false)})
      .catch(err => {setError(err.message); setLoading(false)})
    }

    else {apiClient.get<FetchMoviesResponse>('discover/movie', { params: {with_genres: movieQuery.genre?.id, sort_by: movieQuery.sortOrder, include_adult: true} })
    .then(res =>{ setMovies(res.data.results); setLoading(false)})
    .catch(err => {setError(err.message); setLoading(false) }) }
    
  }, [movieQuery, searchText]);

  return {movies, error, isLoading}
}

export default useMovies;