import React from "react";
import "./header.css";

import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div className="menu-header">
      <div className="menu-wrapper">
        <Button variant="contained">Contained</Button>
      </div>
    </div>
  );
};

export default Header;
