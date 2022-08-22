import axios from "axios";
import ACTIONS from "./index";

export const dispatchLogin = () => {
  return {
    type: ACTIONS.LOGIN,
  };
};

export const dispatchLogout = () => {
  return {
    type: ACTIONS.LOGOUT,
  };
};

export const fetchUser = async () => {
  const res = await axios.get("/users/info");
  return res.data.user;
};

export const dispatchUser = (user) => {
  return {
    type: ACTIONS.GET_USER,
    payload: {
      user,
      role: user.role,
    },
  };
};
