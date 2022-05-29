import React from "react";
//props. children??????????????????????????????

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__container">
        <button className="popup__button-close" onClick={props.onClose}></button>
        <div className="popup__content">
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={props.name} noValidate>
            {props.children}
            <button type="submit" className="popup__button-save" onClick={props.onClose}>
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
