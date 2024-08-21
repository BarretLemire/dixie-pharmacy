import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Input from "./Input";
import "./FormNewsletter.css";
import React from "react";

export type FormNewsletterType = {
  className?: string;
  star?: string;
  button?: string;
  x?: string;
  helloWorldPlaceholder?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const FormNewsletter: FunctionComponent<FormNewsletterType> = ({
  className = "",
  star,
  button,
  x,
  propBackgroundColor,
  helloWorldPlaceholder,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={`form-newsletter ${className}`}>
      <Input helloWorldPlaceholder={helloWorldPlaceholder} />
      <div className="button" style={buttonStyle}>
        <img className="star-icon" alt="" src={star} />
        <div className="button1">{button}</div>
        <img className="x-icon" alt="" src={x} />
      </div>
    </div>
  );
};

export default FormNewsletter;
