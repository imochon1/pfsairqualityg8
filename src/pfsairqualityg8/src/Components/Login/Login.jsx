import React, { useState, useEffect } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const userArray = [
  {
    email: "mail@mail.com",
    password: "123456",
  },
  {
    email: "mail1@mail.com",
    password: "123456",
  },
];

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  //const [globalUser, setGlobalUser] = useState({});
  // const [newUser, setNewUser] = useState({});

  const loginHandler = (key, value) => {
    setLoginInfo({
      ...loginInfo,
      [key]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(loginInfo);
    if (
      userArray.filter(
        (user) =>
          user.email === loginInfo.email && user.password === loginInfo.password
      ).length > 0
    ) {
      console.log("Login Success");

      window.location.href = "/";
    } else {
      console.log("Login Failed");
    }
  };

  useEffect(() => {}, [loginInfo]);

  return (
    <>
      <div className="main">
        <br />
        <br />
        <div className="login-wrapper">
          <div className="login-component">
            <h1>Login</h1>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-basic"
                label="email"
                variant="filled"
                style={{ marginTop: "2em" }}
                key="email"
                onChange={(e) => loginHandler("email", e.target.value)}
              />
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Password"
                  key="Password"
                  style={{ marginTop: "2em" }}
                  onChange={(e) => loginHandler("password", e.target.value)}
                />
              </div>
            </Box>
          </div>

          <Button
            variant="contained"
            onClick={(e) => submit(e)}
            style={{ marginTop: "4em" }}
          >
            Ingresar
          </Button>

          <div className="registro">
            <Link to="/form">Registrate</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
