import React, {useState, useEffect} from "react";
import "./Desktop.css"; // Separate CSS file
import dixieLogo from "../../assets/dixie-logo-1.svg"; // Adjust the path as needed
import trashIcon from "../../assets/trash.svg";
import saveIcon from "../../assets/save.svg";
import editIcon from "../../assets/edit.svg";
import newRxIcon from "../../assets/add.svg";
import closeIcon from "../../assets/trash.svg";

interface Patient {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  primary_care_prescriber_id: number;
  allergies: string;
  member_id_number: string;
  insurance_group_number: string;
  insurance_rx_bin: string;
  insurance_rx_pcn: string;
  insurance_person_code: string;
}


const AddPatientPage: React.FC = () => {
  // Initialize state using the Patient interface
  const [patient, setPatient] = useState<Patient>({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    primary_care_prescriber_id: 0,
    allergies: "",
    member_id_number: "",
    insurance_group_number: "",
    insurance_rx_bin: "",
    insurance_rx_pcn: "",
    insurance_person_code: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patient),
      });
      if (response.ok) {
        console.log("Patient added successfully");
        // Optionally clear form or redirect
      } else {
        console.error("Failed to add patient");
      }
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <div className="add-patient-container">
      <header className="add-patient-header">
        <div className="logo-container">
          <img src={dixieLogo} alt="Dixie Technical College" className="logo" />
        </div>
        <button className="header-button" onClick={handleSubmit}>
          <img src={saveIcon} alt="Save" className="button-icon" />
          Save
        </button>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="first_name" placeholder="First Name" value={patient.first_name} onChange={handleInputChange} />
        </div>
        {/* Repeat for other fields */}
        <div className="form-group">
          <input type="text" name="last_name" placeholder="Last Name" value={patient.last_name} onChange={handleInputChange} />
        </div>
        {/* Add additional fields as needed */}
        <div className="form-group">
          <input type="date" name="date_of_birth" placeholder="Date of Birth" value={patient.date_of_birth} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="street" placeholder="Street" value={patient.street} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="city" placeholder="City" value={patient.city} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="state" placeholder="State" value={patient.state} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="zipcode" placeholder="Zip Code" value={patient.zipcode} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="number" name="primary_care_prescriber_id" placeholder="Prescriber ID" value={patient.primary_care_prescriber_id.toString()} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="allergies" placeholder="Allergies" value={patient.allergies} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="member_id_number" placeholder="Member ID Number" value={patient.member_id_number} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="insurance_group_number" placeholder="Insurance Group Number" value={patient.insurance_group_number} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="insurance_rx_bin" placeholder="Insurance RX BIN" value={patient.insurance_rx_bin} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="insurance_rx_pcn" placeholder="Insurance RX PCN" value={patient.insurance_rx_pcn} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <input type="text" name="insurance_person_code" placeholder="Insurance Person Code" value={patient.insurance_person_code} onChange={handleInputChange} />
        </div>
      </form>
    </div>
  );
};

export default AddPatientPage;
  
  
  
  
  