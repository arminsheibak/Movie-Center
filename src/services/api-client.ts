import axios from "axios";

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: { apikey: '17824a0d4909de73fc393c63731db4ee'},
  headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzgyNGEwZDQ5MDlkZTczZmMzOTNjNjM3MzFkYjRlZSIsIm5iZiI6MTcyMjQwOTc2MS41NjM3NTQsInN1YiI6IjY2YTkwMGExYjI2OGEyYmRiNDVjNDBhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LtuwfQQ5wsGwiO4U9261Pz22tUHSpxlOMNFA0NAUAfk'}
});