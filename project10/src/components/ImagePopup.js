class ImagePopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

  }

  setEventListeners() {
    //listener should only be added to image.
    // it closes popup on ANY click anywhere in document. desired behaviour for image- not for anything else.
    document.addEventListener("click", () => {
      this.close();
    })
    super.setEventListeners();
  }
  open(name, link) {
    const popEl = this._popupElement.querySelector(".popImg");
    const popTxt = this._popupElement.querySelector(".popup__imgtext");
    popEl.src = link;
    popEl.alt = name;
    popTxt.textContent = name;
    super.open();
  }
}

export default ImagePopup;

