import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
// eslint-disable-next-line no-unused-vars
import Form from "./Components/Form/Form";
import HomeComponent from "./Components/Home/HomeComponent";
// eslint-disable-next-line no-unused-vars
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <>
      <Header />
      <HomeComponent />
    </>
  );
};

export default App;
