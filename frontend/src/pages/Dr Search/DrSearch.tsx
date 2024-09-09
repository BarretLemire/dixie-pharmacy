import React, { useState, useEffect } from "react";
import "./DrSearch.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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

const DrSearch: React.FC = () => {
  const [prescribers, setPrescribers] = useState<Prescriber[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrescribers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/prescribers");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPrescribers(data);
      } catch (error) {
        console.error("Error fetching prescribers:", error);
      }
    };

    fetchPrescribers();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredPrescribers = prescribers.filter((p) =>
    `${p.first_name} ${p.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Inside DrSearch component
  const handlePrescriberClick = (id: number) => {
    navigate(`/drprofile/${id}`);
  };

  // Inside return statement
  {
    filteredPrescribers.map((prescriber) => (
      <div
        key={prescriber.id}
        className="result-item"
        onClick={() => handlePrescriberClick(prescriber.id)}
      >
        {prescriber.first_name} {prescriber.last_name} -{" "}
        {prescriber.prescriber_type}
      </div>
    ));
  }

  return (
    <div className="dr-search-container">
      <div className="search-bar">
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Dr Name"
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
          onClick={() => navigate("/newdr")}
        >
          Add Dr
        </Button>
      </div>
      <div className="search-results">
        {filteredPrescribers.length > 0 ? (
          filteredPrescribers.map((prescriber) => (
            <div
              key={prescriber.id}
              className="result-item"
              onClick={() => navigate(`/drprofile/${prescriber.id}`)}
            >
              {prescriber.first_name} {prescriber.last_name} -{" "}
              {prescriber.prescriber_type}
            </div>
          ))
        ) : (
          <div className="no-results">No doctors found</div>
        )}
      </div>
    </div>
  );
};

export default DrSearch;
