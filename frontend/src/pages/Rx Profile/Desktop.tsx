import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Desktop.css";

interface Prescription {
  patient_id: number;
  prescribed_date: string;
  rx_item_id: number;
  quantity: number;
  refills: number;
  tech_initials: string;
  rx_number: number;
  prescriber_id: number;
  directions: string;
  quantity_dispensed: number;
  status: string;
}

interface Patient {
  id: number;
  first_name: string;
  last_name: string;
}

interface Medication {
  id: number;
  name: string;
}

const CurrentRx: React.FC = () => {
  const { rx_number } = useParams();
  const navigate = useNavigate();
  const [prescription, setPrescription] = useState<Prescription | null>(null);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [medication, setMedication] = useState<Medication | null>(null);
  const [isEditing, setIsEditing] = useState(false); // Track editing state
  const [editedPrescription, setEditedPrescription] = useState<Prescription | null>(null); // Edited prescription state

  useEffect(() => {
    const fetchPrescription = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/prescriptions/${rx_number}`
        );
        const data = await response.json();
        setPrescription(data);
        setEditedPrescription(data); // Initialize edited prescription

        if (data.patient_id) {
          const patientResponse = await fetch(
            `http://127.0.0.1:8000/patients/${data.patient_id}`
          );
          const patientData = await patientResponse.json();
          setPatient(patientData);
        }
        if (data.rx_item_id) {
          const medicationResponse = await fetch(
            `http://127.0.0.1:8000/rx-items/${data.rx_item_id}`
          );
          const medicationData = await medicationResponse.json();
          setMedication(medicationData);
        }
      } catch (error) {
        console.error("Error fetching prescription data:", error);
      }
    };

    if (rx_number) {
      fetchPrescription();
    }
  }, [rx_number]);

  if (!prescription || !editedPrescription) {
    return <div>Prescription not found</div>;
  }

  const patientFullName = patient
    ? `${patient.first_name} ${patient.last_name}`
    : "";

  // Handle field changes for editing
  const handleFieldChange = (field: keyof Prescription, value: string | number) => {
    setEditedPrescription((prev) => prev ? { ...prev, [field]: value } : null);
  };

  // Handle Save button click to update prescription
  const handleSaveClick = async () => {
    if (!editedPrescription) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/prescriptions/${rx_number}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPrescription),
      });

      if (response.ok) {
        alert("Prescription updated successfully!");
        setPrescription(editedPrescription);
        setIsEditing(false);
      } else {
        console.error("Failed to update prescription");
      }
    } catch (error) {
      console.error("Error updating prescription:", error);
    }
  };

  // Handle Edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle Delete button click
  const handleDeleteClick = async () => {
    if (!rx_number) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/prescriptions/${rx_number}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Prescription deleted successfully!");
        navigate("/rxsearch"); // Navigate back to search page after deletion
      } else {
        console.error("Failed to delete prescription");
      }
    } catch (error) {
      console.error("Error deleting prescription:", error);
    }
  };

  return (
    <div className="current-rx">
      <h1>Current Rx</h1>
      <div className="rx-form">
        <div className="form-group">
          <label htmlFor="patient_name">Patient Name</label>
          <input
            type="text"
            id="patient_name"
            value={patientFullName}
            placeholder="Patient Name"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="medication">Medication Id</label>
          <input
            type="text"
            id="medication"
            value={editedPrescription.rx_item_id || ""}
            placeholder="Medication Id"
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("rx_item_id", parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctor_name">Prescriber Id</label>
          <input
            type="text"
            id="doctor_name"
            value={editedPrescription.prescriber_id}
            placeholder="Doctor Id"
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("prescriber_id", parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity_written">Quantity Written</label>
          <input
            type="text"
            id="quantity_written"
            value={editedPrescription.quantity}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("quantity", parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity_dispensed">Quantity Dispensed</label>
          <input
            type="text"
            id="quantity_dispensed"
            value={editedPrescription.quantity_dispensed}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("quantity_dispensed", parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="refills">Refills</label>
          <input
            type="text"
            id="refills"
            value={editedPrescription.refills}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("refills", parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tech_initials">Tech Initials</label>
          <input
            type="text"
            id="tech_initials"
            value={editedPrescription.tech_initials}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("tech_initials", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date_of_rx">Date of RX</label>
          <input
            type="date"
            id="date_of_rx"
            value={editedPrescription.prescribed_date}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("prescribed_date", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prescription_number">Prescription #</label>
          <input
            type="text"
            id="prescription_number"
            value={editedPrescription.rx_number}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            value={editedPrescription.directions}
            readOnly={!isEditing}
            onChange={(e) => handleFieldChange("directions", e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="rx-actions">
        {isEditing ? (
          <button className="save" onClick={handleSaveClick}>Save</button>
        ) : (
          <button className="edit" onClick={handleEditClick}>Edit</button>
        )}
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
        <button className="save">Save and Continue to Label</button>
      </div>
      <div className="rx-images">
        <div className="image-box">Scan Image</div>
        <div className="image-box">Label</div>
      </div>
    </div>
  );
};

export default CurrentRx;
