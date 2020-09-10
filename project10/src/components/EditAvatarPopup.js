import React from 'react';
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {

     // use the context after import. CurrentUserContext
     const currentUser = React.useContext(CurrentUserContext);


    return (

        <PopupWithForm name="edit-picture" isOpen={this.state.isEditPicOpen} heading="Change profile picture" buttonText="Yes" closeItAll={this.closeAllPopups} >
				<label className="popup__label-group">
				  <input id="user-link" type="url" placeholder="Image link" className="popup__edit_invalid popup__edit popup__url popup_detail " name="imgUrl" required />
					<span id="user-link--error" className="popup__error-input popup__url_error">Please enter a URL.</span>
				</label>
			</PopupWithForm>
    )


}