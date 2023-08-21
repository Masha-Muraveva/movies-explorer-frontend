import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ handleClose }) {
  return (
    <div className="navigation">
      <div className="navigation__overlay-wrapper"></div>
      <div className="navigation__menu">
        <button
          className="navigation__close-button"
          onClick={handleClose}
          type="button"
        ></button>
        <nav className="navigation__links">
          <NavLink
            exact
            to="/"
            className="navigation__link"
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="navigation__link"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__link"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="navigation__account-button">
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Navigation;