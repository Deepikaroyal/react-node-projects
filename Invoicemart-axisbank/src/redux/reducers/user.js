/* eslint-disable import/no-anonymous-default-export */
import { userDetailInitialState } from "../initial-states";
import {
  GETTING_USER_DETAILS,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
  UPDATE_USER_DETAIL_SUCCESS,
  UPDATE_USER_DETAILS_FROM_FORM,
} from "../types";

export default (state = userDetailInitialState, { type, payload }) => {
  switch (type) {
    case GETTING_USER_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case UPDATE_USER_DETAIL_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_USER_DETAILS_FROM_FORM:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
