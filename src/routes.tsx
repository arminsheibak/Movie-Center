import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import DiscoverMovies from "./pages/DiscoverMovies";
import MovieDetailPage from "./pages/MovieDetailPage";

const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {index: true, element: <HomePage />},
    {path: 'movies', element: <DiscoverMovies />},
    {path: 'movies/:id', element: <MovieDetailPage />}
  ]}
])

export default router;