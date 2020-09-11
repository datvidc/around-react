import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditPicOpen: false,
      isDeletePopOpen: false,
      isChangePopOpen: false,
      isAddPopOpen: false,
      isImagePopOpen: false,
      selectedCard: "",
      currentUser: {}, //name: "Lacking Gravitas", about: "SPaceSHip", avatar: defaultAvatarPicture
      cards: []
    };
  }


  handleCardClick = (value) => {
    this.setState({ selectedCard: value });

  }

  handleUpdateAvatar = (link) => {
    this.setState({ currentUser: link })
  }

  handleUpdateUser = (valueArr) => {
    this.setState({ currentUser: valueArr })
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
  handleEditAvatar = (url) => {
    api.updateAvatar(url).then((res) => {
      this.handleUpdateUser(res);
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
    //now for generating cards
    api.getInitialCards()
      .then(res => {
        let initialCards = [];
        res.forEach((card) => {
          initialCards.push(card);
        });
        this.setState({ cards: initialCards });
      })

  }

  handleCardLike(card) {
    console.log(card);
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.likeButton(card, isLiked).then((res) => {
      const newCards = cards.map((card) =>
        res._id === card._id ? res : card);
      setCards(newCards);
    })
  }

	handleDeleteCard(card) {
    //Delete button should not be there if this is not true, but...anyway checking if card is owned by current user
    const cardOwner = card.owner._id === currentUser._id;

    if (cardOwner) {
      api.deleteCard(card._id).then(() => {
        const newCards = cards.filter(c => c._id !== card._id);
        
        setCards(newCards);
      })
    }
  }


  render() {
    return (

      <div >
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
          <Main onCardClick={this.handleCardClick} onAvatarClick={this.handleEditAvatarClick} onEditProfile={this.handleEditProfileClick} onAddPlaceClick={this.handleAddPlaceClick} />
          <Footer />

          <EditAvatarPopup isOpen={this.state.isEditPicOpen} onClose={this.closeAllPopups} onUpdateAvatar={this.handleEditAvatar} />

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