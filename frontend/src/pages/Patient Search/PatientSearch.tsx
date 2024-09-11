import React, { useEffect, useState } from "react";
import "./PatientSearch.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// Patient Interface
interface Patient {
  id: number;
  first_name: string;
  last_name: string;
}

const PatientSearch: React.FC = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/patients");
        const data = await response.json();
        setPatients(data);
        // Immediately filter patients after fetching
        const results = data.filter((patient) =>
          `${patient.first_name} ${patient.last_name}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );
        setFilteredPatients(results);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, [searchQuery]);  // Adding searchQuery as a dependency

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <div className="patient-search-container">
      <div className="search-bar">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Last Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <img
          className="icon"
          src="/src/assets/search.svg"
          alt="Search Icon"
        />
        <Button 
          variant="contained" 
          className="custom-button"
          onClick={() => navigate("/newpatient")}
        >
          Add Patient
        </Button>
      </div>
      <div className="search-results">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <div key={patient.id} className="result-item" onClick={() => navigate(`/patientprofile/${patient.id}`)}>
              {patient.first_name} {patient.last_name}
            </div>
          ))
        ) : (
          <div className="no-results">No patients found</div>
        )}
      </div>
    </div>
  );
};

export default PatientSearch;
