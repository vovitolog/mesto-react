import logo from './logo.svg';
//import './App.css';

function App() {
  return (
   <body className="container">
    <div className="page">
      <header className="header">
        <img
          className="header__logo"
          alt="Место"
          src="<%=require('./images/logo.svg')%>"
        />
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__wrapper">
            <div className="profile__photo-wrapper">
              <img
                className="profile__photo"
                alt="Фото профиля"
                src="<%=require('./images/profile_image.jpg')%>"
              />
              <img
                className="profile__photo-edit"
                alt="Кнопка смены фото профиля"
                src="<%=require('./images/edit_button.svg')%>"
              />
            </div>
            <div className="profile__info">
              <div className="profile__name-wrapper">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__button-edit"></button>
              </div>
              <p className="profile__profession">Исследователь океана</p>
            </div>
          </div>
          <button className="profile__button-add"></button>
        </section>
        <section className="cards">
          <ul className="cards__list"></ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy;2022 Mesto Russia</p>
      </footer>

      <section className="popup popup_type_profile-edit">
        <div className="popup__container">
          <button className="popup__button-close"></button>
          <div className="popup__content">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="form-edit" novalidate>
              <input
                minlength="2"
                maxlength="40"
                type="text"
                className="popup__input popup__input_type_name"
                name="name"
                id="name-input"
                placeholder="Имя"
                required
              />
              <span className="popup__input-error" id="name-input-error"> </span>
              <input
                minlength="2"
                maxlength="200"
                type="text"
                className="popup__input popup__input_type_profession"
                name="profession"
                id="profession-input"
                placeholder="Профессия"
                required
              />
              <span className="popup__input-error" id="profession-input-error">
              </span>
              <button type="submit" className="popup__button-save">
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="popup popup_type_card-add">
        <div className="popup__container">
          <button className="popup__button-close"></button>
          <div className="popup__content">
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="form-add" novalidate>
              <input
                minlength="2"
                maxlength="30"
                type="text"
                className="popup__input popup__input_type_place"
                name="place-name"
                id="place-name-input"
                placeholder="Название"
                required
              />
              <span className="popup__input-error" id="place-name-input-error">
              </span>
              <input
                type="url"
                className="popup__input popup__input_type_url"
                name="image-url"
                id="image-url-input"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error" id="image-url-input-error">
              </span>
              <button type="submit" className="popup__button-save">
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="popup popup_type_image-view">
        <div className="popup__wrapper">
          <button className="popup__button-close"></button>
          <img className="popup__image" alt="" src="#" />
          <p className="popup__description"></p>
        </div>
      </section>

      <section className="popup popup_type_photo-edit">
        <div className="popup__container">
          <button className="popup__button-close"></button>
          <div className="popup__content">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form" name="form-edit" novalidate>
              <input
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
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="popup popup_type_submit">
        <div className="popup__container">
          <button className="popup__button-close"></button>
          <div className="popup__content">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form" name="form-submit" novalidate>
              <button type="submit" className="popup__button-save">Да</button>
            </form>
          </div>
        </div>
      </section>

      <template className="card-template">
        <li className="card">
          <img className="card__image" alt="" src="#" />
          <button className="card__button-delete"></button>
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-wrapper">
              <button className="card__like"></button>
              <p className="card__likes-count">0</p>
            </div>
          </div>
        </li>
      </template>
    </div>
  </body>
  );
}

export default App;
