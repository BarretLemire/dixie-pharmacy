import { FC, useState } from "react";
import NavItem from "./NavItem";
import "./NavigationBar.css";
import React from "react";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export type NavigationBarType = {
  className?: string;
};

const NavigationBar: FC<NavigationBarType> = ({ className = "nav-bar" }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={`navigation-bar ${className}`}>
      {/* Use image path for the account icon */}
      <div onClick={handleOpen} style={{ cursor: "pointer" }}>
        <NavItem icon="/src/assets/account-circle.svg" labelText="User" />
      </div>

      {/* Other navigation links */}
      <Link to="/">
        <NavItem icon="/src/assets/home.svg" labelText="Home" />
      </Link>
      <Link to="/rxsearch">
        <NavItem icon="/src/assets/pill.svg" labelText="Rx" />
      </Link>
      <Link to="/patientsearch">
        <NavItem icon="/src/assets/patient.svg" labelText="Patient" />
      </Link>
      <Link to="/drsearch">
        <NavItem icon="/src/assets/stethoscope.svg" labelText="Dr." />
      </Link>
      <Link to="/medsearch">
        <NavItem icon="/src/assets/kit.svg" labelText="Medication" />
      </Link>

      {/* Modal for User Profile */}
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-content" sx={{ p: 4, bgcolor: 'background.paper', borderRadius: '8px'}}>
          <h2>User Login</h2>
          {/* Username Field */}
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {/* Password Field */}
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
          />
          {/* Login Button */}
          <Button variant="contained" color="primary" fullWidth>
            Log in
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NavigationBar;
