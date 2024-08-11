import Genre from "./genres";

interface MovieDetail {
  backdrop_path: string;
  genres: Genre[];
  imdb_id: string;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
}

export default MovieDetail;