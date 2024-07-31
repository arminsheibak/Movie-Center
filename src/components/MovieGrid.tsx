import { SimpleGrid } from "@chakra-ui/react"
import useMovies from "../hooks/useMovies"
import MovieCard from "./MovieCard"


const MovieGrid = () => {
  const {movies, error} = useMovies()


  
  return (
    <>
    {error && <p>{error}</p> }
    <SimpleGrid columns={{base: 1, md: 2, xl: 3}} padding={5} spacing={5} >
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </SimpleGrid>
    </>
  )
}

export default MovieGrid