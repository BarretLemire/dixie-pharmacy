import React, { useState, useEffect } from "react";
import "./RxSearch.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface Prescription {
  rx_number: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  // Add more fields as per your API response
}

const RxSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [filteredPrescriptions, setFilteredPrescriptions] = useState<Prescription[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/prescriptions");
        const data = await response.json();
        setPrescriptions(data);
      } catch (error) {
        console.error("Error fetching prescriptions:", error);
      }
    };

    fetchPrescriptions();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredPrescriptions([]);
      return;
    }

    const results = prescriptions.filter((prescription) =>
      prescription.rx_number.toString().includes(query) ||
      prescription.first_name.toLowerCase().includes(query.toLowerCase()) ||
      prescription.last_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPrescriptions(results);
  }, [query, prescriptions]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleResultClick = (rx_number: number) => {
    navigate(`/rxprofile/${rx_number}`);
  };

  return (
    <div className="rx-search-container">
      <div className="search-bar">
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Rx #"
            value={query}
            onChange={handleInputChange}
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
          onClick={() => navigate("/newrx")}
        >
          Add Rx
        </Button>
      </div>

      <div className="search-results">
        {filteredPrescriptions.length > 0 ? (
          filteredPrescriptions.map((prescription) => (
            <div
              key={prescription.rx_number}
              className="result-item"
              onClick={() => handleResultClick(prescription.rx_number)}
            >
              <p><strong>Rx #:</strong> {prescription.rx_number}</p>
              <p><strong>First Name:</strong> {prescription.first_name}</p>
              <p><strong>Last Name:</strong> {prescription.last_name}</p>
              <p><strong>DOB:</strong> {prescription.date_of_birth}</p>
            </div>
          ))
        ) : (
          <div className="no-results">No prescriptions found</div>
        )}
      </div>
    </div>
  );
};

export default RxSearch;
