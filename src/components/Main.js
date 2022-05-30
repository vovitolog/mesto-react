import React from "react";
import profilePhoto from "../images/profile_image.jpg"; /// Убраьб,
import photoChange from "../images/edit_button.svg";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState(0);
  const [userDescription, setUserDescription] = React.useState(0);
  const [userAvatar, setUserAvatar] = React.useState(0);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //cards.forEach((card) => console.log(card.link));

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__photo-wrapper" onClick={onEditAvatar}>
            <img
              className="profile__photo"
              alt="Фото профиля"
              src={userAvatar}
              //style={{ backgroundImage: `url(${userAvatar})` }}
            />
            <img
              className="profile__photo-edit"
              alt="Кнопка смены фото профиля"
              src={photoChange}
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{userName}</h1>
              <button
                onClick={onEditProfile}
                className="profile__button-edit"
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button onClick={onAddPlace} className="profile__button-add"></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
