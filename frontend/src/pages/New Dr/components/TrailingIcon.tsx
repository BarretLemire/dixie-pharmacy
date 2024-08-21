import { FunctionComponent } from "react";
import "./TrailingIcon.css";
import React from "react";

export type TrailingIconType = {
  className?: string;
  icon?: string;
};

const TrailingIcon: FunctionComponent<TrailingIconType> = ({
  className = "",
  icon,
}) => {
  return (
    <div className={`trailing-icon ${className}`}>
      <div className="container">
        <div className="state-layer">
          <img className="icon" loading="lazy" alt="" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default TrailingIcon;
