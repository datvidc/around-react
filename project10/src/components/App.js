import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


function App() {
  return (
<div >
	<Header />
		<Main />
			<Footer />




  <div className="popup popup__edit-picture">
    <div className="popup__container popup__container_userImg">
      <button type="submit " className="popup__close"> </button>
      <form className="popup__edit-form popup__edit-userImg">
        <h3 className="popup__userImg-heading">Change profile picture </h3>
        <label className="popup__label-group">
          <input id="user-link" type="url" placeholder="Image link" className="popup__edit_invalid popup__edit popup__url popup_detail " name="imgUrl" required />
          <span id="user-link--error" className="popup__error-input popup__url_error">Please enter a URL.</span>
        </label>
        <button type="submit" className="popup__save popup__userImg"> Yes </button>
      </form>
    </div>
  </div>

  <div className="popup popup__delete-confirm ">
    <div className="popup__container popup__container_delete ">
      <button type="submit " className="popup__close "> </button>
      <form className="popup__edit-form popup__edit-delete ">
        <h3 className="popup__delete-heading ">Are you sure ? </h3>
        <button type="submit " className="popup__save popup__delete "> Yes </button>
      </form>
    </div>
  </div>

  <div className=" popup popup__changetext ">
    <div className="popup__container ">
      <button type="submit " className="popup__close "> </button>
      <form className="popup__edit-form">
        <h3 className="popup__heading">Edit profile</h3>
        <label className="popup__label-group">
          <input id="form-name" type="text" minLength={2} maxLength={40} required pattern="[A-Za-z -]{2,40}" placeholder="Name" className="popup__edit popup__name popup_head" name="ProfileName" />
          <span id="form-name--error" className="popup__edit_error popup__name-error" />
        </label>
        <label className="popup__label-group">
          <input id="form-status" type="text" minLength={2} maxLength={200} required placeholder="About" className="popup__edit popup__title popup_detail" name="profileTitle" />
          <span id="form-status--error" className="popup__edit_error popup__title-error" />
        </label>
        <button type="submit " className="popup__save "> Save</button>
      </form>
    </div>
  </div>


  <div className="popup popup__addcard">
    <div className="popup__container popup__container_addcard">
      <button type="submit" className="popup__close popup__close_addcard"> </button>
      <h3 className="popup__heading">New place</h3>
      <form className="popup__edit-form popup__edit-form_add">
        <label className="popup__label-group ">
          <input id="form-title" type="text" minLength={2} maxLength={40} placeholder="Title" className="popup__edit_invalid popup__edit popup__place popup_head" name="placename" required />
          <span id="form-title--error" className="popup__error-input popup__place-error"> Please fill out this field.</span>
        </label>
        <label className="popup__label-group">
          <input id="form-link" type="url" placeholder="Image link" className="popup__edit_invalid popup__edit popup__url popup_detail" name="popupurl" required />
          <span id="form-link--error" className="popup__error-input popup__url_error">Please enter a web address.</span>
        </label>
        <button type="submit" className="popup__save_invalid popup__save popup__save_addcard"> Create</button>
      </form>
    </div>
  </div>

  <div className="popup popup__img">
    <div className="popup__card popup_image">
      <button type="submit " className="popup__close popup__closeimg"> </button>
      <img src="# " alt=" " className="popup__image popImg" />
      <p className="popup__imgtext">PlaceName </p>
    </div>
  </div>


  <template className="element__elem ">
  <li className="elements__element ">
    <button id="elements__trash " className="elements__trash " />
    <img className="elements__image " src="# " alt=" " />
    <div className="elements__photo-bottom ">
      <p className="elements__text "> </p>
      <button className="elements__heart "></button>
      <p className="elements__heart_likes "> 0</p>
    </div>
  </li>
  </template>
</div>
  );
}

export default App;
