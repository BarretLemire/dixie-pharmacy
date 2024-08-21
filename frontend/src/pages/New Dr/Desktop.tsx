import { FunctionComponent } from "react";
import TextField from "./components/TextField";
import "./Desktop.css";
import React from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <TextField
        supportingText="First Name"
        showSupportingText
        icon="/icon.svg"
      />
      <TextField
        supportingText="Doctor Type"
        showSupportingText
        icon="/icon-1.svg"
      />
      <TextField
        supportingText="Address"
        showSupportingText
        icon="/icon-2.svg"
      />
      <TextField
        supportingText="Phone Number"
        showSupportingText
        icon="/icon-3.svg"
      />
      <TextField supportingText="DEA" showSupportingText icon="/icon-4.svg" />
      <TextField supportingText="NPI" showSupportingText icon="/icon-5.svg" />
    </div>
  );
};

export default Desktop;
