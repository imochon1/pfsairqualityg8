import React from "react";
import "./homecomponent.css";
import Carousell from "../Carousell/Carousell";
import CardHolder from "../CardHolder/CardHolder";
import Testimony from "../Testimony/Testimony";
import Header from "../Header/Header";
//import UserContext from "../../utils/UserContext";

const HomeComponent = () => {
  //const msg = useContext(UserContext);

  return (
    <div className="home-component">
      <Header />
      <Carousell />
      <CardHolder />
      <Testimony />
    </div>
  );
};

export default HomeComponent;
