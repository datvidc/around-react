import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  
  function handleClick() {
  props.onImgClick(props.card);
}

  function handleLike() {
    props.onLike(props.card, isLiked);
  }

return(

    <li key={props.index} className="elements__element">
     { isOwn ? <button id="elements__trash " className="elements__trash " /> : ""} 
      <img className="elements__image" onClick={handleClick} src={props.card.link} alt={props.card.name} />
      <div className="elements__photo-bottom ">
        <p className="elements__text "> {props.card.name} </p>
      {isLiked ? <button  className="elements__heart elements__heart_clicked" onClick={handleLike}></button> : <button className="elements__heart" onClick={handleLike}></button> }
        <p className="elements__heart_likes "> {props.card.likes.length}</p>
      </div>
    </li>

);
}

export default Card;
