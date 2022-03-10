import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <div className="menu-header">
      <div className="menu-items">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3> Home </h3>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <h3> Login </h3>
        </Link>
        <div className="icon-wrapper">
          <PersonIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
