import React from 'react';
import image from '../images/image.png';

function Main() {
  return (
    <main>
    <section className="profile">
      <div className="profile__avatar-overlay">
        <img src={image} alt="J. Cousteau- with his iconic red hat" className="profile__avatar" />
        <div className="profile__avatar-hover" />
      </div>
      <div className="profile__text">
        <div className="profile__namebox">
          <p className="profile__name">Jacques Cousteau</p>
          <div className="profile__edit" />
        </div>
        <p className="profile__title">Explorer</p>
      </div>
      <button className="profile__add"> </button>
    </section>
    <section className="elements">
      <ul className="elements__list">
      </ul>
    </section>
  </main>
  );
}

export default Main;
