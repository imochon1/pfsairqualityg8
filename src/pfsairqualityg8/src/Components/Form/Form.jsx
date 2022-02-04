import React, { useState, useMemo, useEffect } from "react";
import "./Form.css";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import countryList from "react-select-country-list";

//recuperar el input data, investigar si manejarlos juntos o independientes

//porque truena el input??

//country selector para pais

const Form = () => {
  const [inputObject, setInputObject] = useState({});

  //Lista de paises
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value, key) => {
    setInputObject({
      ...inputObject,
      [key]: value,
    });
  };

  useEffect(() => {
    console.log(inputObject);
  }, [inputObject]);

  return (
    <>
      <div className="form-wrapper">
        <Box className="form-item" id="nombre">
          <TextField
            id="outlined-textarea"
            label="Nombre"
            placeholder="Placeholder"
            multiline
            onChange={(e) => changeHandler(e.target.value, "nombre")}
          />
        </Box>

        <Box className="form-item">
          <TextField
            id="outlined-textarea"
            label="Apellido"
            placeholder="Placeholder"
            multiline
            onChange={(e) => changeHandler(e.target.value, "Apellido")}
          />
        </Box>
        <Box className="form-item">
          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Placeholder"
            multiline
            onChange={(e) => changeHandler(e.target.value, "Email")}
          />
        </Box>
        <Box className="form-item">
          <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="Placeholder"
            multiline
            onChange={(e) => changeHandler(e.target.value, "password")}
          />
        </Box>
        <Box className="form-item">
          <TextField
            id="outlined-textarea"
            label="Confirmar Password"
            placeholder="Placeholder"
            multiline
            onChange={(e) => changeHandler(e.target.value, "Password")}
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
        <Button variant="contained">Enviar</Button>
      </div>
    </>
  );
};

export default Form;
