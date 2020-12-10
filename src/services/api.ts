import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

/**
 * Interceptors
 */
api.interceptors.request.use(
  async config => {
    // get Auth Token exists;
    const AuthToken = "fake-api-json-server";
    config.headers = {
      Authorization: `'Bearer ${AuthToken}'`
    };
    return config;
  },
  error => {
    console.log(error);
  }
);

export default api;
