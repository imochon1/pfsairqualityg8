/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { UserLoggedContext } from "../../utils/UserContext";
import { patchUser } from "../../Services/userService";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ResponsiveAppBar from "../NavBar/NavBar";
import Button from "@mui/material/Button";

// eslint-disable-next-line no-undef

const UserComponent = () => {
  //estados para cada atributo

  const { globalUser } = useContext(UserLoggedContext);

  const { name, last_name, email, _id } = globalUser;
  const [nombre, setNombre] = useState();
  const [lastName, setLastName] = useState();

  const changeHandlerName = (value, key) => {
    setNombre({
      ...name,
      [key]: value,
    });
  };

  const changeHandlerLastName = (value, key) => {
    setLastName({
      ...last_name,
      [key]: value,
    });
  };

  const submit = async () => {
    const user = {
      name: nombre,
      last_name: lastName,

      id: _id,
    };

    const response = await patchUser(user);
    return response;
  };

  console.log(globalUser);

  return (
    <>
      <ResponsiveAppBar />
      <div className="welcome" style={{ color: "black", textAlign: "center" }}>
        <h2>Hola {name} !</h2>
        <h3>Edita Tu Perfil</h3>
      </div>
      <Box
        className="form-item"
        id="nombre"
        style={{ display: "flex", width: "50vw", marginLeft: "5vw" }}
      >
        <br />
        <TextField
          error={false}
          helperText={"Introduce el nuevo Valor"}
          id="outlined-textarea"
          label="Nombre"
          placeholder="Placeholder"
          multiline
          onChange={(e) => changeHandlerName(e.target.value, "nombre")}
        />
      </Box>
      <br />
      <Box
        className="form-item"
        id="apellido"
        style={{
          display: "flex",
          width: "50vw",
          marginLeft: "5vw",
          marginTop: "5vh",
        }}
      >
        <TextField
          error={false}
          helperText={"Introduce el nuevo Valor"}
          id="outlined-textarea"
          label="Apellido"
          placeholder={last_name}
          multiline
          value={last_name}
          onChange={(e) => changeHandlerLastName(e.target.value, "apellido")}
        />
      </Box>

      <Button
        variant="contained"
        onClick={(e) => submit(e)}
        style={{ marginTop: "4em", textAlign: "center", marginLeft: "6vw" }}
      >
        Actualizar
      </Button>
    </>
  );
};

export default UserComponent;
