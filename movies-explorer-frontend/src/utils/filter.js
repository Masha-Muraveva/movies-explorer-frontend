import { SHORTS_DURATION } from '../constants/constants';

export function durationConverter(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч${minutes}м`;
}

export function filterDuration(movies) {
  return movies.filter((movie) => movie.duration < SHORTS_DURATION);
}

export function filterMovies(movies, request) {
  const moviesRequest = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userRequest = request.toLowerCase().trim();
    return (
      movieRu.indexOf(userRequest) !== -1 || movieEn.indexOf(userRequest) !== -1
    );
  });
  return moviesRequest;
}