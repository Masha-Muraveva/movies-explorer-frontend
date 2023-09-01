import React from "react";
import ActionForm from "../ActionForm/ActionForm";

import useForm from "../../hooks/useForm";
import { EMAIL_REGEX } from "../../constants/constants";

function Login({ onLogin, isLoading }) {
  const { values, errors, handleChange, isValid } = useForm();

  function handleFormSubmit(event) {
    event.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <ActionForm
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
      className="action-form"
      onSubmit={handleFormSubmit}
      isDisabled={!isValid}
      isLoading={isLoading}
    >
      <label className="action-form__field">
        E-mail

        <input
          name="email"
          className="action-form__input"
          id="email-input"
          type="email"
          placeholder="Введите email"
          required
          onChange={handleChange}
          pattern={EMAIL_REGEX}
          value={values.email || ""}
          autoComplete="off"
        />

        <span className="action-form__input-error">{errors.email}</span>
      </label>

      <label className="action-form__field">
        Пароль

        <input
          name="password"
          className="action-form__input"
          id="password-input"
          type="password"
          placeholder="Введите пароль"
          required
          onChange={handleChange}
          value={values.password || ""}
          autoComplete="off"
        />

        <span className="action-form__input-error">{errors.password}</span>
      </label>
    </ActionForm>
  );
}

export default Login;