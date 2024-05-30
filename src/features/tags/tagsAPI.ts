import axiosInstance from "../../utils/axios";

export const getTagsAPI = async () => {
  const response = await axiosInstance.get("/tags");
  // const response = await axios.get("http://localhost:9000/videos");

  return response.data;
};
