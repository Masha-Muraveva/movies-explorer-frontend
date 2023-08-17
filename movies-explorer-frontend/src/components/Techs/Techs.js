import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__heading">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__list-topic">HTML</li>
        <li className="techs__list-topic">CSS</li>
        <li className="techs__list-topic">JS</li>
        <li className="techs__list-topic">React</li>
        <li className="techs__list-topic">Git</li>
        <li className="techs__list-topic">Express.js</li>
        <li className="techs__list-topic">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;