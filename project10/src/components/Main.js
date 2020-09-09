import React, { useState } from 'react';
import api from '../utils/api';
import Card from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

   const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleDeleteCard(card) {
    //Delete button should not be there if this is not true, but...anyway checking if card is owned by current user
    const cardOwner = card.owner._id === currentUser._id;

    if (cardOwner) {
      api.deleteCard(card._id).then(() => {
        const newCards = cards.filter(c => c._id !== card._id);
        
        setCards(newCards);
      })
    }
  }

 function handleCardLike(card) {
   console.log(card);
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.likeButton(card, isLiked).then((res) => {
      const newCards = cards.map((card) => 
        res._id === card._id ? res : card );      
      setCards(newCards);
    })
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
          <Card key={index} card={card} onImgClick={props.onCardClick} onDelete={handleDeleteCard} onLike={handleCardLike}/>
        ))}
      </ul>
    </section>
  </main>
  );
}

export default Main;
