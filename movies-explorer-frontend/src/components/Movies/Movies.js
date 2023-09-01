import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from "../Header/Header";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer";

import { filterMovies, filterDuration } from "../../utils/filter";
import { getMovies } from "../../utils/MoviesApi";

function Movies({ loggedIn, handleLikeCard, handleDeleteCard, savedMovies }) {

  const [isLoading, setIsLoading] = useState(false);

  const [defaultMoviesCards, setDefaultMoviesCards] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleUpdateFilteredMovies(movies, request, short) {
    const moviesCardList = filterMovies(movies, request, short);
    setDefaultMoviesCards(moviesCardList);
    setFilteredMovies(short ? filterDuration(moviesCardList) : moviesCardList);
    localStorage.setItem("movies", JSON.stringify(moviesCardList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  };

  function handleShortFilmToggle() {
    setIsShortFilm(!isShortFilm);
    if (!isShortFilm) {
      if (filterDuration(defaultMoviesCards).length === 0) {
        setFilteredMovies(filterDuration(defaultMoviesCards));
      } else {
        setFilteredMovies(filterDuration(defaultMoviesCards));
      }
    } else {
      setFilteredMovies(defaultMoviesCards);
    }
    localStorage.setItem("shortMovies", !isShortFilm);
  };

  function onSearchMoviesFilms(request) {
    localStorage.setItem("movieSearch", request);
    localStorage.setItem("shortMovies", isShortFilm);

    getMoviesData(request);
  }

  function getMoviesData(request) {
    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleUpdateFilteredMovies(movies, request, isShortFilm);
    } else {
      setIsLoading(true);
      getMovies()
        .then((cardsData) => {
          handleUpdateFilteredMovies(cardsData, request, isShortFilm);
          setIsRequestError(false);
        })
        .catch((err) => {
          setIsRequestError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setIsShortFilm(true);
    } else {
      setIsShortFilm(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setDefaultMoviesCards(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

    return (
      <section className="movies">
        <Header loggedIn={loggedIn} />
        <SearchForm 
          onSearchMoviesFilms={onSearchMoviesFilms}
          onFilterMovies={handleShortFilmToggle}
          isShortFilm={isShortFilm}
        />

        <MoviesCardList 
          cards={filteredMovies}
          isLoading={isLoading}
          isSavedFilms={false}
          isReqError={isRequestError}
          isNotFound={isNotFound}
          savedMovies={savedMovies}
          handleLikeCard={handleLikeCard}
          handleDeleteCard={handleDeleteCard}
          />
          
        <Footer />
      </section>
    );
}
  
export default Movies;