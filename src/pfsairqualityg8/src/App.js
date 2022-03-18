import React from "react";

import "./App.css";

// eslint-disable-next-line no-unused-vars
import Form from "./Components/Form/Form";
import HomeComponent from "./Components/Home/HomeComponent";
import Login from "./Components/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pendiente RUTAS y COntext

const App = () => {
  //const [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="form" element={<Form />} />
          <Route path="home" element={<HomeComponent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
