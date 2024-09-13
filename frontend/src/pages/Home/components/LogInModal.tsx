import React, { FC, ReactNode } from "react"
import { Form } from "react-router-dom";
import "/Modal.css";


interface ModalProps {
  shows: boolean;
  onClose: () => void;
  children: ReactNode;

}

const LogInModal: FC<ModalProps> = ({ shows, onClose, children }) => {
  if (!shows) {
    return null
  }


  return(
    <div className="modal-overlay">
      <div className="modal-content" >

        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>

  )
}

export default LogInModal;