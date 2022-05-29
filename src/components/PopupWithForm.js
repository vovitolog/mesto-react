import React from "react";
//popup_is-opened

function PopupWithForm(name, title, children) {
  return (
    <div className={`popup popup_type_${name}`}>
    <div className="popup__container">
      <button className="popup__button-close"></button>
      <div className="popup__content">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} novalidate>
          {children}
        {/*   <input
            type="url"
            className="popup__input popup__input_type_photo"
            name="photo-url"
            id="photo-url-input"
            placeholder="Ссылка на фото"
            required
          />
          <span className="popup__input-error" id="photo-url-input-error">
          </span>

          <button type="submit" className="popup__button-save">
            Сохранить
          </button> */}
        </form>
      </div>
    </div>
  </div>
  );
}

export default PopupWithForm;
