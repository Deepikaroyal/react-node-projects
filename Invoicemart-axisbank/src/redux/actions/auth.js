import {
  LOGGING_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  UPDATE_CURRENT_USER,
  SITE_THEME,
} from "../types";

export const loggingUser = () => ({
  type: LOGGING_USER,
});

export const loginUserFailure = () => ({
  type: LOGIN_USER_FAILURE,
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const updateCurrentUser = (payload) => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  sessionStorage.setItem(
    "userData",
    JSON.stringify({
      ...userData,
      ...payload,
    })
  );
  return {
    type: UPDATE_CURRENT_USER,
    payload,
  };
};

export const SiteTheme = (payload) => ({
  type: SITE_THEME,
  payload,
});
