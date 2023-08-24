import React from "react";
import ActionForm from "../ActionForm/ActionForm";

function Login() {
  return (
    <ActionForm
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
      className="action-form"
    >
      <label className="action-form__field">
        E-mail
        <input
          name="email"
          className="action-form__input"
          id="email-input"
          type="email"
          placeholder="email"
          required
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

export default Login;