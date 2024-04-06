import customAxios from "./interceptor";

export const handleGetProjects = () => {
  return customAxios.get(`/items/projects`);
};

export const handleGetProjectDetail = (id: String) => {
  return customAxios.get(`/items/projects/${id}`);
};

export const handleGetProjectItems = (id: String) => {
  return customAxios.get(
    `/items/items?filter={ "project_id": { "_eq": "${id}" }}`
  );
};
