import React from "react";
import "./Popup.css";

function Popup(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isSuccess ? (
          <>
            <p className="popup__title">
              Добро пожаловать на сайт!
            </p>
          </>
        ) : (
          <>
            <p className="popup__title">
              Что-то не так. Попробуйте ещё раз!
            </p>
          </>
        )}

        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default Popup;