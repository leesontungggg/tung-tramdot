import customAxios from "./interceptor";

export const handleRegisterUser = (data: any) => {
  return customAxios.post(`/users`, data);
};

export const handleLoginUser = (data: any) => {
  return customAxios.post(`/auth/login`, data);
};

export const handleGetCurrentUser = (apikey: String) => {
  return customAxios.get(`/users/me?access_token=${apikey}`);
};
