import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  
  function handleClick() {
  props.onImgClick(props.card);
}

<<<<<<< HEAD
function handleCardLike() {
  props.onLike(props.card, isLiked);
}
=======
  function handleLike() {
    let likeClicked = !isLiked;
    props.onLike(props.card, likeClicked);
  }
  function handleDelete() {
    props.onDelete(props.card);
  }
>>>>>>> feat/2

return(

    <li key={props.index} className="elements__element">
     { isOwn ? <button id="elements__trash " className="elements__trash" onClick={handleDelete} /> : ""} 
      <img className="elements__image" onClick={handleClick} src={props.card.link} alt={props.card.name} />
      <div className="elements__photo-bottom ">
        <p className="elements__text "> {props.card.name} </p>
<<<<<<< HEAD
      {isLiked ? <button  className="elements__heart elements__heart_clicked" onClick={handleCardLike}></button> : <button className="elements__heart" onClick={handleCardLike} ></button> }
=======
      {isLiked ? <button  className="elements__heart elements__heart_clicked" onClick={handleLike}></button> : <button className="elements__heart" onClick={handleLike}></button> }
>>>>>>> feat/2
        <p className="elements__heart_likes "> {props.card.likes.length}</p>
      </div>
    </li>

);
}

export default Card;
