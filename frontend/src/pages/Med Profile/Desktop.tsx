import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import './Desktop.css';
import trashIcon from "../../assets/trash.svg";
import saveIcon from "../../assets/save.svg";

interface Medication {
  id: number;
  name: string;
  strength: string;
  ndc: string;
  expiration: string;
  lot_number: string;
  dea_schedule: string;
  drug_class: string;
}

const MedProfile: React.FC = () => {
  const { medId } = useParams<{ medId: string }>();
  const navigate = useNavigate();
  const [medication, setMedication] = useState<Medication | null>(null);

  useEffect(() => {
    const fetchMedications = async () => {
      const response = await fetch("http://127.0.0.1:8000/rx-items");
      const medications: Medication[] = await response.json();
      const selectedMedication = medications.find(med => med.id.toString() === medId);
      if (selectedMedication) {
        setMedication(selectedMedication);
      } else {
        console.error("Medication not found");
        navigate('/medsearch'); // Navigate back if not found
      }
    };

    fetchMedications();
  }, [medId, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMedication(prev => ({ ...prev!, [name]: value }));
  };

  if (!medication) return <div>Loading...</div>;

  return (
    <div className="med-profile-container">
      <header className="header">
        <button className="cancel-button" onClick={() => navigate('/medsearch')}>
          <img src={trashIcon} alt="Cancel" className="cancel-icon" />
          Cancel
        </button>
        <h1 className="title">Medication Profile</h1>
        <button className="save-button" onClick={() => console.log('Save functionality here')}>
          <img src={saveIcon} alt="Save" className="save-icon" />
          Save
        </button>
      </header>
      <form className="form">
        {Object.entries(medication).map(([key, value]) => (
          <div key={key} className="form-group">
            <label>{key.replace(/_/g, ' ')}</label>
            <input
              type="text"
              name={key}
              value={value || ''}  // Ensure the value is always a string
              onChange={handleInputChange}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default MedProfile;
