import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";
import menu from "../../images/burger-menu.svg";

import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  const setActive = ({ isActive }) =>
    isActive ? "header__button_active" : "header__button";

  return (
    <>
      {!loggedIn ? (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип сайта" />
          </Link>
          <nav className="header__buttons-wrapper">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button_accent">
              Войти
            </Link>
          </nav>
        </header>
      ) : (
        <header className="header" id="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" />
          </Link>
          <ul className="header__buttons-wrapper-auth">
            <li className="header__buttons-wrapper-item">
              <NavLink
                to="/movies"
                className={setActive}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="header__buttons-wrapper-item">
              <NavLink
                to="/saved-movies"
                className={setActive}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link to="/profile" className="header__account-button">
              Аккаунт
          </Link>
          <button
            className="header__menu-button"
            onClick={handleOpen}
            type="button"
          >
            <img src={menu} alt="меню" />
          </button>
          {isClicked ? <Navigation handleClose={handleClose} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;