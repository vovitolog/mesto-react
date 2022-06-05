import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";


function AddPlacePopup({isOpen, onClose}) {


  return (
    <PopupWithForm
      name="card-add"
      title="Новое место"
      children=""
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
    >
      <input
        minLength="2"
        maxLength="30"
        type="text"
        className="popup__input popup__input_type_place"
        name="place-name"
        id="place-name-input"
        placeholder="Название"
        required
      />
      <span className="popup__input-error" id="place-name-input-error"></span>
      <input
        type="url"
        className="popup__input popup__input_type_url"
        name="image-url"
        id="image-url-input"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error" id="image-url-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
