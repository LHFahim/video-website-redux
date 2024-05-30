import axiosInstance from "../../utils/axios";

export const getVideoAPI = async (id: number) => {
  const response = await axiosInstance.get(`/videos/${id}`);
  // const response = await axios.get("http://localhost:9000/videos");

  return response.data;
};
