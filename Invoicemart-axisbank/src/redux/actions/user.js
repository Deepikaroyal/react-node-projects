import {
  GETTING_USER_DETAILS,
  GET_USER_DETAILS_FAILURE,
  GET_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAIL_SUCCESS,
  UPDATE_USER_DETAILS_FROM_FORM,
} from "../types";

export const gettingUserDetails = () => ({
  type: GETTING_USER_DETAILS,
});

export const getUserFailure = () => ({
  type: GET_USER_DETAILS_FAILURE,
});

export const getUserSuccess = (payload) => ({
  type: GET_USER_DETAILS_SUCCESS,
  payload,
});

export const updateUserDetailSuccess = (payload) => ({
  type: UPDATE_USER_DETAIL_SUCCESS,
  payload,
});

export const updateUserDetailFromForm = (payload) => ({
  type: UPDATE_USER_DETAILS_FROM_FORM,
  payload,
});
