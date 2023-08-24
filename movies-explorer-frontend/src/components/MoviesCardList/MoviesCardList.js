import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import cardPhoto from '../../images/cardPhoto.jpg';
import cardPhoto2 from '../../images/cardPhoto2.jpg';
import cardPhoto3 from '../../images/cardPhoto3.jpg';
import cardPhoto4 from '../../images/cardPhoto4.jpg';
import cardPhoto5 from '../../images/cardPhoto5.jpg';
import cardPhoto6 from '../../images/cardPhoto6.jpg';
import cardPhoto7 from '../../images/cardPhoto7.jpg';
import cardPhoto8 from '../../images/cardPhoto8.jpg';


function MoviesCardList() {
  const location = useLocation();
  const isMoviesLocation = location.pathname === '/movies';

  return (
    <section className="cards">
      { isMoviesLocation &&
        <div className="cards__wrapper">
          <ul className="cards__list">
            <MoviesCard img={cardPhoto} isCardSaved={true} />
            <MoviesCard img={cardPhoto2} isCardSaved={false} />
            <MoviesCard img={cardPhoto3} isCardSaved={false} />
            <MoviesCard img={cardPhoto4} isCardSaved={true} />
            <MoviesCard img={cardPhoto5} isCardSaved={true} />
            <MoviesCard img={cardPhoto6} isCardSaved={false} />
            <MoviesCard img={cardPhoto7} isCardSaved={true} />
            <MoviesCard img={cardPhoto8} isCardSaved={false} />
          </ul>
          <div className="cards__button-wrapper">
            <button className="cards__button-more">Ещё</button>
          </div>
        </div>
      }
      { !isMoviesLocation &&
        <div>
          <ul className="cards__list">
          <MoviesCard img={cardPhoto} />
          <MoviesCard img={cardPhoto4} />
          <MoviesCard img={cardPhoto5} />
          <MoviesCard img={cardPhoto7} />
          </ul>
          </div>
      }
    </section>
  );
}

export default MoviesCardList;