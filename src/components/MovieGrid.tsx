import { SimpleGrid } from "@chakra-ui/react"
import useMovies from "../hooks/useMovies"
import MovieCard from "./MovieCard"
import MovieCardSkeleton from "./MovieCardSkeleton"
import GenreSelector from "./GenreSelector"
import { useState } from "react"
import Genre from "../entities/genres"


const MovieGrid = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null);
  const {movies, error, isLoading} = useMovies(selectedGenre)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  
  return (
    <>
    {error && <p>{error}</p>}
    <GenreSelector onSelectGenre={genre => setSelectedGenre(genre) } />
    <SimpleGrid columns={{base: 1, md: 2, xl: 3}} spacing={5} marginTop={5} >
      {isLoading && skeletons.map((s) => <MovieCardSkeleton key={s} />) }
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </SimpleGrid>
    </>
  )
}

export default MovieGrid