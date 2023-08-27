import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearchMoviesFilms, onFilterMovies, isShortFilm }) {
  const [isRequestError, setIsRequestError] = useState(false);
  const [request, setRequest] = useState("");
  const location = useLocation();

  function handleChangeInputRequest(event) {
    setRequest(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (request.trim().length === 0) {
      setIsRequestError(true);
    } else {
      setIsRequestError(false);
      onSearchMoviesFilms(request);
    }
  }

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("movieSearch")
    ) {
      const localRequest = localStorage.getItem("movieSearch");
      setRequest(localRequest);
    }
  }, [location]);

  return (
    <section className="search">
      <form className="search__form" id="form" onSubmit={handleFormSubmit}>
        <input
          name="selected-film"
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
          required
          onChange={handleChangeInputRequest}
          value={request || ""}
        >
        </input>
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox 
        onFilterMovies={onFilterMovies}
        isShortFilm={isShortFilm}
      />

      {isRequestError && (
        <span className="search__form-error">Нужно ввести ключевое слово</span>
      )}
    </section>
  );
}

export default SearchForm;