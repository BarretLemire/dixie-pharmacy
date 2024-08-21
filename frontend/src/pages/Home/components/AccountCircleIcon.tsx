import { FunctionComponent } from "react";
import "./AccountCircleIcon.css";
import React from "react";

export type AccountCircleIconType = {
  className?: string;
};

const AccountCircleIcon: FunctionComponent<AccountCircleIconType> = ({
  className = "account-circle",
}) => {
  return (
    <img
      className={`account-circle-icon ${className}`}
      loading="lazy"
      alt=""
      src="/src/assets/account-circle.svg"
    />
  );
};

export default AccountCircleIcon;
