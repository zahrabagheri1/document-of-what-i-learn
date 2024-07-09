// import {SignupFormData, LoginFormData ,LoginResponse} from "./@types/type";
// import { api } from "./api/api";
// import Signup from "./pages/signup";

import { SignupFormData } from "./@types/type";
import { api } from "./api/api";
import { router } from "./router";

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
  //   localStorage.setItem("username",responseData.username)
  //     } catch (e) {
    //       throw e;
    //     }
    //   },
    
    // ********* SING UP ******************************************
    // async Signup(data: SignupFormData) {
      // try {
        // const response = await api.requestSignup(data);
        // const responseData =response.data as SignupFormData
        // localStorage.setItem("accessToken", responseData.tokens.access);
        // localStorage.setItem("accessToken", responseData.tokens.refresh);
        // localStorage.setItem("username",responseData.username)
  // }catch (e) {
  //       throw e;
  //     }
  //   },

  async Signup(data: SignupFormData) {
    await api.requestSignup(data);
  },

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
    router.navigate("/login");
  },
};
