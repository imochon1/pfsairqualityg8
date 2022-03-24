// eslint-disable-next-line no-undef
const axios = require("axios").default;

export const userLogin = (paramsLogin) => {
  console.log(paramsLogin);
  axios
    .post("https://api-220201.herokuapp.com/auth/", paramsLogin)
    .then((response) => {
      console.log("response Login", response);
      if (response.status === 200) {
        console.log("response Login", response);
        window.location.href = "/home";
      }
    })
    .catch((error) => {
      console.log(error);
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
