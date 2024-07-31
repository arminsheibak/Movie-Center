import genres from "../data/genres"
import Genre from "../entities/genres"
import Movie from "../entities/movies"

const useGenres = (movie: Movie):Genre[] =>{
  return genres.filter(g => movie.genre_ids.includes(g.id))

}

export default useGenres