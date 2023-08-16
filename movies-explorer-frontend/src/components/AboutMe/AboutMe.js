import React from 'react';
import './AboutMe.css';
import author from '../../images/author.jpg'

function AboutMe() {
  return (
    <section className="about-me" id="aboutMe">
      <h2 className="about-me__title">Студентка</h2>
      <div className="about-me__wrapper">
        <div className="about-me__info">
          <h3 className="about-me__name">Маша</h3>
          <span className="about-me__general"> Хороший человек с навыками frontend'а, 25 лет</span>
          <p className="about-me__description">
            Тут текст о том, кто я такая, какая я классная и здоровская. Но писать я его не хочу, потому что просто хочу добить этот курс, получить диплом
            и вряд ли когда-то в будущем заиметь желание снова вернуться во фронтенд!
          </p>
          <a className="about-me__link" href="https://github.com/Masha-Muraveva" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="about-me__photo" alt="Фотография автора данного проекта" src={author}></img>
      </div>
    </section>
  );
}

export default AboutMe;