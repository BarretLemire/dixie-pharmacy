import { FunctionComponent } from "react";
import "./BottomAppBar.css";
import React from "react";

export type BottomAppBarType = {
  className?: string;
};

const BottomAppBar: FunctionComponent<BottomAppBarType> = ({
  className = "",
}) => {
  return (
    <div className={`bottom-app-bar ${className}`}>
      <div className="leading-icon">
        <div className="icon-1">
          <div className="container">
            <div className="state-layer">
              <img className="icon" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="fab-elevation-override">
        <div className="fab">
          <div className="state-layer1">
            <img className="icon1" alt="" src="/icon-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomAppBar;
