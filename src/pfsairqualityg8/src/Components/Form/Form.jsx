import React, { useState, useMemo, useEffect } from "react";
import "./Form.css";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import countryList from "react-select-country-list";
//import validateEmail from "../../utils/validateEmail";
//import userService from "../../Services/userService";

//country selector para pais falta

const Form = () => {
  const [inputObject, setInputObject] = useState({});

  const [inputErrorNombre, setInputErrorNombre] = useState(false);

  const [inputErrorApellido, setInputErrorApellido] = useState(false);

  const [inputErrorEmail, setInputErrorEmail] = useState(false);

  const [inputErrorPassword, setInputErrorPassword] = useState(false);

  const [inputErrorConfirmPassword, setInputErrorConfirmPassword] =
    useState(false);

  // eslint-disable-next-line no-unused-vars
  const [hover, setHover] = useState();

  const mouseIn = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  const errorArray = [
    "Ingresa tu nombre",
    "Ingresa tu Apellido",
    "Ingresa tu Email",
    "Ingresa tu Password",
    "Verifica tu Password",
  ];

  // eslint-disable-next-line no-unused-vars
  const countriesArray = [
    "Mexico",
    "El Salvador",
    "Peru",
    "Guatemala",
    "Estados Unidos",
    "Argentina",
    "España",
    "Brazil",
    "Argentina",
    "Singapur",
    "Canada",
    "Honduras",
    "Chile",
    "España",
    "Francia",
    "Italia",
  ];

  //Lista de paises
  const options = useMemo(() => countryList().getData(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputObject);

    const inputValuesArray = Object.values(inputObject);
    const filteredArray = inputValuesArray.filter((input) => input !== "");
    if (filteredArray.length === 0) {
      setInputErrorNombre(true);
      setInputErrorApellido(true);
      setInputErrorEmail(true);
      setInputErrorPassword(true);
      setInputErrorConfirmPassword(true);

      return;
    } else if (inputObject.nombre?.length === 0) {
      setInputErrorNombre(true);
      console.log("nombre");

      return;
    } else if (inputObject.apellido?.length === 0) {
      setInputErrorApellido(true);
      console.log("Apellido");
      return;
    } else if (inputObject.email?.length === 0) {
      setInputErrorEmail(true);
      console.log("mail");
      return;
    } else if (inputObject.password?.length === 0) {
      setInputErrorPassword(true);
      console.log("pass");
      return;
    } else if (inputObject.confirmPassword?.length === 0) {
      setInputErrorConfirmPassword(true);
      console.log("pass");
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
    }
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
      <div className="top-bar"> Ingresa tus datos Y Registrate! </div>
      <section className="body">
        <div className="form-wrapper">
          <Box className="form-item" id="nombre">
            <h4>Ingresa tu Nombre</h4>
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
            <h4>Ingresa tu Apellido</h4>
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
            <h4>Ingresa tu Email</h4>
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
            <h4>Ingresa tu Clave</h4>
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
            <h4>Confirma clave</h4>
            <TextField
              error={inputErrorConfirmPassword}
              helperText={inputErrorConfirmPassword ? errorArray[4] : ""}
              type="password"
              id="outlined-textarea"
              label="Confirmar Password"
              placeholder="Placeholder"
              multiline
              onChange={(e) => changeHandler(e.target.value, "confirmPassword")}
            />
          </Box>

          <Select
            className="selector"
            options={options}
            value={inputObject.selector || ""} //cambiar el nombre de el estado value
            onChange={(e) => changeHandler(e.target.value, "selector")}
          >
            {" "}
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <br />
        <br />
        <div className="submit">
          <Button
            className="button"
            onClick={handleSubmit}
            onMouseOver={mouseIn}
            onMouseOut={mouseOut}
          >
            {mouseIn ? "Enviar" : ""}
          </Button>
        </div>
      </section>
    </>
  );
};

export default Form;
