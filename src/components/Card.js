import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        alt={card.name}
        src={card.link}
        onClick={handleCardClick}
      />
      <button className="card__button-delete"></button>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-wrapper">
          <button className="card__like"></button>
          <p className="card__likes-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
