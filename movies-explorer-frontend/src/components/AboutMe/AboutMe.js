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
            Я тот самый человечек, который пришел на курс, чтобы стать разработчиком, 
            но на сегодняшний день перегорел и не имеет желания работать по данной специальности.
            Курс прохожу (уже несколько месяцев) и пишу диплом сейчас просто, 
            чтобы зря не потерять этот год — всё-таки никогда не знаешь, когда тебе пригодится диплом о переквалификации (ну, и навыки безусловно)!

            Так что не судите строго, а лучше думайте, какая я молодец — занимаюсь трудным делом, но просто для души &#128522;
          </p>
          <a className="about-me__link" href="https://github.com/Masha-Muraveva" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="about-me__photo" alt="Фотография автора данного проекта" src={author}></img>
      </div>
    </section>
  );
}

export default AboutMe;