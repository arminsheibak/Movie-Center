import { create } from 'zustand';

interface MovieQuery {
  genreId?: number ;
  sortOrder?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery
  setGenreId: (genreId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>(set => ({
  movieQuery: {},
  setGenreId: (genreId) => set(store => ({ movieQuery: {...store.movieQuery, genreId: genreId} })),
  setSortOrder: (sortOrder) => set(store => ({ movieQuery: {...store.movieQuery, sortOrder: sortOrder} }))
}));

export default useMovieQueryStore;