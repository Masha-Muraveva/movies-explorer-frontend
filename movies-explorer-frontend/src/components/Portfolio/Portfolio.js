import React from 'react';
import './Portfolio.css';
import followingIcon from "../../images/followingIcon.svg";

function Portfolio() {
    return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__paragraph">
          <a className="portfolio__link" href="https://github.com/Masha-Muraveva/how-to-learn" rel="noreferrer" target="_blank">
          <p className="portfolio__text">Статичный сайт</p>
          <img className="portfolio__icon" src={followingIcon} alt="Стрелка для перехода на Статичный сайт" />
          </a>
        </li>
        <li className="portfolio__paragraph">
          <a className="portfolio__link" href="https://github.com/Masha-Muraveva/russian-travel" rel="noreferrer" target="_blank">
          <p className="portfolio__text">Адаптивный сайт</p>
          <img className="portfolio__icon" src={followingIcon} alt="Стрелка для перехода на Адаптивный сайт" />
          </a>
        </li>
        <li className="portfolio__paragraph">
          <a className="portfolio__link" href="https://github.com/Masha-Muraveva/react-mesto-api-full-gha" rel="noreferrer" target="_blank">
          <p className="portfolio__text">Одностраничное приложение</p>
          <img className="portfolio__icon" src={followingIcon} alt="Стрелка для перехода на Одностраничное приложение" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;