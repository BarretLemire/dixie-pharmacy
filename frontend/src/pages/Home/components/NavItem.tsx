import { FunctionComponent} from "react";
import "./NavItem.css";
import React from "react";

export type NavItemType = {
  icon: string;
  labelText: string;
};

const NavItem: FunctionComponent<NavItemType> = ({ icon, labelText }) => {
  return (
    <div className={`nav-item`}>
      <img className="nav-icon" loading="lazy" alt="" src={icon} />

      {labelText}
    </div>
  );
};

export default NavItem;
