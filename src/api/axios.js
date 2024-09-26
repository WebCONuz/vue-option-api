import axios from "axios";
import router from "../router/index.js";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    return config;
  },
  function (error) {
    console.log("Request Error");

    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Response Error");
    if (error.status === 404) {
      console.log("Not Found");
      router.push({ name: "error" });
    }
    return Promise.reject(error);
  }
);

export default axios;
