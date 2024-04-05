import axios from "axios";
const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDJlYWRiZmU4YWY1YTExOGFmMjkzNGJlMGY2OGRmZiIsInN1YiI6IjY2MGJlMjY2YTg4NTg3MDE3Y2U2Zjc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJN5mfu1Ld40feDAbvGMXnIhz0cpQyybPbSBDXDUuBw",
  },
};
export const getTrendingMovies = async () => {
  const { data } = await axios.get(url, options);
  return data;
};

export const searchMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
    options
  );
  return data;
};

export const searchMoviesDetailsById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US'`,
    options
  );
  return data;
};

export const searchMoviesCreditsById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return data;
};

export const searchMoviesRevById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};