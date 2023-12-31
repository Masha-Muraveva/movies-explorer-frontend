import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" id="form" >
        <input
          name="selected-film"
          className="search__input"
          id="search-input"
          type="text"
          placeholder="Фильм"
          required
        >
        </input>
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;