import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Link, useNavigate } from "react-router-dom";

import validateEmail from "../../utils/validateEmail";
//import validatePassword from "../../utils/passwordFormat";
import { userLogin } from "../../Services/userService";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userStorage, setUserStorage] = useState(
    localStorage.getItem("userStorage")
      ? JSON.stringify(localStorage.getItem("userStorage"))
      : null
  );
  //Tambien hay que realizar un storage de nuestro usuarioo/backendd
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

    /*const passwordFormatValidator = validatePassword(loginInfo.password);
    if (!passwordFormatValidator) {
      setErrorPassword(true);
      console.log(
        "Tu password debe de ser tener 6 carateres y uno especial",
        loginInfo.password
      );
      return;
    }*/
    //

    userLogin(loginInfo)
      .then((isValid) => {
        console.log("login info data", isValid);
        if (isValid === true) {
          setLoginSucces(true);
          return navigate("/home");
        } else {
          alert("Usuario o contraseña incorrectos");
          return navigate("/");
        }
      })
      .catch((err) => {
        console.log("login info error", err);
      });
    userLogin(loginInfo);
  };
  useEffect(() => {}, [loginInfo]);
  useEffect(() => {
    if (localStorage.getItem("userStorage")) {
      return navigate("/home");
    } //getItem removeItem, setItem
    console.log("primera ves");
  }, []);

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

  const succesHandler = (response) => {
    if (response) {
      localStorage.setItem(
        "userStorage",
        JSON.stringify({
          name: "isaac",
          email: "",
          image: "",
        })
      );
    }

    console.log("Exitoso", response);
    return navigate("/home");
  };

  const failureHandler = (error) => {
    console.log("falido", error);
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
        {userStorage ? (
          navigate("/home")
        ) : (
          <GoogleLogin
            clientId="812397687165-lp1mni9pliq4hm9sgb9aui46chud5bjk.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={succesHandler}
            onFailure={failureHandler}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    </>
  );
};

export default Login;
