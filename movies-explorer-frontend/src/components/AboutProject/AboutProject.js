import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="aboutProject">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__wrapper">
        <div className="about-project__info">
          <h3 className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__scedule">
          <h3 className="about-project__scedule-time about-project__scedule-time_accent">
            1 неделя
          </h3>
          <h3 className="about-project__scedule-time">4 недели</h3>
          <p className="about-project__scedule-task">Back-end</p>
          <p className="about-project__scedule-task">Front-end</p>
        </div>
    </section>
  );
}

export default AboutProject;