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
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/patients");
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  // Filter patients based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPatients([]);
      return;
    }

    const results = patients.filter((patient) =>
      `${patient.first_name} ${patient.last_name}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredPatients(results);
  }, [searchQuery, patients]);

  return (
    <div className="search-bar">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Last Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img
          className="icon"
          loading="lazy"
          alt=""
          src="/src/assets/search.svg"
        />
      </div>
      <Button 
        variant="contained" 
        className="custom-button"
        onClick={() => navigate("/newpatient")}
      >
        Add Patient
      </Button>

      {/* Render filtered patients */}
      <div className="search-results">
        {filteredPatients.map((patient) => (
          <div
            key={patient.id}
            className="search-result"
            onClick={() => navigate(`/patientprofile/${patient.id}`)} // Navigate to patient profile
          >
            {patient.first_name} {patient.last_name}
          </div>
        ))}
      </div>
    </div>
  );
};


export default PatientSearch;
