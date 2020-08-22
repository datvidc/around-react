import React from 'react';
import image from '../images/image.png';
import api from '../utils/api';
import defaultAvatarPicture from "../images/DC-img.png";

function Main(props) {

  const [userName, setUserName] = useState("Lacking Gravitas");
  const [userDescription, setUserDescription] = useState("Space Ship");
  const [userAvatar, setUserAvatar] = useState(defaultAvatarPicture);



  return (
    <main>
    <section className="profile">
      <div className="profile__avatar-overlay" onClick={props.onAvatarClick}>
        <img src={userAvatar} alt="image of ${userName}" className="profile__avatar" />
        <div className="profile__avatar-hover" />
      </div>
      <div className="profile__text">
        <div className="profile__namebox">
          <p className="profile__name"> {userName} </p>
          <button className="profile__edit" onClick={props.onEditProfile} />
        </div>
        <p className="profile__title"> {userDescription} </p>
      </div>
      <button className="profile__add" onClick={props.onAddPlaceClick}> </button>
    </section>
    <section className="elements">
      <ul className="elements__list">
      </ul>
    </section>
  </main>
  );
}

export default Main;
