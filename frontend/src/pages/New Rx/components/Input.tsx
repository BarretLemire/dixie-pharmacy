import { FunctionComponent } from "react";
import "./Input.css";
import React from "react";

export type InputType = {
  className?: string;
  helloWorldPlaceholder?: string;
};

const Input: FunctionComponent<InputType> = ({
  className = "",
  helloWorldPlaceholder,
}) => {
  return (
    <div className={`input ${className}`}>
      <input
        className="hello-world"
        placeholder={helloWorldPlaceholder}
        type="text"
      />
    </div>
  );
};

export default Input;
