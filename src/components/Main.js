import React from "react";
import profilePhoto from '../images/profile_image.jpg';
import photoChange from '../images/edit_button.svg';

function Main() {
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__wrapper">
            <div className="profile__photo-wrapper">
              <img
                className="profile__photo"
                alt="Фото профиля"
                src={profilePhoto}
              />
              <img
                className="profile__photo-edit"
                alt="Кнопка смены фото профиля"
                src={photoChange}
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
  );
}

export default Main;