import axios from "axios";
import { api } from "./api";
import { RefreshTokenResponse } from "../@types/type";
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
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  // },
});

// request -> 401 -> refresh -> accessToken -> replace -> retry request
axiosInstance.interceptors.request.use(
  (config) => {
    // config ersali

    const accessToken = localStorage.getItem("accessToken");
    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${accessToken}`;

    return newConfig;
  },
  (error) => {
    Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.status === 401) {
//       console.log(error);
//     }
//   }
// )

// request -> 401 -> refresh -> error -> redirect login
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error.response.status === 401) {
      try {
        const refreshResponse = await api.requestRefreshToken({
          refresh: localStorage.getItem("RefreshToken")!,
        });

        const refreshResponseData =
          refreshResponse.data as RefreshTokenResponse;

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.setItem("accessToken", refreshResponseData.access);
        localStorage.setItem("refreshToken", refreshResponseData.refresh);

        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${refreshResponseData.access}`,
        };

        return axiosInstance(config);
      } catch (error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");

        window.location.replace("/login");
      }
    }
    return Promise.reject(error);
  }
);
