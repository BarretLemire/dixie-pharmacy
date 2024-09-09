import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/patients/${patientId}`);
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };

    fetchPatient();
  }, [patientId]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  const address = `${patient.street}, ${patient.city}, ${patient.state} ${patient.zipcode}`;

  return (
    <div className="patient-profile-container">
      <header className="header">
        <button className="cancel-button">
          <img src={trashIcon} className="cancel-icon" alt="Cancel" />
          Delete
        </button>
        <h1 className="title">Patient Profile</h1>
        <button className="save-button">
          <img src={saveIcon} className="save-icon" alt="Save" />
          Save
        </button>
      </header>
      <form className="form">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" value={patient.first_name} readOnly />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" value={patient.last_name} readOnly />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="text" value={patient.date_of_birth} readOnly />
        </div>
        <div className="form-group">
          <label>Member ID Number</label>
          <input type="text" value={patient.member_id_number} readOnly />
        </div>
        <div className="form-group">
          <label>Primary Care Prescriber ID</label>
          <input type="text" value={patient.primary_care_prescriber_id} readOnly />
        </div>
        <div className="form-group">
          <label>Insurance Rx BIN</label>
          <input type="text" value={patient.insurance_rx_bin} readOnly />
        </div>
        <div className="form-group">
          <label>Insurance Person Code</label>
          <input type="text" value={patient.insurance_person_code} readOnly />
        </div>
        <div className="form-group">
          <label>Insurance Group Number</label>
          <input type="text" value={patient.insurance_group_number} readOnly />
        </div>
        <div className="form-group">
          <label>Insurance Rx PCN</label>
          <input type="text" value={patient.insurance_rx_pcn} readOnly />
        </div>
        <div className="form-group">
          <label>Allergies</label>
          <input type="text" value={patient.allergies} readOnly />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" value={address} readOnly /> {/* Address in one line */}
        </div>
        {/* Add more fields as necessary */}
      </form>
    </div>
  );
};

export default PatientProfile;
