import { HStack, SimpleGrid } from "@chakra-ui/react"
import useMovies from "../hooks/useMovies"
import MovieCard from "./MovieCard"
import MovieCardSkeleton from "./MovieCardSkeleton"
import GenreSelector from "./GenreSelector"
import { useState } from "react"
import Genre from "../entities/genres"
import SortSelector from "./SortSelector"

export interface MovieQuery {
  genre: Genre | null;
  sortOrder: string;
}

const MovieGrid = () => {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  const {movies, error, isLoading} = useMovies(movieQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  


  
  return (
    <>
    {error && <p>{error}</p>}
    <HStack spacing={4} >
      <GenreSelector onSelectGenre={genre => setMovieQuery({...movieQuery, genre}) } />
      <SortSelector onSelectOrder={sortOrder => setMovieQuery({...movieQuery, sortOrder}) } />
    </HStack>
    <SimpleGrid columns={{base: 1, md: 2, xl: 3}} spacing={5} marginTop={5} >
      {isLoading && skeletons.map((s) => <MovieCardSkeleton key={s} />) }
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </SimpleGrid>
    </>
  )
}

export default MovieGrid