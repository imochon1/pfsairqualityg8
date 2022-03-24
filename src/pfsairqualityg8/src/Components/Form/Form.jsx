import React, { useState, useEffect } from "react";
import "./Form.css";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";

import validateEmail from "../../utils/validateEmail";

import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
//import validatePassword from "../../utils/passwordFormat";
import { createUser } from "../../Services/userService";

//  rutas,estilos,arreglar alerts,validaciones mail. fotos para header  //

const Form = () => {
  const [inputObject, setInputObject] = useState({});

  const [inputErrorNombre, setInputErrorNombre] = useState(false);

  const [inputErrorApellido, setInputErrorApellido] = useState(false);

  const [inputErrorEmail, setInputErrorEmail] = useState(false);

  const [inputErrorPassword, setInputErrorPassword] = useState(false);

  const [inputErrorConfirmPassword, setInputErrorConfirmPassword] =
    useState(false);

  // eslint-disable-next-line no-unused-vars

  const errorArray = [
    "Ingresa tu nombre",
    "Ingresa tu Apellido",
    "Ingresa tu Email",
    "Ingresa tu Password",
    "Verifica tu Password",
  ];

  // enlint-disable-next-line no-unused-vars
  const countriesArray = [
    { nombre: "Mexico" },
    { nombre: "El Salvador" },
    { nombre: "Peru" },
    { nombre: "Guatemala" },
    { nombre: "Estados Unidos" },
    { nombre: "Argentina" },
    { nombre: "España" },
    { nombre: "Brazil" },
    { nombre: "Argentina" },
    { nombre: "Singapur" },
    { nombre: "Canada" },
    { nombre: "Honduras" },
    { nombre: "Chile" },
    { nombre: "España" },
    { nombre: "Francia" },
    { nombre: "Italia" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputObject);
    ///Revisa la validacion
    const inputValuesArray = Object.values(inputObject);
    const filteredArray = inputValuesArray.filter((input) => input !== "");

    if (filteredArray.length === 0) {
      setInputErrorNombre(true);
      setInputErrorApellido(true);
      setInputErrorEmail(true);
      setInputErrorPassword(true);
      setInputErrorConfirmPassword(true);

      return;
    } else if (!inputObject.nombre) {
      setInputErrorNombre(true);
      setInputErrorApellido(false);
      setInputErrorEmail(false);
      setInputErrorPassword(false);
      setInputErrorConfirmPassword(false);

      console.log("nombre");

      return;
    } else if (inputObject.apellido?.length === 0) {
      setInputErrorNombre(false);
      setInputErrorApellido(true);
      setInputErrorEmail(false);
      setInputErrorPassword(false);
      setInputErrorConfirmPassword(false);
      console.log("Apellido");
      return;
    } else if (inputObject.email?.length === 0) {
      setInputErrorNombre(false);
      setInputErrorApellido(false);
      setInputErrorEmail(true);
      setInputErrorPassword(false);
      setInputErrorConfirmPassword(false);
      alert("Email invalido");
      !validateEmail(inputObject.email);
      console.log("email con formato incorrecto", inputObject.email);
      console.log("mail");
      return;
    } else if (
      inputObject.password?.length === 0 ||
      inputObject.password?.length < 6
    ) {
      setInputErrorNombre(false);
      setInputErrorApellido(false);
      setInputErrorEmail(false);
      setInputErrorPassword(true);
      setInputErrorConfirmPassword(false);
      console.log("pass");
      //!validatePassword(inputObject.password);
      return;
    } else if (
      inputObject.confirmPassword?.length === 0 ||
      inputObject.confirmPassword?.length < 6
    ) {
      setInputErrorNombre(false);
      setInputErrorApellido(false);
      setInputErrorEmail(false);
      setInputErrorPassword(false);
      setInputErrorConfirmPassword(true);
      //!validatePassword(inputObject.confirmPassword);
      console.log("pass");

      return;
    } else if (inputObject.password !== inputObject.confirmPassword) {
      setInputErrorConfirmPassword(true);
      alert("Las contraseñas no coinciden");
      return;
    } else {
      alert("Formulario enviado");
      console.log("ESTE", inputObject);
      console.log(Object.entries(inputObject), "ENTRIES");
      setInputErrorNombre(false);
      setInputErrorApellido(false);
      setInputErrorEmail(false);
      setInputErrorPassword(false);
      setInputErrorConfirmPassword(false);
      //   !validatePassword(inputObject.confirmPassword);
    }
    createUser(inputObject);
  };

  const changeHandler = (value, key) => {
    setInputObject({
      ...inputObject,
      [key]: value,
    });
  };

  useEffect(() => {}, [
    inputObject,

    inputErrorNombre,
    inputErrorApellido,
    inputErrorEmail,
    inputErrorPassword,
    inputErrorConfirmPassword,
  ]);

  return (
    <>
      <section className="body">
        <br />
        <br />
        <div className="form-wrapper">
          <div className="top-bar" style={{ textAlign: "center" }}>
            {" "}
            Ingresa tus datos Y Registrate!{" "}
          </div>
          <br />
          <div className="grid">
            <Box className="form-item" id="nombre">
              <TextField
                error={inputErrorNombre}
                helperText={inputErrorNombre ? errorArray[0] : ""}
                id="outlined-textarea"
                label="Nombre"
                placeholder="Placeholder"
                multiline
                onChange={(e) => changeHandler(e.target.value, "nombre")}
              />
            </Box>

            <Box className="form-item">
              <TextField
                error={inputErrorApellido}
                helperText={inputErrorApellido ? errorArray[1] : ""}
                id="outlined-textarea"
                label="Apellido"
                placeholder="Placeholder"
                multiline
                onChange={(e) => changeHandler(e.target.value, "apellido")}
              />
            </Box>
            <Box className="form-item">
              <TextField
                error={inputErrorEmail}
                helperText={inputErrorEmail ? errorArray[2] : ""}
                id="outlined-textarea"
                label="Email"
                placeholder="Placeholder"
                multiline
                onChange={(e) => changeHandler(e.target.value, "email")}
              />
            </Box>
            <Box className="form-item">
              <TextField
                error={inputErrorPassword}
                helperText={inputErrorPassword ? errorArray[3] : ""}
                type="password"
                id="outlined-textarea"
                label="Password"
                placeholder="Placeholder"
                multiline
                onChange={(e) => changeHandler(e.target.value, "password")}
              />
            </Box>
            <Box className="form-item">
              <TextField
                error={inputErrorConfirmPassword}
                helperText={inputErrorConfirmPassword ? errorArray[4] : ""}
                type="password"
                id="outlined-textarea"
                label="Confirmar Password"
                placeholder="Placeholder"
                multiline
                onChange={(e) =>
                  changeHandler(e.target.value, "confirmPassword")
                }
              />
            </Box>

            <Select
              className="selector"
              value={inputObject.selector || ""} //cambiar el nombre de el estado value
              onChange={(e) => changeHandler(e.target.value, "selector")}
            >
              {" "}
              {inputObject.selector === "" ? (
                <Alert severity="error">Selecciona Tu Pais</Alert>
              ) : (
                <h4>Selecciona tu pais</h4>
              )}
              {countriesArray.map((country, index) => (
                <MenuItem value={country.nombre} key={index}>
                  {country.nombre}
                </MenuItem>
              ))}
            </Select>
          </div>
          {(inputErrorNombre && (
            <Alert severity="error">{errorArray[0]} </Alert>
          )) ||
            (inputErrorApellido && (
              <Alert severity="error">{errorArray[1]} </Alert>
            )) ||
            (inputErrorEmail && (
              <Alert severity="error">{errorArray[2]} </Alert>
            )) ||
            (inputErrorPassword && (
              <Alert severity="error">{errorArray[3]} </Alert>
            )) ||
            (inputErrorConfirmPassword && (
              <Alert severity="error">{errorArray[4]} </Alert>
            ))}

          <div className="submit">
            <Button onClick={handleSubmit}>Enviar</Button>
          </div>

          <Link to="/">
            <h3 style={{ textAllign: "center" }}>Regresar</h3>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Form;
