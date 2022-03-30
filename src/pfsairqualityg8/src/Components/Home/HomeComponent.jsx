// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext } from "react";
import "./homecomponent.css";
import Carousell from "../Carousell/Carousell";
import CardHolder from "../CardHolder/CardHolder";
import Testimony from "../Testimony/Testimony";
import Header from "../Header/Header";
import { UserLoggedContext } from "../../utils/UserContext";
import { useNavigate } from "react-router-dom";
import MapComponent from "../MapComponent/MapComponent";

const HomeComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const { globalUser, setGlobalUser } = useContext(UserLoggedContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(globalUser).length === 0) {
      alert("inicia sesion");
      return navigate("/");
    }
  }, []);

  return (
    <div className="home-component">
      <Header />
      <MapComponent />
      <Carousell />
      <CardHolder />
      <Testimony />
    </div>
  );
};

export default HomeComponent;
