import React, { useState } from "react";
import "./RxSearch.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface Perscription {
  rx_number: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;


  // Add more fields as per your API response
}

const RxSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Perscription[] | null>(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/prescriptions"); 
      const data = await response.json();
      setResults(data); // Update with the actual response structure
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleResultClick = (rx_number: number) => {
    navigate(`/rxprofile/${rx_number}`);
  }

  return (
    <div className="search-bar">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Rx #"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <img
          className="icon"
          loading="lazy"
          alt=""
          src="/src/assets/search.svg"
          onClick={handleSearch}
        />
      </div>
      <Button 
        variant="contained" 
        className="custom-button"
        onClick={() => navigate("/newrx")}
      >
        Add Rx
      </Button>

      {results && (
        <div className="results">
          {results.length > 0? (
            results.map((result) => (
              <div className="result-item" 
              key={result.rx_number} 
              onClick={() => handleResultClick(result.rx_number)}
              >
                <p><strong>Rx #:</strong> {result.rx_number}</p>
                <p><strong>First Name:</strong> {result.first_name}</p>
                <p><strong>Last Name:</strong> {result.last_name}</p>
                <p><strong>DOB:</strong> {result.date_of_birth}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
          {/* Example: <pre>{JSON.stringify(results, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
};

export default RxSearch;
