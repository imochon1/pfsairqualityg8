import React from "react";

import "./App.css";

// eslint-disable-next-line no-unused-vars
import Form from "./Components/Form/Form";
import HomeComponent from "./Components/Home/HomeComponent";
import Login from "./Components/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="form" element={<Form />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
