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
