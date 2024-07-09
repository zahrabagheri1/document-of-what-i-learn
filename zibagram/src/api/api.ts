import {
  BioFormData,
  LoginFormData,
  RefreshTokenData,
  SignupFormData,
} from "../@types/type";

import { aunthInstance, axiosInstance } from "./axios";

export const api = {
  requestLogin(payload: LoginFormData) {
    return aunthInstance.post("/auth/login/", payload);
  },

  requestSignup(payload: SignupFormData) {
    return aunthInstance.post("/users/", payload);
  },

  requestRefreshToken(payload: RefreshTokenData) {
    return aunthInstance.post("/token/refresh/", payload);
  },

  requestChangeAvatar(avatar: Blob) {
    const formData = new FormData();
    formData.append("avatar", avatar);

    return axiosInstance.put("/profile/avatar/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  requestChangeBio(payload: BioFormData) {
    return axiosInstance.put("/profile/", payload);
  },

  requsetFetchBio() {
    return axiosInstance.get("/profile/avatar/");
  },

  requsetFetchAvatar() {
    return axiosInstance.get("/profile/");
  },

  requestFetchPosts(){
    // return axiosInstance.get("/post/")
    return aunthInstance.get("/products/")
  }
};
