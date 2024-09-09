import React, { useState } from 'react';
import './Desktop.css';
import saveIcon from "../../assets/save.svg";

const NewMed: React.FC = () => {
  const [medication, setMedication] = useState<Medication>({
    id: 0, // This won't be sent to backend usually, backend assigns ID
    name: "",
    strength: "",
    ndc: "",
    expiration: "",
    lot_number: "",
    dea_schedule: "",
    drug_class: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMedication({ ...medication, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/rx-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medication),
    });

    if (response.ok) {
      console.log("Medication added successfully");
      // Handle successful addition here
    } else {
      console.error("Failed to add medication");
    }
  };

  return (
    <div className="add-new-med-container">
      <header className="header">
        <button className="header-button" onClick={handleSubmit}>
          <img src={saveIcon} alt="Save" className="button-icon" />
          Save
        </button>
      </header>
      <form onSubmit={handleSubmit} className="form">
        {Object.entries(medication).map(([key, value]) => (
          <div key={key} className="form-group">
            <label>{key.replace(/_/g, ' ')}</label>
            <input
              type="text"
              name={key}
              placeholder={key.replace(/_/g, ' ')}
              value={value}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default NewMed;
