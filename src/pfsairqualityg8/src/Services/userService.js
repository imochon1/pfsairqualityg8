// eslint-disable-next-line no-undef
const axios = require("axios").default;

/*export const userLogin = axios.post(
  "https://api-220201.herokuapp.com/api/v1/auth/login",
  {
    email: "",
    password: "",
  }
  );*/

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
