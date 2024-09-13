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
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editedPrescriber, setEditedPrescriber] = useState<Prescriber | null>(null); // Track edited prescriber details

  useEffect(() => {
    const fetchPrescribers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/prescribers");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Prescriber[] = await response.json();
        const foundPrescriber = data.find(p => p.id.toString() === drId);
        if (foundPrescriber) {
          setPrescriber(foundPrescriber);
          setEditedPrescriber(foundPrescriber); // Set edited prescriber to the fetched one
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

  if (!prescriber || !editedPrescriber) return <div>Loading...</div>;

  const handleInputChange = (field: keyof Prescriber, value: string) => {
    setEditedPrescriber(prev => ({ ...prev!, [field]: value }));
  };

  const handleSave = async () => {
    if (!editedPrescriber) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/prescribers/${drId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPrescriber),
      });

      if (response.ok) {
        alert("Prescriber updated successfully!");
        setPrescriber(editedPrescriber); // Update original prescriber state
        setIsEditing(false); // Exit edit mode
      } else {
        console.error("Failed to update prescriber");
      }
    } catch (error) {
      console.error("Error updating prescriber:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/prescribers/${drId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Prescriber deleted successfully!");
        navigate("/drsearch"); // Navigate back to the search page
      } else {
        console.error("Failed to delete prescriber");
      }
    } catch (error) {
      console.error("Error deleting prescriber:", error);
    }
  };

  return (
    <div className="add-new-doctor-container">
      <header className="header">
        <button className="cancel-button" onClick={handleDelete}>
          <img src={trashIcon} className="cancel-icon" alt="Delete" />
          Delete
        </button>
        <h1 className="title">Prescriber Profile</h1>
        {isEditing ? (
          <button className="save-button" onClick={handleSave}>
            <img src={saveIcon} className="save-icon" alt="Save" />
            Save
          </button>
        ) : (
          <button className="save-button" onClick={() => setIsEditing(true)}>
            <img src={saveIcon} className="save-icon" alt="Edit" />
            Edit
          </button>
        )}
      </header>
      <form className="form">
        {Object.keys(prescriber).map((key) => (
          <div key={key} className="form-group">
            <label>{key.replace(/_/g, ' ')}</label>
            <input
              type="text"
              value={(editedPrescriber as any)[key]}
              readOnly={!isEditing}
              onChange={(e) => handleInputChange(key as keyof Prescriber, e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default DrProfile;
