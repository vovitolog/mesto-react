import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup ({ isOpen, onClose }) {
    return(
        <PopupWithForm
            name="profile-edit"
            title="Редактировать профиль"
            children=""
            isOpen={isOpen}
            onClose={onClose}
            buttonText="Сохранить"
          >
            <input
              minLength="2"
              maxLength="40"
              type="text"
              className="popup__input popup__input_type_name"
              name="name"
              id="name-input"
              placeholder="Имя"
              required
            />
            <span className="popup__input-error" id="name-input-error"></span>
            <input
              minLength="2"
              maxLength="200"
              type="text"
              className="popup__input popup__input_type_profession"
              name="profession"
              id="profession-input"
              placeholder="Профессия"
              required
            />
            <span
              className="popup__input-error"
              id="profession-input-error"
            ></span>
          </PopupWithForm>
    )
}
export default EditProfilePopup;