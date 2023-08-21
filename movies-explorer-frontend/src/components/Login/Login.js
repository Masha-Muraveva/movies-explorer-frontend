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
    >
      <label className="form__field">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
        />
        <span className="form__input-error">{}</span>
      </label>
      <label className="form__field">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
        />
        <span className="form__input-error">{}</span>
      </label>
    </ActionForm>
  );
}

export default Login;