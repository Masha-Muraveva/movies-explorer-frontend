import React from "react";
import "./Popup.css";
import accept from "../../images/Accept.png";
import wrong from "../../images/Wrong.png";

function Popup(props) {
  return (
    <div className={`popup popup_type_tooltip ${
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
            <img className="popup__icon" src={accept} alt="Значок одобренного действия" />
          </>
        ) : (
          <>
            <p className="popup__title">
              Что-то не так.
            </p>
            <p className="popup__title">
              Попробуйте ещё раз!
            </p>
            <img сlassName="popup__icon" src={wrong} alt="Значок отклоненного действия" />
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