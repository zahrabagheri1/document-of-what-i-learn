import axios from "axios";
import { LoginFormData } from "../@types/type";

export const api = {
  requestLogin(payload: LoginFormData) {
    return axios.post("https://fakestoreapi.com/auth/login/", payload)
  },
};
