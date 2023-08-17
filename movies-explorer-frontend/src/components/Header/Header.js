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
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип сайта" />
          </Link>
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
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="header__films-wrapper">
            <NavLink to="/movies" className="header__button" activeClassName="header__button_active">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="header__button" activeClassName="header__button_active">
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-wrapper">
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