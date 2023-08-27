import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onFilterMovies, isShortFilm }) {
  return (
    <div className="filter">
      <input 
        className="filter__checkbox" 
        type="checkbox"
        onChange={onFilterMovies}
        checked={isShortFilm}
      >
      </input>
      <span className="filter__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;