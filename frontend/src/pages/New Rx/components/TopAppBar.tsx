import { FunctionComponent } from "react";
import "./TopAppBar.css";
import React from "react";

export type TopAppBarType = {
  className?: string;
  headline?: string;
  show3rdTrailingIcon?: boolean;
  show1stTrailingIcon?: boolean;
  show2ndTrailingIcon?: boolean;
};

const TopAppBar: FunctionComponent<TopAppBarType> = ({
  className = "",
  headline = " New RX",
  show3rdTrailingIcon = false,
  show1stTrailingIcon = false,
  show2ndTrailingIcon = false,
}) => {
  return (
    <div className={`top-app-bar ${className}`}>
      <div className="leading-icon">
        <div className="container">
          <div className="state-layer">
            <img className="icon" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <h3 className="headline">{headline}</h3>
      <div className="trailing-icon">
        {show1stTrailingIcon && (
          <div className="trailing-icon-1">
            <div className="container1">
              <div className="state-layer1">
                <img className="icon1" alt="" src="/icon-1.svg" />
              </div>
            </div>
          </div>
        )}
        {show2ndTrailingIcon && (
          <div className="trailing-icon-2">
            <div className="container2">
              <div className="state-layer2">
                <img className="icon2" alt="" src="/icon-2.svg" />
              </div>
            </div>
          </div>
        )}
        {show3rdTrailingIcon && (
          <div className="trailing-icon-3">
            <div className="container3">
              <div className="state-layer3">
                <img className="icon3" alt="" src="/icon-3.svg" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopAppBar;
