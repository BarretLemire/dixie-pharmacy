import React, { useState, useEffect } from "react";
import "./MedSearch.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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

const MedSearch: React.FC = () => {
  const navigate = useNavigate();
  const [medications, setMedications] = useState<Medication[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMedications = async () => {
      const response = await fetch("http://127.0.0.1:8000/rx-items");
      const data = await response.json();
      setMedications(data);
    };

    fetchMedications();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredMedications = medications.filter(med =>
    med.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="med-search-container">
      <div className="search-bar">
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Medication"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img
            className="icon"
            loading="lazy"
            alt="Search Icon"
            src="/src/assets/search.svg"
          />
        </div>
        <Button 
          variant="contained" 
          className="custom-button"
          onClick={() => navigate("/newmed")}
        >
          Add Med
        </Button>
      </div>
      <div className="search-results">
        {filteredMedications.length > 0 ? (
          filteredMedications.map((med) => (
            <div key={med.id} className="result-item" onClick={() => navigate(`/medprofile/${med.id}`)}>
              {med.name} - {med.strength}
            </div>
          ))
        ) : (
          <div className="no-results">No medications found</div>
        )}
      </div>
    </div>
  );
};

export default MedSearch;
