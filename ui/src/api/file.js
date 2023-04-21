import axiosInstance from "./interceptor";

export const getFilesData = (fileName) => {
  let query = "";
  if (fileName) {
    query += `?fileName=${fileName}`;
  }
  return axiosInstance.get("/api/files/data" + query);
};
