import axios from "axios";
// import { LoginFormData } from "../@types/type";

export const aunthInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 3000,
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

export const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

// request -> 401 -> refresh -> accessToken -> replace -> retry request
// request -> 401 -> refresh -> error -> redirect login
