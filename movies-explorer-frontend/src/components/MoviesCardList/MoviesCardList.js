import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import Preloader from "../Preloader/Preloader";
import SearchError from "../SearchError/SearchError";
import MoviesCard from '../MoviesCard/MoviesCard';

import {
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
    if (display > 1024) {
      setShownMovies(12);
    } else if (display > 750) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  };

  useEffect(() => {
    shownCountOfMovies();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", shownCountOfMovies);
    }, 500);
  });

  function showMoreMovies() {
    const display = window.innerWidth;
    if (display > 1024) {
      setShownMovies(shownMovies + MORE_FILMS_DESKTOP);
    } else if (display > 750) {
      setShownMovies(shownMovies + MORE_FILMS_TABLET);
    } else {
      setShownMovies(shownMovies + MORE_FILMS_MOBILE);
    }
  };

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