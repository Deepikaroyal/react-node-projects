import axios from "axios";
import TokenService from "./token.service";
import { All_URLS } from "../constants";
// import { getRefreshToken } from "./auth";

const instance = axios.create({
  //baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    logintype: "JWT",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token; // for Spring Boot back-end
    }
    return config;
  },
  (error) => {
    ///console.log('instance level', error)
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    //console.log('err', err)
    const originalConfig = err.config;
    if (
      originalConfig.url !== All_URLS.SIGN_IN &&
      originalConfig.url !== All_URLS.REFRESH_TOKEN &&
      originalConfig.url !== All_URLS.VALIDATE_TOKEN &&
      err.response
    ) {
      // if (API_URL_No_Auth.indexOf(originalConfig.url) == -1 && err.response) {
      // Access Token was expired
      if (
        (err.response.status === 401 ||
          err.response.status === 403 ||
          err.response.status === 422 ||
          err.response.status === 500) &&
        !originalConfig._retry
      ) {
        originalConfig._retry = true;
        try {
          await instance.post(All_URLS.VALIDATE_TOKEN);
          //console.log("rs.data", rs.data)
          return instance(originalConfig);
        } catch (_error) {
          const userData = TokenService.getUser();
          // console.log("userData", userData)
          const rs = await instance.post(
            All_URLS.REFRESH_TOKEN,
            JSON.stringify({
              refreshToken: userData.refreshToken,
              userId: userData.id
                ? userData.id
                : sessionStorage.getItem("username"),
            })
          );
          // console.log("rs.data", rs.data)
          sessionStorage.setItem("token", rs.data.accessToken);
          TokenService.setUser(rs.data);
          instance.defaults.headers.common["x-access-token"] =
            rs.data.accessToken;
          return instance(originalConfig);
          // return Promise.reject(_error);
        }
      }
    }
    if (originalConfig.url === All_URLS.REFRESH_TOKEN) {
      if (err.response.status === 403) {
        // console.log("ERROR!!!!!!!!")
        sessionStorage.removeItem("userData");
        sessionStorage.removeItem("token");
        window.location.replace("/login");
      }
    }
    return Promise.reject(err);
  }
);
export default instance;
