import { HStack, SimpleGrid, Spinner } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import GenreSelector from "./GenreSelector";
import React from "react";
import SortSelector from "./SortSelector";
import InfiniteScroll from "react-infinite-scroll-component";
import useSearchTextStore from "../searchTextStore";


const MovieGrid = () => {
  const {
    data: movies,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const searchText = useSearchTextStore(s => s.searchText)

  const fetchedMoviesCount =
    movies?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {!searchText && (
        <HStack spacing={4}>
          <GenreSelector />
          <SortSelector />
        </HStack>
      )}
      {error && <p>{error.message}</p>}
      <InfiniteScroll
        dataLength={fetchedMoviesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={5}
          marginTop={5}
        >
          {isLoading && skeletons.map((s) => <MovieCardSkeleton key={s} />)}
          {movies?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default MovieGrid;
