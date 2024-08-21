import { FunctionComponent } from "react";
import TrailingIcon from "./TrailingIcon";
import "./TopAppBar.css";
import React from "react";

export type TopAppBarType = {
  className?: string;
  headline?: string;
};

const TopAppBar: FunctionComponent<TopAppBarType> = ({
  className = "",
  headline = "Medication Search",
}) => {
  return (
    <div className={`top-app-bar ${className}`}>
      <TrailingIcon
        icon="/icon-1.svg"
        propMarginTop="unset"
        propMarginRight="unset"
      />
      <div className="headline">{headline}</div>
      <TrailingIcon icon="/icon-2.svg" />
    </div>
  );
};

export default TopAppBar;
