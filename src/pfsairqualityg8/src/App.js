import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
// eslint-disable-next-line no-unused-vars
import Form from "./Components/Form/Form";
import HomeComponent from "./Components/Home/HomeComponent";

import Example from "./Components/Carousell";

const App = () => {
  return (
    <>
      <Header />
      <HomeComponent />
      <Example />
    </>
  );
};

export default App;
