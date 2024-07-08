import { BioFormData, LoginFormData, SignupFormData } from "../@types/type";
import { aunthInstance, axiosInstance } from "./axios";

export const api = {
  requestLogin(payload: LoginFormData) {
    return aunthInstance.post("/auth/login/", payload);
  },

  requestSignup(payload: SignupFormData) {
    return aunthInstance.post("/users/", payload);
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
};
