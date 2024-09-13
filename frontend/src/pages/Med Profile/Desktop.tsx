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
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editedMedication, setEditedMedication] = useState<Medication | null>(null); // Track edited medication details

  useEffect(() => {
    const fetchMedications = async () => {
      const response = await fetch("http://127.0.0.1:8000/rx-items");
      const medications: Medication[] = await response.json();
      const selectedMedication = medications.find(med => med.id.toString() === medId);
      if (selectedMedication) {
        setMedication(selectedMedication);
        setEditedMedication(selectedMedication); // Set edited medication to the fetched one
      } else {
        console.error("Medication not found");
        navigate('/medsearch'); // Navigate back if not found
      }
    };

    fetchMedications();
  }, [medId, navigate]);

  const handleInputChange = (field: keyof Medication, value: string) => {
    setEditedMedication(prev => ({ ...prev!, [field]: value }));
  };

  const handleSave = async () => {
    if (!editedMedication) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/rx-items/${medId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedMedication),
      });

      if (response.ok) {
        alert("Medication updated successfully!");
        setMedication(editedMedication); // Update original medication state
        setIsEditing(false); // Exit edit mode
      } else {
        console.error("Failed to update medication");
      }
    } catch (error) {
      console.error("Error updating medication:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/rx-items/${medId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Medication deleted successfully!");
        navigate("/medsearch"); // Navigate back to the search page after deletion
      } else {
        console.error("Failed to delete medication");
      }
    } catch (error) {
      console.error("Error deleting medication:", error);
    }
  };

  if (!medication || !editedMedication) return <div>Loading...</div>;

  return (
    <div className="med-profile-container">
      <header className="header">
        <button className="cancel-button" onClick={handleDelete}>
          <img src={trashIcon} alt="Delete" className="cancel-icon" />
          Delete
        </button>
        <h1 className="title">Medication Profile</h1>
        {isEditing ? (
          <button className="save-button" onClick={handleSave}>
            <img src={saveIcon} alt="Save" className="save-icon" />
            Save
          </button>
        ) : (
          <button className="save-button" onClick={() => setIsEditing(true)}>
            <img src={saveIcon} alt="Edit" className="save-icon" />
            Edit
          </button>
        )}
      </header>
      <form className="form">
        {Object.entries(editedMedication).map(([key, value]) => (
          <div key={key} className="form-group">
            <label>{key.replace(/_/g, ' ')}</label>
            <input
              type="text"
              name={key}
              value={value || ''}  // Ensure the value is always a string
              readOnly={!isEditing}
              onChange={(e) => handleInputChange(key as keyof Medication, e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default MedProfile;
