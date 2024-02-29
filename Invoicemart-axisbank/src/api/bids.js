import apiReq from "./apiReq";
import { All_URLS } from "../constants";

export const getBuyerMappedToFin = async () => {
  const Response = await apiReq.post(All_URLS.BUY_MAPPED_TO_FIN);
  return Response;
};

export const getBuyerFu = async (body) => {
  let Response = await apiReq.post(All_URLS.BUY_FU_FETCH, body);
  return Response;
};

export const getBiddedFuNumber = async (body) => {
  let Response = await apiReq.post(All_URLS.BIDDED_FU_NOS, body);
  return Response;
};

export const getFuFetch = async (body) => {
  let Response = await apiReq.post(All_URLS.FU_FETCH, body);
  return Response;
};

export const getPlatformFuFetch = async (body) => {
  let Response = await apiReq.post(All_URLS.PLATFORM_FU_FETCH, body);
  return Response;
};

export const getBidFetch = async (body) => {
  let Response = await apiReq.post(All_URLS.BID_FETCH, body);
  return Response;
};

export const getFuAdditionalDetail = async (body) => {
  let Response = await apiReq.post(All_URLS.FU_ENTITY_DTLS, body);
  return Response;
};

export const getBidCountFetch = async (body) => {
  let Response = await apiReq.post(All_URLS.BID_COUNT_FETCH, body);
  return Response;
};

export const getFUFinBidModifyDetail = async (body) => {
  let Response = await apiReq.post(All_URLS.FIN_BID_MODIFY_CANCEL, body);
  return Response;
};

export const getFUFinBidModCancelAction = async (body) => {
  let Response = await apiReq.post(All_URLS.FIN_BID_MODIFY_CANCEL_ACTION, body);
  return Response;
};

export const getFuInvoiceFetch = async (body) => {
  let Response = await apiReq.post(All_URLS.INV_FETCH, body);
  return Response;
};

export const getFuWorkflowHistory = async (body) => {
  let Response = await apiReq.post(All_URLS.FU_WORK_HIST, body);
  return Response;
};

export const getFuPlatformDetails = async () => {
  let Response = await apiReq.post(All_URLS.BUY_MAPPED_TO_FIN);
  return Response;
};

export const RequestFinBidPlace = async (body) => {
  let Response = await apiReq.post(All_URLS.BID_PLACE, body);
  return Response;
};

export const RequestFinBidAuthorise = async (body) => {
  let Response = await apiReq.post(All_URLS.BID_AUTH, body);
  return Response;
};

export const BuyMappedtoFin = async () => {
  let Response = await apiReq.post(All_URLS.BUY_MAPPED_TO_FIN);
  return Response;
};

export const BidAcceptByIBP = async (body) => {
  let Response = await apiReq.post(All_URLS.BID_ACCEPT_BY_IBP, body);
  return Response;
};

export const MappedSellerInfo = async (body) => {
  let Response = await apiReq.post(All_URLS.MAPPED_SELLER_INFO, body);
  return Response;
};

export const BidAuthByIBP = async (body) => {
  let Response = await apiReq.post(All_URLS.BID_AUTH_BY_IBP, body);
  return Response;
};

export const BuyBidAcceptedFUNum = async (body) => {
  let Response = await apiReq.post(All_URLS.BID_ACCEPTED_FUNUM, body);
  return Response;
};

// export const RequestFinBidAuthorise = async (body) => {
//   let Response = await apiReq.post(API_URL + ':8038/bulkBidAuthoriseService/bulkBidAuthoriseByIBP', body);
//   return Response;
// };
