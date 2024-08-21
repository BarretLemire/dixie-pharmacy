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
        helloWorldPlaceholder="Medication Name"
      />
      <FormNewsletter
        star="/star.svg"
        x="/x.svg"
        helloWorldPlaceholder="Medication Strength"
      />
      <FormNewsletter star="/star.svg" x="/x.svg" helloWorldPlaceholder="NDC" />
      <FormNewsletter
        star="/star.svg"
        x="/x.svg"
        helloWorldPlaceholder="Expiration"
      />
      <FormNewsletter
        star="/star.svg"
        x="/x.svg"
        helloWorldPlaceholder="Lot Number"
      />
    </div>
  );
};

export default Desktop;
