import { FunctionComponent } from "react";
import TopAppBar from "./TopAppBar";
import "./FrameComponent.css";
import React from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={`app-bar-content-parent ${className}`}>
      <header className="app-bar-content">
        <TopAppBar headline=" Rx " />
        <img
          className="screenshot-2024-08-02-at-825"
          alt=""
          src="/screenshot-20240802-at-82535am-3@2x.png"
        />
      </header>
      <div className="screenshot-2024-08-02-at-825-wrapper">
        <img
          className="screenshot-2024-08-02-at-8251"
          alt=""
          src="/screenshot-20240802-at-82535am-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
