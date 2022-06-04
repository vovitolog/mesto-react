import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  
  const cardDeleteButtonClassName = (
     `${isOwn ? 'card__button-delete' : ''}`
  ); 

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  //console.log(isLiked);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = (
  `card__like ${isOwn ? 'card__like_visible' : 'card__like_hidden'}`
); 


  function handleCardClick() {
    onCardClick(card);
  }

  function  handleLikeClick() {
    onCardLike(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        alt={card.name}
        src={card.link}
        onClick={handleCardClick}
      />
      <button className={cardDeleteButtonClassName}></button>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-wrapper">
          <button className="card__like" onClick={handleLikeClick}></button>
          <p className="card__likes-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
