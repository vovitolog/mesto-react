import React from "react";
//popup_is-opened

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image-view  ${
        props.card ? "popup_is-opened" : ""
      }`}
    >
      <div className="popup__wrapper">
        <button className="popup__button-close" onClick={props.onClose}>

        </button>
        <img className="popup__image" alt={props.card.name} src={props.card.link} />
        <p className="popup__description"></p>
      </div>
    </div>
  );
}

export default ImagePopup;
