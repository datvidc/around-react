import React, { useState } from 'react';
import api from '../utils/api';
import Card from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

   const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

 function handleCardLike(card) {
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  }

 React.useEffect(() => {
  api.getInitialCards()
    .then(res => {
      let initialCards = [];



      res.forEach((card) => {
        initialCards.push(card);
      });
      setCards(initialCards);
    })

 },[])


  return (
    <main>
    <section className="profile">
      <div className="profile__avatar-overlay" onClick={props.onAvatarClick}>
        <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar" />
        <div className="profile__avatar-hover" />
      </div>
      <div className="profile__text">
        <div className="profile__namebox">
          <p className="profile__name"> {currentUser.name} </p>
          <button className="profile__edit" onClick={props.onEditProfile} />
        </div>
        <p className="profile__title"> {currentUser.about} </p>
      </div>
      <button className="profile__add" onClick={props.onAddPlaceClick}> </button>
    </section>
    <section className="elements">
      <ul className="elements__list">
        {cards.map((card, index) => (
          <Card key={index} card={card} onImgClick={props.onCardClick} onLike={handleCardLike}/>
        ))}
      </ul>
    </section>
  </main>
  );
}

export default Main;
