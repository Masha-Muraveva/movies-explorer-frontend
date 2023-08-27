import React from "react";
import ActionForm from "../ActionForm/ActionForm";
import useForm from "../../hooks/useForm";
import { EMAIL_REGEX } from "../../constants/constants";

function Register({ onRegister, isLoading }) {
  const { values, errors, handleChange, isValid } = useForm();

  function handleFormSubmit(event) {
    event.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <ActionForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      className="action-form"
      onSubmit={handleFormSubmit}
      isDisabled={!isValid}
      isLoading={isLoading}
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
          onChange={handleChange}
          value={values.name || ""}
        />
        <span className="action-form__input-error">{errors.name}</span>
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
          onChange={handleChange}
          pattern={EMAIL_REGEX}
          value={values.email || ""}
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
          placeholder="password"
          required
          minLength="4"
          maxLength="15"
          onChange={handleChange}
          value={values.password || ""}
        />
        <span className="action-form__input-error">{errors.password}</span>
      </label>
    </ActionForm>
  );
}

export default Register;