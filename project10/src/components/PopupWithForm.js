import React from 'react';

function PopupWithForm (props) {
  // props { props.isOpen - }
  const popupIsOpen = props.isOpen? "popup_visible" : "";



  return(
    <div>
      <p> It was served</p>
  </div>
  )

}

export default PopupWithForm;
