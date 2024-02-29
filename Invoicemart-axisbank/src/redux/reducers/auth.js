import { authInitialState } from "../initial-states";
import {
  LOGGING_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  UPDATE_CURRENT_USER,
  SITE_THEME,
} from "../types";

const auth = (state = authInitialState, { type, payload }) => {
  switch (type) {
    case LOGGING_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        currentUser: payload,
        token: payload.refreshToken,
        entityType: payload.entityType,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
        token: null,
        loading: false,
        siteTheme: false,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...payload,
        },
      };
    case SITE_THEME:
      return {
        ...state,
        siteTheme: payload,
      };
    default:
      return state;
  }
};
export default auth;
