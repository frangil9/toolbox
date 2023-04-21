const axios = require("axios");
const config = require("../config");

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: config.EXTERNAL_API,
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      let token = "aSuperSecretKey";

      if (token) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosInstance;
};

module.exports = {
  createAxiosInstance,
};
