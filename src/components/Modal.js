import React from "react";

const Modal = ({ show, onClose}) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <button className="close-button" onClick={onClose}>X</button>
          <div className="modal-content">
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;