import React, { useState, useMemo, useEffect } from "react";
import "./Form.css";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import countryList from "react-select-country-list";
import validateEmail from "../../utils/validateEmail";
import Alert from "@mui/material/Alert";
//import userService from "../../Services/userService";

//country selector para pais falta

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
      setInputErrorApellido(false);
      setInputErrorEmail(false);
      setInputErrorPassword(false);
      setInputErrorConfirmPassword(false);

      console.log("nombre");

      return;
    } else if (inputObject.apellido?.length === 0) {
      setInputErrorApellido(true);
      setInputErrorNombre(false);
      setInputErrorEmail(false);
      setInputErrorPassword(false);
      setInputErrorConfirmPassword(false);
      console.log("Apellido");
      return;
    } else if (
      inputObject.email?.length === 0 ||
      !validateEmail(inputObject.email)
    ) {
      setInputErrorEmail(true);
      setInputErrorNombre(false);
      setInputErrorApellido(false);
      setInputErrorPassword(false);
      setInputErrorConfirmPassword(false);
      alert("Email invalido");
      console.log("email con formato incorrecto", inputObject.email);

      console.log("mail");
      return;
    } else if (
      inputObject.password?.length === 0 ||
      inputObject.password.length < 6
    ) {
      setInputErrorPassword(true);
      setInputErrorNombre(false);
      setInputErrorApellido(false);
      setInputErrorEmail(false);
      setInputErrorConfirmPassword(false);
      console.log("pass");
      return;
    } else if (
      inputObject.confirmPassword?.length === 0 ||
      inputObject.confirmPassword.length < 6
    ) {
      setInputErrorConfirmPassword(true);
      setInputErrorNombre(false);
      setInputErrorApellido(false);
      setInputErrorEmail(false);
      setInputErrorPassword(false);

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
              {inputErrorNombre ? <Alert severity="error" /> : <></>}
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
              {inputErrorApellido ? <Alert severity="error" /> : <></>}
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

              {inputErrorEmail ? <Alert severity="error" /> : <></>}
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

              {inputErrorPassword ? <Alert severity="error" /> : <></>}
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
              {inputErrorConfirmPassword ? <Alert severity="error" /> : <></>}
            </Box>

            <Select
              className="selector"
              options={options}
              value={inputObject.selector || ""} //cambiar el nombre de el estado value
              onChange={(e) => changeHandler(e.target.value, "selector")}
            >
              {countriesArray.map((country, index) => (
                <MenuItem value={country.nombre} key={index}>
                  {country.nombre}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="submit">
            <Button
              onClick={handleSubmit}
              onMouseOver={mouseIn}
              onMouseOut={mouseOut}
            >
              {mouseIn ? "Enviar" : ""}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
