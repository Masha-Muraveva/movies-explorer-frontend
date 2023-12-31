import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h3 className="profile__title">Привет, Маша!</h3>
        <form id="form" className="profile__form" noValidate>
          <label className="profile__field">
            Имя
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="name"
            />
            <span className="profile__input-error"></span>
          </label>

          <div className="profile__border"></div>
          <label className="profile__field">
            E-mail
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              placeholder="email"
            />
            <span className="profile__input-error"></span>
          </label>
          <button type="button" className="profile__edit-button">
            Редактировать
          </button>
          <Link to="/" className="profile__logout-button">
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;