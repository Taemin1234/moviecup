import React from "react";
import * as MI from '../style/style'

const Modal = ({ closeModal}) => {
  
    return (
      <MI.ModalWrap className="modal-backdrop">
        <div className="modal">
          <button className="close-button" onClick={closeModal}>X</button>
          <div className="modal-content">
            모달 오픈!
          </div>
        </div>
      </MI.ModalWrap>
    );
  };
  
  export default Modal;