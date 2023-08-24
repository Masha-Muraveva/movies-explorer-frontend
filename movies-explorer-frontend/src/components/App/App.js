import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function App() {
  const location = useLocation()

  const showHeader = () => {
    const { pathname } = location
    return pathname === "/"
  }
    const showFooter = () => {
    const { pathname } = location
    return pathname === "/"
  }
  
  return (
    <div className="page">
      <section className="page__content">
        {showHeader() && <Header />}
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Main />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {showFooter() && <Footer />}
      </section>
    </div>
  );
}
export default App;