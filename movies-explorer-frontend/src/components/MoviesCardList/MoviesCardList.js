import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import Preloader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import MoviesCard from '../MoviesCard/MoviesCard';

import {
  COUNT_OF_FILMS_DESKTOP, 
  COUNT_OF_FILMS_TABLET,
  COUNT_OF_FILMS_MOBILE,
  MORE_FILMS_DESKTOP,
  MORE_FILMS_TABLET,
  MORE_FILMS_MOBILE,
} from "../../constants/constants";

function MoviesCardList({
  cards,
  isLoading,
  isSavedMovieCard,
  savedMovies,
  isRequestError,
  isNotFound,
  handleLikeCard,
  handleDeleteCard,
}) {
  const { pathname } = useLocation();
  const [shownMovies, setShownMovies] = useState(0);

  function shownCountOfMovies() {
    const display = window.innerWidth;
    let initialCount = 0;

    if (display > 1024) {
      initialCount = COUNT_OF_FILMS_DESKTOP;
    } else if (display > 620) {
      initialCount = COUNT_OF_FILMS_TABLET;
    } else {
      initialCount = COUNT_OF_FILMS_MOBILE;
    }

    setShownMovies(initialCount);
  };

  function showMoreMovies() {
    const display = window.innerWidth;
    let additionalCount = 0;
    
    if (display > 1024) {
      additionalCount = MORE_FILMS_DESKTOP;
    } else if (display > 620) {
      additionalCount = MORE_FILMS_TABLET;
    } else {
      additionalCount = MORE_FILMS_MOBILE;
    }
    
    setShownMovies(shownMovies + additionalCount);
  };

  useEffect(() => {
    shownCountOfMovies();
  }, []);

  useEffect(() => {
    shownCountOfMovies();
  }, [cards]);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", shownCountOfMovies);
    }, 500);
  });

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  };



  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && (
        <SearchError errorText={"По вашему запросу ничего не нашлось"} />
      )}
      {isRequestError && !isLoading && (
      <SearchError
        errorText={
          "Ой, ошибочка вышла :) Попробуйте ещё разок!"
        }
      />
      )}
      {!isLoading && !isRequestError && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="cards__list">
              {cards.map((card) => (
                <MoviesCard 
                  key={isSavedMovieCard ? card._id : card.id}
                  saved={getSavedMovieCard(savedMovies, card)}
                  cards={cards}
                  card={card}
                  isSavedMovieCard={isSavedMovieCard}
                  handleLikeCard={handleLikeCard}
                  handleDeleteCard={handleDeleteCard}
                  savedMovies={savedMovies} 
                />
              ))}
              </ul>
              <div className="cards__button-wrapper"></div>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                  key={isSavedMovieCard ? card._id : card.id}
                  saved={getSavedMovieCard(savedMovies, card)}
                  cards={cards}
                  card={card}
                  isSavedMovieCard={isSavedMovieCard}
                  handleLikeCard={handleLikeCard}
                  handleDeleteCard={handleDeleteCard}
                  savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-wrapper">
                {cards.length > shownMovies ? (
                  <button className="cards__button-more" onClick={showMoreMovies}>
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;