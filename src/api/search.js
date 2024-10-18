import { axiosInstance } from "./axiosInstance";

export const getSearchPhotos = async (query, pages) => {
  const response = await axiosInstance.get(
    `/search/photos?query=${query}&pages=${pages}`
  );
  return response.data;
};
