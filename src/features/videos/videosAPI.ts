import axios from "axios";

export const getVideosAPI = async () => {
  const response = await axios.get("/videos");

  return response.data;
};
