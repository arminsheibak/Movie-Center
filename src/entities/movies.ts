interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  adult: boolean;
  vote_average: number;
}

export default Movie