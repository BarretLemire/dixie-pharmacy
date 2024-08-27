import React from "react";
import "./RxSearch.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"; // Import MUI Button
import { useNavigate } from "react-router-dom";

const RxSearch: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="search-bar">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Rx #"
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
        onClick={() => navigate("/newrx")}
      >
        Add Rx
      </Button>
    </div>
  );
};

export default RxSearch;
