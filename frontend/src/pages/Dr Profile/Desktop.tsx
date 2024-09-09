import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Desktop.css';
import trashIcon from "../../assets/trash.svg";
import saveIcon from "../../assets/save.svg";

interface Prescriber {
  id: number;
  first_name: string;
  last_name: string;
  prescriber_type: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  contact_number: string;
  dea: string;
  npi: string;
}

const DrProfile: React.FC = () => {
  const { drId } = useParams<{ drId: string }>();
  const navigate = useNavigate();
  const [prescriber, setPrescriber] = useState<Prescriber | null>(null);

  useEffect(() => {
    const fetchPrescribers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/prescribers");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Prescriber[] = await response.json();
        // Filter to find the prescriber with the matching ID
        const foundPrescriber = data.find(p => p.id.toString() === drId);
        if (foundPrescriber) {
          setPrescriber(foundPrescriber);
        } else {
          console.error("Prescriber not found");
          navigate('/drsearch'); // Redirect if not found
        }
      } catch (error) {
        console.error("Error fetching prescribers:", error);
        navigate('/drsearch');
      }
    };

    fetchPrescribers();
  }, [drId, navigate]);

  if (!prescriber) return <div>Loading...</div>; // Show loading or not found message

  const handleInputChange = (field: keyof Prescriber, value: string) => {
    setPrescriber(prev => ({ ...prev!, [field]: value }));
  };

  const handleSave = async () => {
    // Your PATCH request and handling here
  };

  return (
    <div className="add-new-doctor-container">
      <header className="header">
        <button className="cancel-button" onClick={() => navigate('/drsearch')}>
          <img src={trashIcon} className="cancel-icon" alt="Cancel" />
          Cancel
        </button>
        <h1 className="title">Prescriber Profile</h1>
        <button className="save-button" onClick={handleSave}>
          <img src={saveIcon} className="save-icon" alt="Save" />
          Save
        </button>
      </header>
      <form className="form">
        {Object.keys(prescriber).map((key) => (
          <div key={key} className="form-group">
            <label>{key.replace(/_/g, ' ')}</label>
            <input
              type="text"
              value={(prescriber as any)[key]}
              onChange={(e) => handleInputChange(key as keyof Prescriber, e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default DrProfile;
