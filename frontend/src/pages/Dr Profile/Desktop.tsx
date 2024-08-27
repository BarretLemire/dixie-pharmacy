import React, { useState } from 'react';
import './Desktop.css';
import trashIcon from "../../assets/trash.svg";
import saveIcon from "../../assets/save.svg";

const AddNewDoctor: React.FC = () => {
  const [formValues, setFormValues] = useState({
    lastName: '',
    firstName: '',
    doctorType: '',
    address: '',
    phoneNumber: '',
    dea: '',
    npi: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="add-new-doctor-container">
      <header className="header">
        <button className="cancel-button">
          <img src={trashIcon} className="cancel-icon" alt="Cancel" />
          Cancel
        </button>
        <h1 className="title">Patient Profile</h1>
        <button className="save-button">
          <img src={saveIcon} className="save-icon" alt="Save" />
          Save
        </button>
      </header>
      <form className="form">
        {['Name', 'Strength', 'NDC', 'Expiration', 'Lot Number'].map((field, index) => (
          <div className="form-group" key={index}>
            <input
              type="text"
              name={field}
              value={formValues[field]}
              onChange={handleInputChange}
              className="text-field"
              placeholder={field.replace(/([A-Z])/g, ' $1').trim()} 
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default AddNewDoctor;
