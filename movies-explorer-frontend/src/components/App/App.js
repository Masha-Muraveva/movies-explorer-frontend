import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';

import CurrentUserContext from "../../contexts/CurrentUserContext";

import Register from '../Register/Register';
import Login from '../Login/Login';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

import NotFound from '../NotFound/NotFound';

import Popup from "../Popup/Popup";
import PopupUpdate from "../PopupUpdate/PopupUpdate";

import {
  register,
  login,
  checkToken,
  getUserInfo,
  getMovies,
  updateUserInfo,
  saveMovieCard,
  deleteSavedMovieCard,
} from "../../utils/MainApi";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isPopupUpdateOpen, setPopupUpdateOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const path = location.pathname;

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies");
            setIsLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRegister({ name, email, password }) {
    register(name, email, password)
      .then(() => {
        setPopupOpen(true);
        setIsSuccess(true);
        handleLogin({ email, password });
      })
      .catch((err) => {
        setPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      });
  };

  function handleLogin({ email, password }) {
    setIsLoading(true);
    login(email, password)
      .then((res) => {
        if (res) {
          setPopupOpen(true);
          setIsSuccess(true);
          localStorage.setItem("jwt", res.token);
          navigate("./movies");
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.clear();
    navigate("/");
  };

  function handleUnauthorized(err) {
    if (err === "Error: 401") {
      handleSignOut();
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((err) => {
          console.log(err);
        });
      
      getMovies()
        .then((cardsData) => {
          console.log(cardsData);
          setSavedMovies(cardsData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, navigate]);

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    updateUserInfo(newUserInfo)
      .then((data) => {
        setPopupUpdateOpen(true);
        setIsUpdate(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        setPopupUpdateOpen(true);
        setIsUpdate(false);
        console.log(err);
        handleUnauthorized(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function handleCardLike(card) {
    saveMovieCard(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  };

  function handleCardDelete(card) {
    deleteSavedMovieCard(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  };

  function closeAllPopups() {
    setPopupOpen(false);
    setPopupUpdateOpen(false);
  };

  function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups();
    }
  };

  const isOpen = isPopupOpen || isPopupOpen;
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <section className="page__content">
          <Routes>
            <Route 
              path="/signup" 
              element={
                <Register onRegister={handleRegister} isLoading={isLoading} />
              } 
            />
            <Route 
              path="/signin" 
              element={
                <Login onLogin={handleLogin} isLoading={isLoading} />
              }
            />
            <Route 
              path="/movies" 
              element={
                <ProtectedRoute
                  path="/movies"
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleCardDelete}
                  component={Movies}
                  handleLikeFilm={handleCardLike} 
                />
              } 
            />
            
            <Route 
              path="/saved-movies"
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={handleCardDelete}
                  component={SavedMovies}
                />
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute
                  path="/profile"
                  signOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                  loggedIn={isLoggedIn}
                  component={Profile}
                  isLoading={isLoading}
                />
              } 
            />
            <Route path="/" element={
            <>
              <Header loggedIn={isLoggedIn} />
              <Main />
              <Footer />
            </>} />
            <Route 
              path="/*" 
              element={<NotFound />} 
            />
          </Routes>

          <Popup
            isOpen={isPopupOpen}
            onClose={closeAllPopups}
            isSuccess={isSuccess}
            onCloseOverlay={closeByOverlay}
          />

          <PopupUpdate
            isOpen={isPopupUpdateOpen}
            onClose={closeAllPopups}
            isUpdate={isUpdate}
            onCloseOverlay={closeByOverlay}
          />
        </section>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;