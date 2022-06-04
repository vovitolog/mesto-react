import React from "react";
import photoChange from "../images/edit_button.svg";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  
/*   const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState(''); */
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);
 
/*   React.useEffect(() => {
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
  }, []); */

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




  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__photo-wrapper" onClick={onEditAvatar}>
            <img
              className="profile__photo"
              alt="Фото профиля"
              src={currentUser.avatar}
            />
            <img
              className="profile__photo-edit"
              alt="Кнопка смены фото профиля"
              src={photoChange}
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                onClick={onEditProfile}
                className="profile__button-edit"
              ></button>
            </div>
            <p className="profile__profession">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={onAddPlace} className="profile__button-add"></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
