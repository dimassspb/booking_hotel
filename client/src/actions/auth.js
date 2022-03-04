import axios from "axios";
import { getUrl } from "../service/getUrl";

const url = getUrl();

export const register = async (user) =>
    await axios.post(`${url}/register`, user);

export const login = async (user) =>
    await axios.post(`${url}/login`, user);

  // update user in local storage
export const updateUserInLocalStorage = (user, next) => {
  if (window.localStorage.getItem("auth")) {
    let auth = JSON.parse(localStorage.getItem("auth"));
    auth.user = user;
    localStorage.setItem("auth", JSON.stringify(auth));
    next();
  }
};