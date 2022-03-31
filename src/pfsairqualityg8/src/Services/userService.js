import { decodedJWT } from "../utils/jwtDecoder";
// eslint-disable-next-line no-undef
const axios = require("axios").default;

export const userLogin = (paramsLogin) => {
  console.log(paramsLogin);
  return new Promise((resolve, reject) => {
    axios
      .post("https://api-220201.herokuapp.com/auth", paramsLogin)
      .then((response) => {
        const { data } = response;
        const { token } = data;
        const payload = decodedJWT(token);
        console.log("payload", payload);
        resolve(payload);
      })
      .catch(({ response }) => {
        console.log("error", response.status);
        reject(response);
      });
  });
};

export const createUser = (param) => {
  console.log("param", param);
  axios
    .post("https://api-220201.herokuapp.com/users", param)
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        console.log("response", response);
        window.location.href = "/home";
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const patchUser = (param) => {
  const { id, name, last_name } = param;
  const dataToSendArray = [name, last_name];
  console.log("paramUSER", param);
  axios
    .patch(`https://api-220201.herokuapp.com/users/${id}`, dataToSendArray)

    .then((response) => {
      console.log("PATCH RESPONSE", response);
      if (response.status === 200) {
        alert("Usuario actualizado");
        console.log("response", response);
        window.location.href = "/profile";
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const userLogout = () => {
  localStorage.removeItem("userStorage");
  return true;
};
