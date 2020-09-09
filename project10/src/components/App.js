import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup.js';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      isEditPicOpen: false,
      isDeletePopOpen: false,
      isChangePopOpen: false,
      isAddPopOpen: false,
      isImagePopOpen: false,
			selectedCard: "",
			currentUser: {} //name: "Lacking Gravitas", about: "SPaceSHip", avatar: defaultAvatarPicture
      
    };
  }



handleCardClick = (value) => {
  this.setState({selectedCard: value});

}

handleUpdateUser = (valueArr) => {
	this.setState({currentUser : valueArr})
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

  handleEditUser = (name, about) => {
    api.updateUser(name, about).then((result) => {
      this.handleUpdateUser(result);
    })
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

	componentDidMount() {
		api.getUser()
    .then(res => {
			this.handleUpdateUser(res);
			console.log(res);
      })
  .catch((err) => {
    console.log(err);
  });
	}

  render() {
    return (

  <div >
		<CurrentUserContext.Provider value={this.state.currentUser}>	
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

      <EditProfilePopup isOpen={this.state.isChangePopOpen} onClose={this.closeAllPopups} onUpdateUser={this.handleEditUser} />

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

      <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups}>
      </ImagePopup>
			</CurrentUserContext.Provider>
</div>
  );
  }
}
export default App;
