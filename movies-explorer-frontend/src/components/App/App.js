import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <section className="page__content">
        <Routes>
          <Route path="/signup">
            <Header />
            <Register />
            <Footer />
          </Route>
          <Route path="/signin">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header />
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
            <Footer />
          </Route>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
        </Routes>
      </section>
    </div>
  );
}
export default App;