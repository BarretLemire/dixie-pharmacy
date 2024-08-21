import { FunctionComponent } from "react";
import FormNewsletter from "./FormNewsletter";
import "./FormContainer.css";
import React from "react";

export type FormContainerType = {
  className?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  className = "",
}) => {
  return (
    <div className={`form-container ${className}`}>
      <FormNewsletter
        star="/star.svg"
        button="Add"
        x="/x.svg"
        propBackgroundColor="#fae1fa"
        helloWorldPlaceholder="Quantity Dispensed"
      />
      <FormNewsletter
        star="/star.svg"
        button="Submit"
        x="/x.svg"
        propBackgroundColor="#2c2c2c"
        helloWorldPlaceholder="Refills"
      />
      <div className="form-duplicate">
        <FormNewsletter
          star="/star.svg"
          button="Submit"
          x="/x.svg"
          propBackgroundColor="#2c2c2c"
          helloWorldPlaceholder="Tech Initials"
        />
        <FormNewsletter
          star="/star.svg"
          button="Submit"
          x="/x.svg"
          helloWorldPlaceholder="Date of RX"
        />
      </div>
    </div>
  );
};

export default FormContainer;
