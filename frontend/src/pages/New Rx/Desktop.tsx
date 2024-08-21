import { FunctionComponent } from "react";
import Main from "./components/Main";
import FormContainer from "./components/FormContainer";
import "./Desktop.css";
import React from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-2">
      <Main />
      <div className="sidebar">
        <FormContainer />
      </div>
    </div>
  );
};

export default Desktop;
