import { FunctionComponent } from "react";
import TrailingIcon from "./TrailingIcon";
import "./TopAppBar.css";
import React from "react";

export type TopAppBarType = {
  className?: string;
};

const TopAppBar: FunctionComponent<TopAppBarType> = ({ className = "" }) => {
  return (
    <div className={`top-app-bar ${className}`}>
      <TrailingIcon icon="/icon.svg" />
      <a className="headline">Add New Doctor</a>
      <TrailingIcon icon="/icon-1.svg" />
    </div>
  );
};

export default TopAppBar;
