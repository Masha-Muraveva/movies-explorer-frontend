export const FILM_SERVER_URL = "https://api.nomoreparties.co/beatfilm-movies";
export const BASE_SERVER_URL = process.env.NODE_ENV === "production"
? "diploma.masha-muraveva.nomoreparties.co"
: "http://localhost:3000";

export const SHORTS_DURATION = 40;

export const EMAIL_REGEX = "[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}";

export const MORE_FILMS_DESKTOP = 6; 
export const MORE_FILMS_TABLET = 4; 
export const MORE_FILMS_MOBILE= 2;