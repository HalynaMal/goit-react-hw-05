import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDJlYWRiZmU4YWY1YTExOGFmMjkzNGJlMGY2OGRmZiIsInN1YiI6IjY2MGJlMjY2YTg4NTg3MDE3Y2U2Zjc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJN5mfu1Ld40feDAbvGMXnIhz0cpQyybPbSBDXDUuBw",
  },
};

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    'trending/movie/day?language=en-US',
    options
  );
  return data;
};

export const requestMovie = async query => {
  const { data } = await axios.get('search/movie', {
    ...options,
    params: { query },
  });
  return data;
};

export const requestMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const requestMovieCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, options);
  return data;
};

export const requestMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data;
};