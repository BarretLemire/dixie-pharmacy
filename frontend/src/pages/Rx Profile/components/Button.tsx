import { FunctionComponent } from "react";
import "./Button.css";
import React from "react";

export type ButtonType = {
  className?: string;
  labelText?: string;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  labelText = "Edit",
}) => {
  return (
    <button className={`button2 ${className}`}>
      <div className="state-layer4">
        <div className="icon-wrapper">
          <img className="icon4" alt="" src="/icon-4.svg" />
        </div>
        <div className="label-text">{labelText}</div>
      </div>
    </button>
  );
};

export default Button;
