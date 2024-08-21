import { FunctionComponent } from "react";
import TopAppBar from "./TopAppBar";
import "./FrameComponent1.css";
import React from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <header className={`frame-parent ${className}`}>
      <div className="top-app-bar-parent">
        <TopAppBar
          headline="              Current Rx"
          show3rdTrailingIcon
          show1stTrailingIcon
          show2ndTrailingIcon
        />
        <img
          className="tablelist-icon"
          loading="lazy"
          alt=""
          src="/09-tablelist@2x.png"
        />
      </div>
      <img
        className="screenshot-2024-08-02-at-825"
        alt=""
        src="/screenshot-20240802-at-82535am-2@2x.png"
      />
    </header>
  );
};

export default FrameComponent1;
