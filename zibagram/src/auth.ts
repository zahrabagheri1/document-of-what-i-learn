// import {SingupFormData, LoginFormData ,LoginResponse} from "./@types/type";
// import { api } from "./api/api";
// import Singup from "./pages/singup";

export const auth = {
  isAuthenticated() {
    // const accessToken = localStorage.getItem("accessToken");
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR"; //fake
    // const accessToken = null //fake
    if (!accessToken) {
      return false;
    }
    return true;
  },

  // ********* LOGIN ******************************************
  //   async login(data: LoginFormData) {
  // try {
  //   const response = await api.requestLogin(data);
  //   const responseData = response.data as LoginResponse;
  //   console.log(responseData.tokens);
  //   localStorage.setItem("accessToken", responseData.tokens.access);
  //   localStorage.setItem("accessToken", responseData.tokens.refresh);
  //     } catch (e) {
  //       throw e;
  //     }
  //   },

  // ********* SING UP ******************************************
  // async Singup(data: SingupFormData) {
  // try {
  // const response = await api.requestSignup(data);
  // const responseData =response.data as SingupFormData
  // localStorage.setItem("accessToken", responseData.tokens.access);
  // localStorage.setItem("accessToken", responseData.tokens.refresh);
  // }catch (e) {
  //       throw e;
  //     }
  //   },
};
