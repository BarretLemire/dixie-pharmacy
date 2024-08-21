import { FunctionComponent } from "react";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent from "./components/FrameComponent";
import "./Desktop.css";
import React from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <FrameComponent1 />
      <div className="desktop-1-inner">
        <FrameComponent />
      </div>
    </div>
  );
};

export default Desktop;
