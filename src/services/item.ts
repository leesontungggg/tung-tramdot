import customAxios from "./interceptor";

export const handleGetItems = () => {
  return customAxios.get(`/items/items`);
};

export const handleGetItemDetail = (id: String) => {
  return customAxios.get(`/items/items/${id}`);
};
