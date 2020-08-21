import React from 'react';
import image from '../images/image.png';


function Main() {


  function handleEditAvatarClick() {
      document.querySelector(".popup__edit-picture").
      classList.toggle("popup_visible");

  }

  function handleEditProfileClick() {
    document.querySelector(".popup__changetext").
      classList.toggle("popup_visible");
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup__addcard").
      classList.toggle("popup_visible");
  }


  return (
    <main>
    <section className="profile">
      <div className="profile__avatar-overlay" onClick={handleEditAvatarClick}>
        <img src={image} alt="J. Cousteau- with his iconic red hat" className="profile__avatar" />
        <div className="profile__avatar-hover" />
      </div>
      <div className="profile__text">
        <div className="profile__namebox">
          <p className="profile__name">Jacques Cousteau</p>
          <button className="profile__edit" onClick={handleEditProfileClick} />
        </div>
        <p className="profile__title">Explorer</p>
      </div>
      <button className="profile__add" onClick={handleAddPlaceClick}> </button>
    </section>
    <section className="elements">
      <ul className="elements__list">
      </ul>
    </section>
  </main>
  );
}

export default Main;