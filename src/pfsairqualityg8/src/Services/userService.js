import { useState } from "react";

const [userInfo, setUserInfo] = useState({});

const users = [{}];

const userService = () => {
  const createUser = (user) => {
    user.id = users.length + 1;
    setUserInfo(users.push(user));
    return user;
  };
  createUser(userInfo);
  console.log(userInfo);
};

export default userService;
