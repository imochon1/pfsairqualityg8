import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import PersonIcon from "@mui/icons-material/Person";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // //localStorage.removeItem("userStorage");

  const logout = () => {
    localStorage.removeItem("userStorage");
    navigate("/");
  };

  return (
    <div className="menu-header">
      <div className="menu-items">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h3> Home </h3>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3> Login </h3>
        </Link>
        <div className="icon-wrapper">
          <PersonIcon className="icon" />
        </div>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
