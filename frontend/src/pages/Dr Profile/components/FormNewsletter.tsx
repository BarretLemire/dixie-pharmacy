import { FunctionComponent } from "react";
import Input from "./Input";
import "./FormNewsletter.css";
import React from "react";

export type FormNewsletterType = {
  className?: string;
  star?: string;
  x?: string;
  helloWorldPlaceholder?: string;
};

const FormNewsletter: FunctionComponent<FormNewsletterType> = ({
  className = "",
  star,
  x,
  helloWorldPlaceholder,
}) => {
  return (
    <div className={`form-newsletter ${className}`}>
      <Input helloWorldPlaceholder={helloWorldPlaceholder} />
      <div className="button">
        <img className="star-icon" alt="" src={star} />
        <div className="button1">Submit</div>
        <img className="x-icon" alt="" src={x} />
      </div>
    </div>
  );
};

export default FormNewsletter;
