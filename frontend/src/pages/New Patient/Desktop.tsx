import { FunctionComponent } from "react";
import TextField from "./components/TextField";
import "./Desktop.css";
import React from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <div className="text-field-parent">
        <TextField
          supportingText="First Name"
          showSupportingText
          propMinWidth="440px"
          icon="/icon.svg"
        />
        <TextField
          supportingText="Date of Birth"
          showSupportingText
          propMinWidth="440px"
          icon="/icon-1.svg"
        />
        <TextField
          supportingText="Address"
          showSupportingText
          propMinWidth="440px"
          icon="/icon-2.svg"
        />
        <TextField
          supportingText="Primary Doctor"
          showSupportingText
          propMinWidth="440px"
          icon="/icon-3.svg"
        />
        <TextField
          supportingText="Allergies"
          showSupportingText
          propMinWidth="440px"
          icon="/icon-4.svg"
        />
      </div>
      <div className="text-field-group">
        <TextField
          supportingText="PCN"
          showSupportingText
          propMinWidth="424px"
          icon="/icon-5.svg"
        />
        <TextField
          supportingText="Personal Code"
          showSupportingText
          propMinWidth="424px"
          icon="/icon-6.svg"
        />
        <TextField
          supportingText="ID#"
          showSupportingText
          propMinWidth="424px"
          icon="/icon-7.svg"
        />
        <TextField
          supportingText="Group#"
          showSupportingText
          icon="/icon-8.svg"
        />
      </div>
    </div>
  );
};

export default Desktop;
