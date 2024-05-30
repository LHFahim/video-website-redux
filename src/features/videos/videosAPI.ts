import axiosInstance from "../../utils/axios";

export const getVideosAPI = async () => {
  const response = await axiosInstance.get("videos");
  // const response = await axios.get("http://localhost:9000/videos");

  return response.data;
};
