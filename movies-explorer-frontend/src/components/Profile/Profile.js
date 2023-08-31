import React, { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Profile.css";
import Header from "../Header/Header";
import useForm from "../../hooks/useForm";
import { EMAIL_REGEX } from "../../constants/constants";

function Profile({ isLoading, signOut, onUpdateUser, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, handleChange, isValid, resetForm } = useForm();

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleFormSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  };

  const isIncorrectСonditions =
    !isValid || (
      currentUser.name === values.name && 
      currentUser.email === values.email
    );

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h3 className="profile__title">Привет, {currentUser.name}!</h3>
        <form 
          id="form" 
          className="profile__form" 
          noValidate
          onSubmit={handleFormSubmit}
        >
          <label className="profile__field">
            Имя
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              placeholder="Введите новое имя"
              onChange={handleChange}
              value={values.name || ""}
              autoComplete="off"
            />
            <span className="profile__input-error">{errors.name}</span>
          </label>

          <div className="profile__border"></div>
          <label className="profile__field">
            E-mail
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              placeholder="Введите новый email"
              onChange={handleChange}
              pattern={EMAIL_REGEX}
              value={values.email || ""}
              autoComplete="off"
            />
            <span className="profile__input-error">{errors.email}</span>
          </label>
          <button 
            type="submit"
            className="profile__edit-button"
            disabled={isIncorrectСonditions || isLoading}
          >
            Редактировать
          </button>
          <button type="button" onClick={signOut} className="profile__logout-button">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;