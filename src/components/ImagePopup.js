import React from "react";
//popup_is-opened

function ImagePopup() {
  return (
    <div className="popup popup_type_image-view">
    <div className="popup__wrapper">
      <button className="popup__button-close"></button>
      <img className="popup__image" alt="" src="#" />
      <p className="popup__description"></p>
    </div>
  </div>
  );
}

export default ImagePopup;
