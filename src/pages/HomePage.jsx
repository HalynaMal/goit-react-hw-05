import { useState, useEffect } from 'react';
import { requestTrendingMovies } from '../services/api.js';
import MovieList from '../components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const data = await requestTrendingMovies();

        if (data.results.length > 0) setTrendMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={trendMovies} from={location} defLocation="/" />
    </main>
  );
}

export default HomePage;
