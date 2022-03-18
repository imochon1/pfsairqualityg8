//const axios = require("axios").default;

//crear servicio de verificacion, post y authenticati

////Authenticator.loginSErvice(logininfo.mail y logininfo.password)

const loginService = (userInfo) => {
  //sustituir paths por url https://api-220201.herokuapp.com/ https://api-220201.herokuapp.com/users/

  // const URL = "https://breath-api.herokuapp.com/api/v1/auth/login";

  const userArray = [
    {
      email: "mail@mail.com",
      password: "123456!",
    },
    {
      email: "mail1@mail.com",
      password: "123456!",
    },
  ];

  return new Promise((resolve, reject) => {
    if (
      userArray.filter(
        (user) =>
          userInfo.email === user.email && userInfo.password === user.password
      ).length > 0
    ) {
      console.log("Login Success");
      resolve(true);
    } else {
      reject(false);
      console.log("Login Failed");
    }
  });
};

export default loginService;
