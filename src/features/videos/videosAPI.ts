import axiosInstance from "../../utils/axios";

export const getVideosAPI = async (tags: string[], search: string) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axiosInstance.get(`/videos/?${queryString}`);
  // const response = await axios.get("http://localhost:9000/videos");

  return response.data;
};
