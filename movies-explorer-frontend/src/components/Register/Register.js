import React from "react";
import ActionForm from "../ActionForm/ActionForm";

function Register() {
  return (
    <ActionForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      className="action-form"
    >
      <label className="action-form__field">
        Имя
        <input
          name="name"
          className="action-form__input"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="name"
        />
        <span className="action-form__input-error">{}</span>
      </label>
      <label className="action-form__field">
        E-mail
        <input
          name="email"
          className="action-form__input"
          id="email-input"
          type="email"
          required
          placeholder="email"
        />
        <span className="action-form__input-error">{}</span>
      </label>
      <label className="action-form__field">
        Пароль
        <input
          name="password"
          className="action-form__input"
          id="password-input"
          type="password"
          placeholder="password"
          required
        />
        <span className="action-form__input-error">{}</span>
      </label>
    </ActionForm>
  );
}

export default Register;