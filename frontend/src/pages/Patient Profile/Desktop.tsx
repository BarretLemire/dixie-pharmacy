import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import trashIcon from "../../assets/trash.svg";
import saveIcon from "../../assets/save.svg";
import "./Desktop.css";

interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  member_id_number: string;
  primary_care_prescriber_id: number;
  insurance_rx_bin: string;
  insurance_person_code: string;
  insurance_group_number: string;
  insurance_rx_pcn: string;
  allergies: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  // Add other necessary fields here
}

const PatientProfile: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false); // Track editing state
  const [editedPatient, setEditedPatient] = useState<Patient | null>(null); // Track edited patient detail

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/patients/${patientId}`
        );
        const data = await response.json();
        setPatient(data);
        setEditedPatient(data);
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };

    fetchPatient();
  }, [patientId]);

  if (!patient || !editedPatient) {
    return <div>Loading...</div>;
  }

  const address = `${patient.street}, ${patient.city}, ${patient.state} ${patient.zipcode}`;

  // Handle field changes when editing
  const handleFieldChange = (field: keyof Patient, value: string | number) => {
    setEditedPatient((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  // Handle Save button click to update patient details
  const handleSaveClick = async () => {
    if (!editedPatient) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/patients/${patientId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedPatient),
        }
      );

      if (response.ok) {
        alert("Patient updated successfully!");
        setPatient(editedPatient); // Update original patient state
        setIsEditing(false); // Exit edit mode
      } else {
        console.error("Failed to update patient");
      }
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  // Handle Delete button click to remove patient
  const handleDeleteClick = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/patients/${patientId}`,
        {
          method: "DELETE",
          headers: {
            "Accept": "application/json",
          },
        });

      if (response.ok) {
        alert("Patient deleted successfully!");
        navigate("/patientsearch"); // Navigate back to the patient search page after deletion
      } else {
        console.error("Failed to delete patient. Status:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  return (
    <div className="patient-profile-container">
      <header className="header">
        <button className="cancel-button" onClick={handleDeleteClick}>
          <img src={trashIcon} className="cancel-icon" alt="Delete" />
          Delete
        </button>
        <h1 className="title">Patient Profile</h1>
        {isEditing ? (
          <button className="save-button" onClick={handleSaveClick}>
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
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={editedPatient.first_name}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("first_name", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={editedPatient.last_name}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("last_name", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={editedPatient.date_of_birth}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("date_of_birth", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Member ID Number</label>
          <input
            type="text"
            value={editedPatient.member_id_number}
            readOnly={!isEditing}
            onChange={(e) =>
              handleFieldChange("member_id_number", e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Primary Care Prescriber ID</label>
          <input
            type="text"
            value={editedPatient.primary_care_prescriber_id}
            readOnly={!isEditing}
            onChange={(e) =>
              handleFieldChange(
                "primary_care_prescriber_id",
                parseInt(e.target.value)
              )
            }
          />
        </div>
        <div className="form-group">
          <label>Insurance Rx BIN</label>
          <input
            type="text"
            value={editedPatient.insurance_rx_bin}
            readOnly={!isEditing}
            onChange={(e) =>
              handleFieldChange("insurance_rx_bin", e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Insurance Person Code</label>
          <input
            type="text"
            value={editedPatient.insurance_person_code}
            readOnly={!isEditing}
            onChange={(e) =>
              handleFieldChange("insurance_person_code", e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Insurance Group Number</label>
          <input
            type="text"
            value={editedPatient.insurance_group_number}
            readOnly={!isEditing}
            onChange={(e) =>
              handleFieldChange("insurance_group_number", e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Insurance Rx PCN</label>
          <input
            type="text"
            value={editedPatient.insurance_rx_pcn}
            readOnly={!isEditing}
            onChange={(e) =>
              handleFieldChange("insurance_rx_pcn", e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Allergies</label>
          <input
            type="text"
            value={editedPatient.allergies}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("allergies", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Street</label>
          <input
            type="text"
            value={editedPatient.street}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("street", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            value={editedPatient.city}
            onChange={(e) => handleFieldChange("city", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            placeholder="State"
            value={editedPatient.state}
            onChange={(e) => handleFieldChange("state", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input
            type="text"
            placeholder="Zip Code"
            value={editedPatient.zipcode}
            onChange={(e) => handleFieldChange("zipcode", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default PatientProfile;
