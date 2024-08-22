import { FC, FunctionComponent, ReactNode, useState } from "react";
import "./Home.css";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import AccountCircleIcon from "./components/AccountCircleIcon";
import LogInModal from "./components/LogInModal";



const Home: FC = () => {
  const [shows, setShow] = useState(false);
  

  const toggleModal = () => {
    setShow(!shows);
  };


  return (
    <div className="home">
      <button onClick={toggleModal}>Log In</button>
        <LogInModal shows={shows} onClose={toggleModal}>
          <form style={{display: "flex", flexDirection: 'column'}}>
            <label>
              Username:
            </label>
            <input style={{marginBottom: "10px"}} />  
            <label>
              Password:
            </label>
            <input style={{marginBottom: "10px"}}/>
            <button>Log In</button>
          </form>
        </LogInModal>
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
