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
  headline = " Rx ",
}) => {
  return (
    <div className={`top-app-bar ${className}`}>
      <TrailingIcon
        icon="/icon-1.svg"
        propMarginTop="unset"
        propMarginRight="unset"
      />
      <a className="headline">{headline}</a>
      <TrailingIcon icon="/icon-2.svg" />
    </div>
  );
};

export default TopAppBar;
