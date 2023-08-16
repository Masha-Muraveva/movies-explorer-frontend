import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
      <nav className="nav-tab">
        <a href="#aboutProject" className="nav-tab__link">О проекте</a>
        <a href="#techs" className="nav-tab__link">Технологии</a>
        <a href="#aboutMe" className="nav-tab__link">Студентка</a>
      </nav>
  );
}

export default NavTab;