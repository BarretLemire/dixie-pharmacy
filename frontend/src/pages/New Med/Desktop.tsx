import { FunctionComponent } from "react";
import TextField from "./components/TextField";
import "./Desktop.css";
import React from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <TextField
        supportingText="Medication Strength"
        showSupportingText
        icon="/icon.svg"
      />
      <TextField
        supportingText="NDC-National Drug Code"
        showSupportingText
        icon="/icon-1.svg"
      />
      <TextField
        supportingText="Expiration"
        showSupportingText
        icon="/icon-2.svg"
      />
      <TextField
        supportingText="Lot Number"
        showSupportingText
        icon="/icon-3.svg"
      />
    </div>
  );
};

export default Desktop;
