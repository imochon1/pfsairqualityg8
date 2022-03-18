import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Link, useNavigate } from "react-router-dom";

import loginService from "../../Services/authentication";
import validateEmail from "../../utils/validateEmail";
import validatePassword from "../../utils/passwordFormat";
import { userLogin } from "../../Services/userService";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [loginSucces, setLoginSucces] = useState(false);

  let navigate = useNavigate();

  const loginHandler = (key, value) => {
    setLoginInfo({
      ...loginInfo,
      [key]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    console.log("HEY ", loginInfo);

    if (Object.keys(loginInfo).length == 0) {
      setErrorEmail(true);
      setErrorPassword(true);

      console.log(loginInfo);
      return; //hasta aqui funciona
    }

    if (loginInfo.email?.length === 0) {
      console.log("email vacio");
      setErrorEmail(true);
      setErrorPassword(false);

      return;
    }
    console.log(loginInfo.password === undefined);
    if (loginInfo.password == undefined || loginInfo.password?.length == 0) {
      console.log("Contraseña Vacia");
      setErrorEmail(false);
      setErrorPassword(true);
      return;
    }

    /** Se valida el email*/
    const emailValidation = validateEmail(loginInfo.email);
    if (!emailValidation) {
      setErrorEmail(true);
      console.log("email con formato incorrecto", loginInfo.email);
      return;
    }

    const passwordFormatValidator = validatePassword(loginInfo.password);
    if (!passwordFormatValidator) {
      setErrorPassword(true);
      console.log(
        "Tu password debe de ser tener 6 carateres y uno especial",
        loginInfo.password
      );
      return;
    }

    //

    loginService(loginInfo)
      .then((isValid) => {
        console.log("login info data", isValid);
        if (isValid === true) {
          setLoginSucces(true);

          return navigate("/home");
        } else {
          alert("Usuario o contraseña incorrectos");
          return navigate("/login");
        }
      })
      .catch((err) => {
        console.log("login info error", err);
      });
    userLogin(loginInfo);
  };
  useEffect(() => {}, [loginInfo]);

  const styleRef = useRef(null);

  const hoverHandler = (e) => {
    e.preventDefault();
    console.log(styleRef.current);
    styleRef.current.borderColor = "white";
    styleRef.current.backgroundColor = "white";
    styleRef.current.color = "black";
  };

  const leaveHover = (e) => {
    e.preventDefault();
    styleRef.current.borderColor = "transparent";
    styleRef.current.backgroundColor = "transparent";
    styleRef.current.color = "white";
  };

  return (
    <>
      <div className="main">
        <br />
        <section className="banner-info">
          <h2>Mejora Tu Aire. Mejora Tu Vida</h2>
        </section>
        <br />
        <br />
        <div
          className="login-wrapper"
          ref={styleRef}
          onMouseEnter={(e) => hoverHandler(e)}
          onMouseOut={(e) => leaveHover(e)}
        >
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
                error={errorEmail}
                helperText={errorEmail ? "Ingresa tu Mail" : ""}
                id="filled-basic"
                label="email"
                variant="filled"
                style={{ marginTop: "2em" }}
                key="email"
                onChange={(e) => loginHandler("email", e.target.value)}
              />
              {errorEmail ? (
                <Alert severity="error">
                  <strong>Error:</strong> Ingresa tu email
                </Alert>
              ) : (
                <></>
              )}
              <div>
                <TextField
                  error={errorPassword}
                  helperText={errorPassword ? "Contraseña incorrecta" : ""}
                  variant="filled"
                  type="password"
                  required
                  id="outlined-required"
                  label="Password"
                  key="Password"
                  style={{ marginTop: "2em" }}
                  onChange={(e) => loginHandler("password", e.target.value)}
                />
                {errorPassword ? (
                  <Alert severity="error">
                    <strong>Error:</strong> Ingresa tu Password
                  </Alert>
                ) : (
                  <></>
                )}
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
            <Link to="/form" style={{ textDecoration: "none", color: "white" }}>
              Registrate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
