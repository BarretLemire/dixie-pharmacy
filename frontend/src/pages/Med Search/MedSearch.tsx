import React from "react";
import "./MedSearch.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const MedSearch: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="search-bar">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Medication"
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
        onClick={() => navigate("/newmed")}
      >
        Add Med
      </Button>
    </div>
  );
};

export default MedSearch;
