// eslint-disable-next-line no-undef
const axios = require("axios").default;

export const userLogin = (paramsLogin) =>
  axios
    .post("https://api-220201.herokuapp.com/api/v1/auth/login", paramsLogin)
    .then((response) => {
      console.log("response Login", response);
    })
    .catch((error) => {
      console.log(error);
    });

export const createUser = (param) => {
  console.log("param", param);
  axios
    .post("https://api-220201.herokuapp.com/users", param)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
