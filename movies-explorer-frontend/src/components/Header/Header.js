import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";
import menu from "../../images/burger-menu.svg";

import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation();

  const showAuthorizedHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  const showUnauthorizedHeader = () => {
    const { pathname } = location;
    return pathname === "/";
  };

  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {showUnauthorizedHeader() && (
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
      )} 
      {showAuthorizedHeader() && (
        <header className="header" id="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>

        <nav className="header__buttons-wrapper">
          <ul className="header__buttons-wrapper-auth">
            <li className="header__buttons-wrapper-item">
              <NavLink
                to="/movies"
                className="header__button header__button_type_auth"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="header__buttons-wrapper-item">
              <NavLink
                to="/saved-movies"
                className="header__button header__button_type_auth"
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
        </nav>
        {isClicked ? <Navigation handleClose={handleClose} /> : ""}
      </header>
      )}
    </>
  );
}

export default Header;