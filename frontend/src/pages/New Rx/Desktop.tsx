import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop.css"; // Assuming you're using a separate CSS file
import dixieLogo from "../../assets/dixie-logo-1.svg"; // Adjust the path as needed
import trashIcon from "../../assets/trash.svg";
import saveIcon from "../../assets/save.svg";
import dropdownIcon from "../../assets/search.svg";

const NewRxPage: React.FC = () => {
  const navigate = useNavigate();

  // State for patient search and data
  const [patients, setPatients] = useState<{ id: number; name: string }[]>([]);
  const [patientSearch, setPatientSearch] = useState('');
  const [filteredPatients, setFilteredPatients] = useState<{ id: number; name: string }[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);

  
  // State for form fields
  const [prescriberId, setPrescriberId] = useState<number>(0);
  const [rxItemId, setRxItemId] = useState<number>(0);
  const [directions, setDirections] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [quantityDispensed, setQuantityDispensed] = useState<number>(0);
  const [refills, setRefills] = useState<number>(0);
  const [techInitials, setTechInitials] = useState<string>("");
  const [prescribedDate, setPrescribedDate] = useState<string>('');


  // Fetch patient data from API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/patients");
        const data = await response.json();
        const patientNames = data.map((patient: { id: number; first_name: string; last_name: string }) => ({
          id: patient.id,
          name: `${patient.first_name} ${patient.last_name}`,
        }));
        setPatients(patientNames);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatients();
  }, []);

  // Filter patient names as the user types
  useEffect(() => {
    setFilteredPatients(
      patients.filter((patient) =>
        patient.name.toLowerCase().includes(patientSearch.toLowerCase())
      )
    );
  }, [patientSearch, patients]);

  // Handle patient selection
  const handlePatientSelect = (patientId: number, patientName: string) => {
    setSelectedPatientId(patientId);
    setPatientSearch(patientName); // Set the input field to the selected name
    setFilteredPatients([]); // Clear the suggestion list after selecting
  };

  // Clear selected patient
  const handleClearPatient = () => {
    setSelectedPatientId(null);
    setPatientSearch(""); // Clear the search field
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPrescription = {
      patient_id: selectedPatientId, // Selected patient ID from search
      prescriber_id: prescriberId,
      rx_item_id: rxItemId,
      directions: directions,
      quantity: quantity,
      quantity_dispensed: quantityDispensed,
      refills: refills,
      prescribed_date: prescribedDate,
      tech_initials: techInitials,
      status: "pending",
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/prescriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPrescription),
      });

      if (response.ok) {
        console.log("Prescription created successfully");
      } else {
        console.error("Failed to create prescription");
      }
    } catch (error) {
      console.error("Error creating prescription:", error);
    }
  };

  
  const handleCancelClick = () => {
    navigate("/rxsearch");
  };

  return (
    <div className="new-rx-container">
      <header className="new-rx-header">
        <div className="logo-container">
          <img src={dixieLogo} alt="logo" />
        </div>
        <h1>New RX</h1>
      </header>
      <div className="new-rx-content">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Patient Name Search</label>
            <div className="input-icon">
              <input 
                type="text"
                placeholder="First Name Last Name"
                value={patientSearch} 
                onChange={(e) => setSelectedPatientId(parseInt(e.target.value))} 
              />
              {patientSearch && (
                <button className="clear-button" onClick={handleClearPatient}>
                  Clear
                </button>
              )}
            </div>
            <div>
              {filteredPatients.map((patient) => (
                <div key={patient.id} onClick={() => handlePatientSelect(patient.id, patient.name)}>
                  {patient.name}
                  </div>
              ))}
            </div>
          </div>
          
          <div className="form-group">
            <label>Prescriber Id</label>
            <div className="input-icon">
              <input 
                type="text" 
                onChange={(e) => setPrescriberId(parseInt(e.target.value))} 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Medication Id</label>
            <div className="input-icon">
              <input 
                type="text" 
                onChange={(e) => setRxItemId(parseInt(e.target.value))} 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Quantity Written</label>
            <input 
              type="text" 
              onChange={(e) => setQuantity(parseInt(e.target.value))} 
            />
          </div>
          <div className="form-group">
            <label>Quantity Dispensed</label>
            <input 
              type="text" 
              onChange={(e) => setQuantityDispensed(parseInt(e.target.value))} 
            />
          </div>
          <div className="form-group">
            <label>Refills</label>
            <input 
              type="text" 
              onChange={(e) => setRefills(parseInt(e.target.value))} 
            />
          </div>
          <div className="form-group">
            <label>Tech Initials</label>
            <input 
              type="text" 
              onChange={(e) => setTechInitials(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Date of RX</label>
            <input 
              type="date" 
              onChange={(e) => setPrescribedDate(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Instructions</label>
            <textarea 
              placeholder="Instructions" 
              onChange={(e) => setDirections(e.target.value)} 
            />
          </div>
          <div className="button-group">
            <button className="cancel-button" onClick={handleCancelClick}>
              <img src={trashIcon} alt="Cancel" className="button-icon" />
              Cancel
            </button>
            <button className="save-button" type="submit">
              <img src={saveIcon} alt="Save" className="button-icon" />
              Save and Continue to Label
            </button>
          </div>
        </form>
        <div className="image-container">
          <div className="scan-image">
            <p>Scan Image</p>
          </div>
          <div className="label-image">
            <p>Label</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRxPage;
