import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

interface Movie {
  id: number;
  title: string;

}

interface FetchMoviesResponse {
  page: number;
  results : Movie[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    apiClient.get<FetchMoviesResponse>('popular')
    .then(res => setMovies(res.data.results))
    .catch(err => setError(err.message))
  })
  return (
    <>
    {error && <p>{error}</p> }
    <ul>
      {movies.map(movie => <li key={movie.id} >{movie.title}</li>)}
    </ul>
    </>
  )
}

export default MovieGrid