import { FunctionComponent } from "react";
import TrailingIcon from "./components/TrailingIcon";
import FrameComponent from "./components/FrameComponent";
import "./Desktop.css";
import React from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <TrailingIcon
        icon="/icon.svg"
        propMarginTop="-367px"
        propMarginRight="-433px"
      />
      <FrameComponent />
      <div className="desktop-1-child" />
    </div>
  );
};

export default Desktop;
