import React from "react";

const Modal = ({ closeModal}) => {
  
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <button className="close-button" onClick={closeModal}>X</button>
          <div className="modal-content">
            모달 오픈!
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;