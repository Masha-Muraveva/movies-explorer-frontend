import React from "react";
import { Link } from "react-router-dom";
import "./ActionForm.css";
import logo from "../../images/logo.svg";

function ActionForm({
  children,
  title,
  buttonText,
  question,
  linkText,
  link,
  onSubmit,
  isDisabled,
  isLoading,
}) {
  return (
    <div className="action-form">
      <Link to="/" className="action-form__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h3 className="action-form__title">{title}</h3>
      <form className="action-form__form" id="form" onSubmit={onSubmit} noValidate>
        {children}
        <button
          type="submit"
          disabled={isDisabled ? true : false}
          className={
            isDisabled || isLoading
              ? "action-form__save-button action-form__save-button_inactive"
              : "action-form__save-button"
          }
        >
          {buttonText}
        </button>
      </form>
      <p className="action-form__text">
        {question}
        <Link to={link} className="action-form__link">
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default ActionForm;