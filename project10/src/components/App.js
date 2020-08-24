import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js'


class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      isEditPicOpen: false,
      isDeletePopOpen: false,
      isChangePopOpen: false,
      isAddPopOpen: false,
      isImagePopOpen: false,
      selectedCard: ""
    };
  }

handleCardClick = (value) => {
  this.setState({selectedCard: value});

}
  handleEditAvatarClick = () => {
    this.setState({ isEditPicOpen: true });
  }
  handleEditProfileClick = () => {
    this.setState({ isChangePopOpen: true });
  }

  handleAddPlaceClick = () => {
    this.setState({ isAddPopOpen: true });
  }

  closeAllPopups = () => {
    this.setState({
      isEditPicOpen: false,
      isDeletePopOpen: false,
      isChangePopOpen: false,
      isAddPopOpen: false,
      isImagePopOpen: false,
      selectedCard: ""
    })
  }

  render() {
    return (

  <div >
	      <Header />
		    <Main onCardClick={this.handleCardClick} onAvatarClick={this.handleEditAvatarClick} onEditProfile={this.handleEditProfileClick} onAddPlaceClick={this.handleAddPlaceClick}/>
			  <Footer />
  /*   beginning of Popups */
      <PopupWithForm name="edit-picture" isOpen={this.state.isEditPicOpen} heading="Change profile picture" buttonText="Yes" closeItAll={this.closeAllPopups} >
				<label className="popup__label-group">
				  <input id="user-link" type="url" placeholder="Image link" className="popup__edit_invalid popup__edit popup__url popup_detail " name="imgUrl" required />
					<span id="user-link--error" className="popup__error-input popup__url_error">Please enter a URL.</span>
				</label>
			</PopupWithForm>

      <PopupWithForm name="delete-confirm" isOpen={this.state.isDeletePopOpen} heading="Are you sure ?" buttonText="Yes" closeItAll={this.closeAllPopups} >
      </PopupWithForm>

      <PopupWithForm name="changetext" isOpen={this.state.isChangePopOpen} heading="Edit profile" buttonText="Save" closeItAll={this.closeAllPopups} >
        <label className="popup__label-group">
          <input id="form-name" type="text" minLength={2} maxLength={40} required pattern="[A-Za-z -]{2,40}" placeholder="Name" className="popup__edit popup__name popup_head" name="ProfileName" />
          <span id="form-name--error" className="popup__edit_error popup__name-error" />
        </label>
        <label className="popup__label-group">
          <input id="form-status" type="text" minLength={2} maxLength={200} required placeholder="About" className="popup__edit popup__title popup_detail" name="profileTitle" />
          <span id="form-status--error" className="popup__edit_error popup__title-error" />
        </label>
      </PopupWithForm>

      <PopupWithForm name="addcard" isOpen={this.state.isAddPopOpen} heading="New place" buttonText="Create" closeItAll={this.closeAllPopups} >
        <label className="popup__label-group ">
          <input id="form-title" type="text" minLength={2} maxLength={40} placeholder="Title" className="popup__edit_invalid popup__edit popup__place popup_head" name="placename" required />
          <span id="form-title--error" className="popup__error-input popup__place-error"> Please fill out this field.</span>
        </label>
        <label className="popup__label-group">
          <input id="form-link" type="url" placeholder="Image link" className="popup__edit_invalid popup__edit popup__url popup_detail" name="popupurl" required />
          <span id="form-link--error" className="popup__error-input popup__url_error">Please enter a web address.</span>
        </label>
      </PopupWithForm>

      <ImagePopup>

      </ImagePopup>
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
}
export default App;
