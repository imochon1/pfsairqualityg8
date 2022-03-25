import React from "react";

import "./App.css";

// eslint-disable-next-line no-unused-vars
import Form from "./Components/Form/Form";
import HomeComponent from "./Components/Home/HomeComponent";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./utils/UserContext";

//pendiente RUTAS y COntext

//se envuelven rutas n provider para que ibtengan el context

const App = () => {
  return (
    <>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="form" element={<Form />} />
            <Route path="home" element={<HomeComponent />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};

export default App;
