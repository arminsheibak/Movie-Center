import { create } from 'zustand';

export interface MovieQuery {
  genreId?: number ;
  sortOrder?: string;
}

interface movieQueryStore {
  movieQuery: MovieQuery
  setGenreId: (genreId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useMovieQueryStore = create<movieQueryStore>(set => ({
  movieQuery: {},
  setGenreId: (genreId) => set(store => ({ movieQuery: {...store.movieQuery, genreId: genreId} })),
  setSortOrder: (sortOrder) => set(store => ({ movieQuery: {...store.movieQuery, sortOrder: sortOrder} }))
}));

export default useMovieQueryStore;