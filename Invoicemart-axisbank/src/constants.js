export const DEV_URL = "http://10.24.184.7";
export const STG_URL = "https://api.test.com";
export const PROD_URL = "";
export const API_URL = DEV_URL;

export const All_URLS = {
  SIGN_IN: "http://10.24.184.7:8007/authapi/auth/signin",
  PLATFORM_SIGN_IN: "http://10.24.184.7:8007/authapi/auth/platformsignin",
  REFRESH_TOKEN: "http://10.24.184.7:8007/authapi/auth/refreshtoken",
  VALIDATE_TOKEN: "http://10.24.184.7:8007/authapi/auth/validatetoken",
  CHG_PSWD_PIN: "http://10.24.184.7:8007/authapi/auth/changepasswordpin",
  JOCATA_DWND: "http://10.24.184.7:8048/jocataservice/download",
  GEN_SERVER_KEYS: "http://10.24.184.7:8033/encdec/generateserverkeys",
  GEN_OTP: "http://10.24.184.7:8007/authapi/auth/generateotp",
  GEN_API_KEY: "http://10.24.184.7:8007/authapi/auth/apikeygen",
  USER_SEQ_QUES:
    "http://10.24.184.7:8007/securitydetails/getusersecurityquestion",
  FETCH_USER_BU_ROLE:
    "http://10.24.184.7:8044/fufetchadditionalservice/fetchinfo/fetchUserBURole",
  BUY_MAPPED_TO_FIN: "http://10.24.184.7:8046/fetchmapped/buymappedtofin",
  BUY_FU_FETCH:
    "http://10.24.184.7:8021/fufetchservice/fetchinfo/buyerWiseFuFetch",
  BIDDED_FU_NOS:
    "http://10.24.184.7:8044/fufetchadditionalservice/fetchinfo/getBiddedFUNumbers",
  FU_FETCH: "http://10.24.184.7:8021/fufetchservice/fetchinfo/fuFetch",
  BID_FETCH: "http://10.24.184.7:8021/fufetchservice/fetchinfo/bidFetch",
  FU_ENTITY_DTLS:
    "http://10.24.184.7:8044/fufetchadditionalservice/fetchinfo/fuFetchAdditionalDetails",
  INV_FETCH: "http://10.24.184.7:8021/fufetchservice/fetchinfo/fuInvoiceFetch",
  FU_WORK_HIST: "http://10.24.184.7:8045/fetchfuhist/fuworkflowhist",
  BID_PLACE:
    "http://10.24.184.7:8041/isipfinbidservice/finbidservice/bidplacebyfin",
  BID_AUTH:
    "http://10.24.184.7:8038/isipfinbidservice/finbidservice/bidauthbyfin",
  BID_COUNT_FETCH:
    "http://10.24.184.7:8021/fufetchservice/fetchinfo/bidCountFetch",
  VALIDATE_OTP: "http://10.24.184.7:8007/authapi/auth/validateotp",
  FIN_BID_MODIFY_CANCEL:
    "http://10.24.184.7:8044/fufetchadditionalservice/fetchFUFinBidModifyCancel",
  FIN_BID_MODIFY_CANCEL_ACTION:
    "http://10.24.184.7:8041/isipfinbidservice/finbidservice/bidmodcancelbyfin",
  BID_ACCEPT_BY_IBP:
    "http://10.24.184.7:8025/bulkBidAcceptance/bulkBidAcceptanceByIBP",
  BID_ACCEPTED_FUNUM: "http://10.24.184.7:8047/ibpbidaccept/bidacceptedfunum",
  BID_AUTH_BY_IBP:
    "http://10.24.184.7:8028/bulkBidAuthoriseService/bulkBidAuthoriseByIBP",
  MAPPED_SELLER_INFO:
    "http://10.24.184.7:8044/fufetchadditionalservice/fetchMappedSellerInfo",
  PLATFORM_FU_FETCH: "http://10.24.184.7:8046/platformfetch/fufetch",
};
