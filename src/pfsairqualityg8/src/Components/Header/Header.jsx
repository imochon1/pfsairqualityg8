import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div className="menu-header">
      <div className="menu-items">
        <Link to="/home">
          <h3> Home </h3>
        </Link>
        <Link to="/login">
          <h3> Login </h3>
        </Link>
        <Button variant="contained">Contained</Button>
      </div>
    </div>
  );
};

export default Header;
