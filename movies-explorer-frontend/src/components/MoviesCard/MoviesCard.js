import React from "react";
import "./MoviesCard.css";

import { durationConverter } from "../../utils/filter";

function MoviesCard({
    card,
    isSavedMovieCard,
    handleLikeCard,
    handleDeleteCard,
    saved,
    savedMovies,
  }
  ) {
    function onCardClick() {
      if (saved) {
        handleDeleteCard(savedMovies.filter((m) => m.movieId === card.id)[0]);
      } else {
        handleLikeCard(card);
      }
    };

    function onDelete() {
      handleDeleteCard(card);
    };

    const cardLikeButtonClassName = `${
      saved ? "card__button card__button_type_saved" : "card__button_type_add-saving"
    }`;


  return (
    <li className="card" key={card.id}>
      {isSavedMovieCard ? (
        <button type="button" onClick={onDelete} className="card__button card__button_type_delete-saving">
        </button>
      ) : (
        <button type="button" onClick={onCardClick} className={cardLikeButtonClassName}>
        </button>
      )
      }
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="card__image" src={isSavedMovieCard ? card.image : `https://api.nomoreparties.co/${card.image.url}`} alt={card.nameRU} />
      </a>
      <div className="card__info-wrapper">
        <h2 className="card__name">{card.nameRU}</h2>
        <span className="card__duration">{durationConverter(card.duration)}</span>
      </div>
    </li>
  );
}

export default MoviesCard;