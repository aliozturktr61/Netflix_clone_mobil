import {requests} from '../utils/request';

export const getTrendingMovies = () => requests.get('/trending/all/day');

export const getUpcomingMovies = () => requests.get('/movie/upcoming');

export const getTopRatedMovies = () => requests.get('/movie/top_rated');

export const getMovieDetails = id => requests.get(`/movie/${id}`);

export const getMovieCredits = id => requests.get(`/movie/${id}/credits`);

export const getSimilarMovies = id => requests.get(`/movie/${id}/similar`);

export const getPersonDetails = id => requests.get(`/person/${id}`);

export const getMovieCreditsPerson = id =>
  requests.get(`/person/${id}/movie_credits`);

export const getSearchMovies = query =>
  requests.get(`/search/movie?query=${query}`);