import React from "react";
import "./Desktop.css"; // Assuming you're using a separate CSS file
import dixieLogo from "../../assets/dixie-logo-1.svg"; // Adjust the path as needed
import trashIcon from "../../assets/trash.svg";
import saveIcon from "../../assets/save.svg";
import dropdownIcon from "../../assets/search.svg";

const NewRxPage: React.FC = () => {
  return (
    <div className="new-rx-container">
      <header className="new-rx-header">
        <div className="logo-container">
          <img src={dixieLogo} title="logo"/>
        </div>
        <h1>New RX</h1>
      </header>
      <div className="new-rx-content">
        <div className="form-container">
          <div className="form-group">
            <label>Patient Name Search</label>
            <div className="input-icon">
              <input type="text" />
              <img src={dropdownIcon} alt="Search Icon" className="icon" />
            </div>
          </div>
          <div className="form-group">
            <label>Doctor Name Search</label>
            <div className="input-icon">
              <input type="text" />
              <img src={dropdownIcon} alt="Search Icon" className="icon" />
            </div>
          </div>
          <div className="form-group">
            <label>Medication Search</label>
            <div className="input-icon">
              <input type="text" />
              <img src={dropdownIcon} alt="Search Icon" className="icon" />
            </div>
          </div>
          <div className="form-group">
            <label>Quantity Written</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Quantity Dispensed</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Refills</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Tech Initials</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Date of RX</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Code #</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Instructions</label>
            <textarea placeholder="Instructions" />
          </div>
          <div className="button-group">
            <button className="cancel-button">
              <img src={trashIcon} alt="Cancel" className="button-icon" />
              Cancel
            </button>
            <button className="save-button">
              <img src={saveIcon} alt="Save" className="button-icon" />
              Save and Continue to Label
            </button>
          </div>
        </div>
        <div className="image-container">
          <div className="scan-image">
            <p>Scan Image</p>
          </div>
          <div className="label-image">
            <p>Label</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRxPage;
