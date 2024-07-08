import { LoginFormData, SignupFormData } from "../@types/type";
import { aunthInstance } from "./axios";

export const api = {
  requestLogin(payload: LoginFormData) {
    return aunthInstance.post("/auth/login/", payload)
  },
  requestSignup(payload: SignupFormData){
    return aunthInstance.post("/users/",payload)
  }
};
