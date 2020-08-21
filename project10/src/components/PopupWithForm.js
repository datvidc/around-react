import React from 'react';

function PopupWithForm (props) {
  // props { props.isOpen - }


// need:
// props.name (name of className)
//props.heading (popup heading)
//props.children (actual form)
// props.buttonText (save button text)


  return(



  <div className={`popup popup_type_${props.name}`}>
    <div className="popup__container">
      <button type="submit" className="popup__close"> </button>
      <form className="popup__edit-form">
        <h3 className="popup__heading"> {props.heading} </h3>
          {props.children}
        <button type="submit" className="popup__save"> {props.buttonText} </button>
      </form>
    </div>
  </div>
  );



}

export default PopupWithForm;
