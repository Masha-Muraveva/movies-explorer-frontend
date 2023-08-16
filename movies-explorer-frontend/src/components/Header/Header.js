import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";
import menu from "../../images/burger-menu.svg";

function Header({ loggedIn }) {
  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <img src={logo} alt="Логотип сайта" className="header__logo" />
          <div className="header__buttons-wrapper">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button_accent">
              Войти
            </Link>
          </div>
        </header>
      ) : (
        <header className="header" id="header">
          <img src={logo} alt="Логотип" className="header__logo" />
          <div className="header__button-container_films">
            <NavLink to="/movies" className="header__button" activeClassName="header__button_active">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="header__button" activeClassName="header__button_active">
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-container">
            <Link to="/profile" className="header__account-button">
              Аккаунт
            </Link>
            <button className="header__menu-button">
              <img src={menu} alt="Меню" />
            </button>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;