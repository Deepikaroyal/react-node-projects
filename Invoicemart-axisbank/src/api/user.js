import makeTheApiCall, { generateOptions } from "./apiCalls";
// import { DOMAIN } from "../constants";
import {
  gettingUserDetails,
  getUserFailure,
  getUserSuccess,
  updateUserDetailSuccess,
} from "../redux/actions";

export const getUserDetails = () => {
  const options = generateOptions(`authorapi/access/useraccess`);
  return (dispatch) => {
    return makeTheApiCall(options)
      .then((response) => {
        dispatch(getUserSuccess(response.data));
        sessionStorage.setItem("userAccess", JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(getUserFailure());
        throw error;
      });
  };
};

export const getAdminUserDetails = () => {
  const options = generateOptions("Users");
  return (dispatch) => {
    dispatch(gettingUserDetails());
    return makeTheApiCall(options)
      .then(({ data }) => {
        dispatch(getUserSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(getUserFailure());
        throw error;
      });
  };
};

export const updateUserDetails = (UserId, body) => {
  const options = generateOptions(`Users/${UserId}`, "PUT", body);
  return (dispatch) =>
    makeTheApiCall(options)
      .then((response) => {
        dispatch(updateUserDetailSuccess());
        return response;
      })
      .catch((error) => {
        throw error;
      });
};
