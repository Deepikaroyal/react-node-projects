//import instance from './apiReq'
import { API_URL } from "../constants";
import makeTheApiCall, { generateOptions } from "./apiCalls";
import axios from "axios";

export const getEntityMasterData = async (body) => {
  try {
    let Response = await axios.post(
      API_URL + ":8005/memorycache/rds-masterdata-info/fetchEntityInfo",
      body
    );
    return Response;
  } catch (error) {
    return error;
  }
};
export const getRedisEntiyFetch = async (isActive, entityType) => {
  let body = JSON.stringify({
    isActive: isActive,
    entityType: entityType,
  });
  const options = generateOptions(
    "memorycache/rds-masterdata-info/fetchEntityInfo",
    "POST",
    body,
    ":8005"
  );
  return makeTheApiCall(options)
    .then((response) => {
      // console.log('@@@@@',response)
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
