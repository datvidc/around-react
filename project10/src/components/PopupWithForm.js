import React from 'react';

function PopupWithForm (props) {
  // props { props.isOpen - }
  const popupIsOpen = props.isOpen? "popup_visible" : "";



  return(
    <div className={`popup popup__${props.name}`>






    </div>


  )

}

export default PopupWithForm;
