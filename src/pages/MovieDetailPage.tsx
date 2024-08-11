import { useParams } from "react-router-dom"
import useMovie from "../hooks/useMovie"

const MovieDetailPage = () => {
  const {movieId} = useParams()
  const {data: movie, error} = useMovie(movieId!)

  if (error) {
    throw new Error()
  }
  return (
    <div>{movie?.title}</div>
  )
}

export default MovieDetailPage;