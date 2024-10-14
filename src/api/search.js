import { axiosInstance } from "./axiosInstance";

export const getSearchPhotos = async (query) => {
  const response = await axiosInstance.get(`/search/photos?query=${query}`);
  return response.data;
};
