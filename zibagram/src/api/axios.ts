import axios from "axios";
// import { LoginFormData } from "../@types/type";

export const aunthInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  // timeout: 3000,
});
// export const aunthInstance = axios.create({
//   baseURL: "/api",
//   timeout: 3000,
// });
// قسمت URL  تکراری را در این قسمت میتوان نوشت

// و در قسمت api
// export const api = {
//     requestLogin(payload: LoginFormData) {
//       return aunthInstance.post("/auth/login/", payload)
//     },
//   };
