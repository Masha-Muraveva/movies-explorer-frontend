import React from "react";
import "../Popup/Popup.css";

function PopupUpdate(props) {
  return (
    <div
      className={`popup popup_type_tooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onCloseOverlay}
    >
      <div className="popup__container">
        {props.isUpdate ? (
          <>
            <p className="popup__title">Вы успешно изменили данные профиля!</p>
          </>
        ) : (
          <>
            <p className="popup__title">
              Обновить информацию не удалось :(
            </p>
            <p className="popup__title">
              Попробуйте ещё раз!
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

export default PopupUpdate;