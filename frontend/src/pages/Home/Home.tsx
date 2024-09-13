import { FC, FunctionComponent, ReactNode, useState } from "react";
import "./Home.css";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import AccountCircleIcon from "./components/AccountCircleIcon";

const Home: FC = () => {
  const [shows, setShow] = useState(false);


  const toggleModal = () => {
    setShow(!shows);
  };
  
  
  return (
    <div className="home">
      <section className="dixie-logo-1-wrapper">
        <img
          className="dixie-logo-1"
          loading="lazy"
          alt=""
          src="/src/assets/big-dixie-logo.svg"
        />
      </section>
    </div>
  );
};

export default Home;
