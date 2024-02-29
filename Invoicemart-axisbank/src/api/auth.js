import { toast } from "react-toastify";
// import { isSafari } from "react-device-detect";
// import * as test from "./apiReq";
import makeTheApiCall, { generateOptions } from "./apiCalls";
import {
  loggingUser,
  loginUserFailure,
  loginUserSuccess,
  // getClientSuccess,
} from "../redux/actions";
import logoutService from "../services/logout";
// import { getUserDetails } from "./user";
import TokenService from "./token.service";
import apiReq from "./apiReq";
import { All_URLS } from "../constants";
import axios from "axios";
// import { DecryptPayload } from "../utils/encrypt";

export const loginUser = (data, setApiError, key, iv) => {
  const options = generateOptions("authapi/auth/signin", "POST", data, ":8007");
  return (dispatch) => {
    dispatch(loggingUser());
    return makeTheApiCall(options)
      .then((response) => {
        sessionStorage.setItem("token", response.data.accessToken);
        TokenService.setUser(response.data);
        dispatch(loginUserSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        setApiError(error.data ? error.data.message : "Server error");
        dispatch(loginUserFailure());
        throw error;
      });
  };
};

export const loginPlatformUser = (data, setApiError, key, iv) => {
  const options = generateOptions(
    "authapi/auth/platformsignin",
    "POST",
    data,
    ":8007"
  );
  return (dispatch) => {
    dispatch(loggingUser());
    return makeTheApiCall(options)
      .then((response) => {
        sessionStorage.setItem("token", response.data.accessToken);
        TokenService.setUser(response.data);
        dispatch(loginUserSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        setApiError(error.data ? error.data.message : "Server error");
        dispatch(loginUserFailure());
        throw error;
      });
  };
};

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));
export const logoutUser = () => {
  // const options = generateOptions(`logout/${isSafari ? "safari" : "other"}`);
  return (dispatch) => {
    dispatch(logoutService());
  };
};

const _headers = {
  "Content-Type": "application/json",
  logintype: "JWT",
};

export const forgotPassword = async (body) => {
  try {
    let Response = await axios.post(All_URLS.CHG_PSWD_PIN, body, {
      headers: _headers,
    });
    return Response;
  } catch (error) {
    return error;
  }
};

export const downloadInvoice = async (body) => {
  try {
    const _head = {
      "Access-Control-Expose-Headers": "*",
      Accept: "*/*",
      "Content-Type": "application/json",
      // 'logintype': 'JWT',
    };
    let Response = await axios({
      method: "POST",
      url: All_URLS.JOCATA_DWND,
      data: body,
      headers: _head,
      responseType: "blob",
    });
    return Response;
  } catch (error) {
    return error;
  }
};

export const resetPassword = (body) => {
  const options = generateOptions("services/password", "POST", body);
  return () =>
    makeTheApiCall(options)
      .then(({ data }) => {
        toast.success("Password reset successfully");
        return data;
      })
      .catch((error) => {
        throw error;
      });
};

export const changePassword = (body) => {
  const options = generateOptions("profile/changepassword", "PUT", body);
  return () =>
    makeTheApiCall(options)
      .then(({ data }) => {
        toast.success("Password changed successfully");
        return data;
      })
      .catch((error) => {
        throw error;
      });
};

export const getRSAServerKey = async (body) => {
  try {
    let Response = await axios.post(All_URLS.GEN_SERVER_KEYS, body, {
      headers: _headers,
    });
    //console.log('getRSAServerKey Response', Response)
    return Response;
  } catch (error) {
    return error;
  }
};

export const getGenerateOTP = async (body) => {
  try {
    let Response = await axios.post(All_URLS.GEN_OTP, body, {
      headers: _headers,
    });
    //console.log('getGenerateOTP Response', Response)
    return Response;
  } catch (error) {
    return error;
  }
};

export const getApiKey = async (body) => {
  let Response = await apiReq.post(All_URLS.GEN_API_KEY, body);
  return Response;
};

export const getRefreshToken = async () => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + TokenService.getLocalAccessToken(),
    logintype: "API",
  };
  const rs = await axios.post(
    All_URLS.REFRESH_TOKEN,
    JSON.stringify({
      refreshToken: TokenService.getLocalRefreshToken(),
    }),
    { headers }
  );
  const { accessToken } = rs.data.accessToken;
  sessionStorage.setItem("token", rs.data.accessToken);
  TokenService.setUser(rs.data);
  return accessToken;
};

export const getSecurityQuestions = async () => {
  let Response = await apiReq.get(All_URLS.USER_SEQ_QUES);
  return Response;
};

export const fetchUserBuRole = async () => {
  let Response = await apiReq.post(All_URLS.FETCH_USER_BU_ROLE);
  return Response;
};
