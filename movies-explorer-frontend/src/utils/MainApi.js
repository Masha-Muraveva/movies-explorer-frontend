import { BASE_SERVER_URL } from '../constants/constants';

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (name, email, password) => {
  return fetch(`${BASE_SERVER_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  })
  .then((res) => checkResponse(res));
};

export const login = (email, password) => {
  return fetch(`${BASE_SERVER_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  .then((res) => checkResponse(res));
};

export const checkToken = (token) => {
  return fetch(`${BASE_SERVER_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
  .then((res) => checkResponse(res));
};

export const getUserInfo = () => {
  return fetch(`${BASE_SERVER_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
  .then((res) => checkResponse(res));
};

export const getMovies = () => {
  return fetch(`${BASE_SERVER_URL}/movies`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
  .then((res) => checkResponse(res));
};

export const updateUserInfo = (data) => {
  return fetch(`${BASE_SERVER_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  })
  .then((res) => checkResponse(res));
};

export const saveMovieCard = (data) => {
  return fetch(`${BASE_SERVER_URL}/movies`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: "https://api.nomoreparties.co" + data.image.url,
      trailerLink: data.trailerLink,
      thumbnail:
        "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  })
  .then((res) => checkResponse(res));
};

export const deleteSavedMovieCard = (movieId) => {
  return fetch(`${BASE_SERVER_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
  .then((res) => checkResponse(res));
};