import axios from 'axios';

axios.defaults.params = { api_key: '079f315d1c0a92bbce195275b13a313a' };

const getTrendFilmRequest = axios.create({
  method: 'get',
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
});

const searchMoviesRequest = axios.create({
  method: 'get',
  baseURL: 'https://api.themoviedb.org/3/search/movie',
  include_adult: 'true',
});

const getMovieDetailsRequest = axios.create({
  method: 'get',
  baseURL: 'https://api.themoviedb.org/3/movie',
});

const getActorPhotoRequest = axios.create({
  method: 'get',
  baseURL: 'https://api.themoviedb.org/3/person',
});

export const getTrend = () => {
  return getTrendFilmRequest().then(r => r.data.results);
};

export const searchMovies = query => {
  return searchMoviesRequest({
    params: {
      query,
    },
  }).then(r => r.data.results);
};

export const getMovieDetails = id => {
  return getMovieDetailsRequest.get(`/${id}`).then(r => r.data);
};

export const getMovieCredits = id => {
  return getMovieDetailsRequest.get(`/${id}/credits`).then(r => r.data.cast);
};

export const getMovieReviews = id => {
  return getMovieDetailsRequest.get(`/${id}/reviews`).then(r => r.data.results);
};

export const getActorPhoto = async id => {
  return (await getActorPhotoRequest.get(`/${id}/images`)).data.profiles[0]
    .file_path;
};
