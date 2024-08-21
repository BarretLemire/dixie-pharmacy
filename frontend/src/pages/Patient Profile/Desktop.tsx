import { FunctionComponent } from "react";
import FrameComponent from "./components/FrameComponent";
import AssistiveChip from "./components/AssistiveChip";
import "./Desktop.css";
import React from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <div className="desktop-1-inner">
        <FrameComponent
          star="/star.svg"
          star1="/star.svg"
          star2="/star.svg"
          star3="/star.svg"
          star4="/star.svg"
          x="/x.svg"
          x1="/x.svg"
          x2="/x.svg"
          x3="/x.svg"
          x4="/x.svg"
        />
      </div>
      <div className="frame-parent">
        <FrameComponent
          star="/star.svg"
          star1="/star.svg"
          star2="/star.svg"
          star3="/star.svg"
          star4="/star.svg"
          x="/x.svg"
          x1="/x.svg"
          x2="/x.svg"
          x3="/x.svg"
          x4="/x.svg"
        />
        <div className="assistive-chip-wrapper">
          <AssistiveChip />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
