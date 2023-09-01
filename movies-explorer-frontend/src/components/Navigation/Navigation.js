import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ handleClose }) {
  const setActive = ({ isActive }) =>
    isActive ? "navigation__link_active" : "navigation__link";

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
            className={setActive}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            onClick={handleClose}
            className={setActive}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            onClick={handleClose}
            className={setActive}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link 
          to="/profile" 
          className="navigation__account-button"
          onClick={handleClose}
        >
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default Navigation;