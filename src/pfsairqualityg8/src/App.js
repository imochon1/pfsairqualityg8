// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";

import "./App.css";

// eslint-disable-next-line no-unused-vars
import Form from "./Components/Form/Form";
import HomeComponent from "./Components/Home/HomeComponent";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./utils/UserContext";
import ProtectedRoute from "./utils/PrivateRoute";
//import { UserLoggedContext } from "./utils/UserContext";

//se envuelven rutas n provider para que ibtengan el context

const App = () => {
  // eslint-disable-next-line no-unused-vars

  //const { globalUser } = useContext(UserLoggedContext);

  return (
    <>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="form" element={<Form />} />
            <Route
              path="home"
              element={
                <ProtectedRoute user>
                  <HomeComponent />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};

export default App;
