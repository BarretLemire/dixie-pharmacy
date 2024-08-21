import { FC, FunctionComponent } from "react";
import NavItem from "./NavItem";
import "./NavigationBar.css";
import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "./AccountCircleIcon";

export type NavigationBarType = {
  className?: string;
};

const NavigationBar: FC<NavigationBarType> = ({ className = "nav-bar" }) => {
  return (
    <div className={`navigation-bar ${className}`}>
      <NavItem icon="/src/assets/account-circle.svg" labelText="User" />
      <Link to="/rxsearch">
        <NavItem icon="/src/assets/pill.svg" labelText="Rx" />
      </Link>
      <Link to="/patientsearch">
        <NavItem icon="/src/assets/patient.svg" labelText="Patient" />
      </Link>
      <Link to="/drsearch">
        <NavItem icon="/src/assets/stethoscope.svg" labelText="Dr." />
      </Link>
      <Link to="/medicationsearch">
        <NavItem icon="/src/assets/kit.svg" labelText="Medication" />
      </Link>
    </div>
  );
};

export default NavigationBar;
