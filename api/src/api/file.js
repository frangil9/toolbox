const { createAxiosInstance } = require("./interceptor");
const axiosInstance = createAxiosInstance();

const getFilesApi = async () => {
  const response = await axiosInstance.get("/secret/files");
  const { files } = response.data;
  return { files };
};

const getFileByNameApi = async (name) => {
  const headers = {
    accept: "application/json",
  };
  let csv = "";
  try {
    const response = await axiosInstance.get(`/secret/file/${name}`, {
      headers: headers,
    });
    csv = response.data;
  } catch (error) {
    throw error;
  }
  return csv;
};

module.exports = {
  getFilesApi,
  getFileByNameApi,
};
