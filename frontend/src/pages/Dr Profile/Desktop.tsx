import { FunctionComponent } from "react";
import FormNewsletter from "./components/FormNewsletter";
import "./Desktop.css";
import React from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <FormNewsletter
        star="/star.svg"
        x="/x.svg"
        helloWorldPlaceholder="Last Name"
      />
      <FormNewsletter
        star="/star.svg"
        x="/x.svg"
        helloWorldPlaceholder="First Name"
      />
      <FormNewsletter
        star="/star.svg"
        x="/x.svg"
        helloWorldPlaceholder="Doctor Type"
      />
      <FormNewsletter
        star="/star.svg"
        x="/x.svg"
        helloWorldPlaceholder="Address"
      />
      <FormNewsletter
        star="/star.svg"
        x="/x.svg"
        helloWorldPlaceholder="Phone Number"
      />
      <FormNewsletter star="/star.svg" x="/x.svg" helloWorldPlaceholder="DEA" />
      <FormNewsletter star="/star.svg" x="/x.svg" helloWorldPlaceholder="NPI" />
    </div>
  );
};

export default Desktop;
