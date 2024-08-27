import React from "react";
import "./Desktop.css"; // Separate CSS file
import dixieLogo from "../../assets/dixie-logo-1.svg"; // Adjust the path as needed
import trashIcon from "../../assets/trash.svg";
import saveIcon from "../../assets/save.svg";
import editIcon from "../../assets/edit.svg";
import newRxIcon from "../../assets/add.svg";
import closeIcon from "../../assets/trash.svg";

const AddPatientPage: React.FC = () => {
  return (
    <div className="add-patient-container">
      <header className="add-patient-header">
        <div className="logo-container">
          <img src={dixieLogo} alt="Dixie Technical College" className="logo" />
        </div>
        <div className="header-buttons">
          <button className="header-button">
            <img src={trashIcon} alt="Delete" className="button-icon" />
            Delete
          </button>
          <button className="header-button">
            <img src={editIcon} alt="Edit" className="button-icon" />
            Edit
          </button>
          <button className="header-button">
            <img src={saveIcon} alt="Save" className="button-icon" />
            Save
          </button>
          <button className="header-button">
            <img src={newRxIcon} alt="New RX" className="button-icon" />
            New RX
          </button>
        </div>
      </header>
      <div className="form-tabs">
        <button className="tab-button active">General</button>
        <button className="tab-button">Insurance</button>
      </div>
      <div className="form-content">
        <div className="form-section">
          <div className="form-group">
            <input type="text" placeholder="Last Name" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Date of Birth" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Address" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Primary Doctor" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Allergies" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
        </div>
        <div className="form-section">
          <div className="form-group">
            <input type="text" placeholder="BIN" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="PCN" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Personal Code" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="ID#" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Group#" />
            <img src={closeIcon} alt="Close" className="close-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatientPage;
