import React from "react";
import "./homecomponent.css";
import Carousell from "../Carousell/Carousell";
import CardHolder from "../CardHolder/CardHolder";
import Testimony from "../Testimony/Testimony";

const HomeComponent = () => {
  return (
    <div className="home-component">
      <Carousell />
      <CardHolder />
      <Testimony />
    </div>
  );
};

export default HomeComponent;
