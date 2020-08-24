import React from 'react';

function Card(props) {

  function handleClick() {
  props.onImgClick(props.card);
}

return(

    <li key={props.index} className="elements__element">
      <button id="elements__trash " className="elements__trash " />
      <img className="elements__image" onClick={handleClick} src={props.card.link} alt={props.card.name} />
      <div className="elements__photo-bottom ">
        <p className="elements__text "> {props.card.name} </p>
        <button className="elements__heart "></button>
        <p className="elements__heart_likes "> {props.card.likes.length}</p>
      </div>
    </li>

);
}

export default Card;
