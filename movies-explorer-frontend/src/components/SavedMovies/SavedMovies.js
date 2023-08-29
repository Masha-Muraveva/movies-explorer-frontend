import React, { useState, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import { filterMovies, filterDuration } from "../../utils/filter";

function SavedMovies({ loggedIn, savedMovies, handleDeleteCard }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchRequest, setSearchRequest] = useState("");

  console.log(savedMovies);

  function onSearchMoviesFilms(request) {
    setSearchRequest(request);
  };

  function handleShortFilmToggle() {
    setIsShortFilm(!isShortFilm);
  };

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, searchRequest);
    setFilteredMovies(
      isShortFilm ? filterDuration(moviesCardList) : moviesCardList
    );
  }, [savedMovies, isShortFilm, searchRequest]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

    return (
      <section className="movies">
        <Header loggedIn={loggedIn}/>
        <SearchForm 
          onSearchMoviesFilms={onSearchMoviesFilms}
          onFilterMovies={handleShortFilmToggle}
        />
        <MoviesCardList 
        isNotFound={isNotFound}
        isSavedMovieCard={true}
        cards={filteredMovies}
        savedMovies={savedMovies}
        handleDeleteCard={handleDeleteCard}
        />
        <Footer />
      </section>
    );
}
  
export default SavedMovies;