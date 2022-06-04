import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="container">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            name="photo-edit"
            title="Обновить аватар"
            children=""
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            buttonText="Сохранить"
          >
            <input
              type="url"
              className="popup__input popup__input_type_photo"
              name="photo-url"
              id="photo-url-input"
              placeholder="Ссылка на фото"
              required
            />
            <span
              className="popup__input-error"
              id="photo-url-input-error"
            ></span>
          </PopupWithForm>

          <PopupWithForm
            name="profile-edit"
            title="Редактировать профиль"
            children=""
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
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

          <PopupWithForm
            name="card-add"
            title="Новое место"
            children=""
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
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
            <span
              className="popup__input-error"
              id="place-name-input-error"
            ></span>
            <input
              type="url"
              className="popup__input popup__input_type_url"
              name="image-url"
              id="image-url-input"
              placeholder="Ссылка на картинку"
              required
            />
            <span
              className="popup__input-error"
              id="image-url-input-error"
            ></span>
          </PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
