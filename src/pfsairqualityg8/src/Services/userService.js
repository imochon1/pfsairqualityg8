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
