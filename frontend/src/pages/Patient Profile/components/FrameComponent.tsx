import { FunctionComponent } from "react";
import FormNewsletter from "./FormNewsletter";
import "./FrameComponent.css";
import React from "react";

export type FrameComponentType = {
  className?: string;
  star?: string;
  star1?: string;
  star2?: string;
  star3?: string;
  star4?: string;
  x?: string;
  x1?: string;
  x2?: string;
  x3?: string;
  x4?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  star,
  star1,
  star2,
  star3,
  star4,
  x,
  x1,
  x2,
  x3,
  x4,
}) => {
  return (
    <div className={`form-newsletter-parent ${className}`}>
      <FormNewsletter star={star} x={x} helloWorldPlaceholder="First Name" />
      <FormNewsletter star={star1} x={x1} helloWorldPlaceholder="D.O.B." />
      <FormNewsletter star={star2} x={x2} helloWorldPlaceholder="Address" />
      <FormNewsletter
        star={star3}
        x={x3}
        helloWorldPlaceholder="Primary Doctor"
      />
      <FormNewsletter star={star4} x={x4} helloWorldPlaceholder="Allergies" />
    </div>
  );
};

export default FrameComponent;
