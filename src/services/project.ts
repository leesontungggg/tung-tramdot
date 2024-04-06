import customAxios from "./interceptor";

export const handleGetProjects = () => {
  return customAxios.get(`/items/projects`);
};
