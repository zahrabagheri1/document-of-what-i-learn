import { LoginFormData, SingupFormData } from "../@types/type";
import { aunthInstance } from "./axios";

export const api = {
  requestLogin(payload: LoginFormData) {
    return aunthInstance.post("/auth/login/", payload)
  },
  requestSignup(payload: SingupFormData){
    return aunthInstance.post("/register/",payload)
  }
};
