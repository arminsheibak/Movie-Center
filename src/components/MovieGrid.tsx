import useMovies from "../hooks/useMovies"


const MovieGrid = () => {
  const {movies, error} = useMovies()
  
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