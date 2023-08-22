import React from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {

  const location = useLocation();
  const isMovieSavedLocation = location.pathname === '/saved-movies';

  const [isCardSaved, setCardSaved ] = React.useState(false);

  function handleSaveCard() {
    isCardSaved ? setCardSaved(false) : setCardSaved(true);
  }

  function handleDeleteCard() {
    setCardSaved(false);
  }

  return (
    <li className="card">
      { isMovieSavedLocation &&
        <button type="button" onClick={handleDeleteCard} className="card__button card__button_type_delete-saving">
        </button>
      }
      { !isMovieSavedLocation && 
        <button type="button" onClick={handleSaveCard} className={`card__button ${props.isCardSaved ? "card__button_type_saved" : "card__button_type_add-saving"}`}>
        </button>
      }
      <img className="card__image" src={props.img} alt={`Обложка фильма: ${props.title}`} />
      <div className="card__info-wrapper">
        <h2 className="card__name">33 слова о дизайне</h2>
        <span className="card__duration">1ч 17м</span>
      </div>
    </li>
  );
}

export default MoviesCard;