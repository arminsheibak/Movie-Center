import { SimpleGrid, Spinner } from "@chakra-ui/react"
import useMovies from "../hooks/useMovies"
import MovieCard from "./MovieCard"
import MovieCardSkeleton from "./MovieCardSkeleton"


const MovieGrid = () => {
  const {movies, error, isLoading} = useMovies()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  
  return (
    <>
    {error && <p>{error}</p>}
    <SimpleGrid columns={{base: 1, md: 2, xl: 3}} padding={5} spacing={5} >
      {isLoading && skeletons.map(() => <MovieCardSkeleton />) }
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </SimpleGrid>
    </>
  )
}

export default MovieGrid