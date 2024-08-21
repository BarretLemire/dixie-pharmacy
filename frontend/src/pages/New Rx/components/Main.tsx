import { FunctionComponent } from "react";
import TopAppBar from "./TopAppBar";
import "./Main.css";
import React from "react";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <header className={`main ${className}`}>
      <div className="content">
        <TopAppBar
          headline=" New RX"
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

export default Main;
