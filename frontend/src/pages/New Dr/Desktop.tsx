import React, { useState } from "react";
import "./Desktop.css";
import saveIcon from "../../assets/save.svg";
import { useNavigate } from "react-router-dom"; // For navigation after successful save

const AddNewDoctor: React.FC = () => {
  const navigate = useNavigate(); // React Router hook for navigation
  const [prescriber, setPrescriber] = useState({
    first_name: "",
    last_name: "",
    prescriber_type: "MD",
    street: "",
    city: "",
    state: "AL",
    zipcode: "",
    contact_number: "",
    dea: "",
    npi: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrescriber({ ...prescriber, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation check
    if (!prescriber.first_name || !prescriber.last_name || !prescriber.contact_number) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/prescribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prescriber),
      });

      if (response.ok) {
        console.log("Doctor added successfully");
        alert("Doctor added successfully"); // Provide user feedback
        setPrescriber({ // Reset the form state
          first_name: "",
          last_name: "",
          prescriber_type: "MD",
          street: "",
          city: "",
          state: "AL",
          zipcode: "",
          contact_number: "",
          dea: "",
          npi: ""
        });
        navigate('/drsearch'); // Redirect user to the search page or dashboard
      } else {
        const errorData = await response.json(); // Parse error details from response
        alert(`Failed to add doctor: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Network error when trying to add doctor:", error);
      alert("Network error when trying to add doctor");
    }
  };

  return (
    <div className="add-new-doctor-container">
      <header className="header">
        <button className="header-button" onClick={handleSubmit}>
          <img src={saveIcon} alt="Save" className="button-icon" />
          Save
        </button>
      </header>
      <form onSubmit={handleSubmit} className="form">
        {Object.entries(prescriber).map(([key, value]) => (
          <div className="form-group" key={key}>
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

export default AddNewDoctor;
