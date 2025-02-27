import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import DiscoverMovies from "./pages/DiscoverMovies";
import MovieDetailPage from "./pages/MovieDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {index: true, element: <DiscoverMovies />},
    {path: 'movies/:movieId', element: <MovieDetailPage />}
  ], errorElement: <ErrorPage />}
])

export default router;