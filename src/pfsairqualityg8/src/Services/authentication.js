//crear servicio de verificacion, post y authenticati

////Authenticator.loginSErvice(logininfo.mail y logininfo.password)

const loginService = (userInfo) => {
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
