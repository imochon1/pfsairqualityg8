import React, { useContext, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { UserLoggedContext } from "../../utils/UserContext";
import ResponsiveAppBar from "../NavBar/NavBar";
import { userLogout } from "../../Services/userService";

const Header = () => {
  const navigate = useNavigate();
  // //localStorage.removeItem("userStorage");
  // eslint-disable-next-line no-unused-vars
  const { globalUser, setGlobalUser } = useContext(UserLoggedContext);
  //pasar a services

  const logout = () => {
    userLogout();
    setGlobalUser({});
    navigate("/");
  };

  useEffect(() => {
    if (globalUser === {}) {
      setGlobalUser({});
      navigate("/");
    }
  }, []);

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
        <h3>Hola {globalUser.name}</h3>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>
      <br />
      <ResponsiveAppBar />
    </div>
  );
};

export default Header;
