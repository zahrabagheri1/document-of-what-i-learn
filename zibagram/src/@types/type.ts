export interface LoginFormData {
  email: string;
  password: string;
}
export interface LoginResponse {
  id: number;
  email: string;
  username: string;
  tokens: {
    access: string;
    refresh: string;
  };
}
export interface SingupFormData {
  username: string;
  email: string;
  password: string;
}
