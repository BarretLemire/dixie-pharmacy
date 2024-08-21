import { FunctionComponent } from "react";
import FormNewsletter from "./FormNewsletter";
import Button from "./Button";
import "./FrameComponent.css";
import React from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={`frame-group ${className}`}>
      <div className="frame-wrapper">
        <div className="form-newsletter-parent">
          <FormNewsletter
            star="/star.svg"
            button="Add"
            x="/x.svg"
            propBackgroundColor="#fae1fa"
            helloWorldPlaceholder="Patient Name"
          />
          <FormNewsletter
            star="/star.svg"
            button="Add"
            x="/x.svg"
            propBackgroundColor="#fae1fa"
            helloWorldPlaceholder="Medication Name"
          />
          <FormNewsletter
            star="/star.svg"
            button="Add"
            x="/x.svg"
            propBackgroundColor="#fae1fa"
            helloWorldPlaceholder="Doctor Name"
          />
        </div>
      </div>
      <div className="form-newsletter-group">
        <FormNewsletter
          star="/star.svg"
          button="Add"
          x="/x.svg"
          propBackgroundColor="#fae1fa"
          helloWorldPlaceholder="Quantity Dispensed"
        />
        <div className="form-newsletter-wrapper">
          <div className="form-newsletter1">
            <div className="input1">
              <div className="hello-world1">Refills</div>
            </div>
            <div className="button3">
              <img className="star-icon1" alt="" src="/star.svg" />
              <div className="button4">Submit</div>
              <img className="x-icon1" alt="" src="/x.svg" />
            </div>
          </div>
        </div>
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
      <div className="button-wrapper">
        <Button labelText="Edit" />
      </div>
    </div>
  );
};

export default FrameComponent;
