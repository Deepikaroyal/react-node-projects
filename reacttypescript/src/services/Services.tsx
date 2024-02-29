import axios from 'axios' ;
import Api from './Api';
const accessToken =`JQdbK7TXQ4dmagh2QJkCBPdLYzYIrkfg7llzbNRlnxNNEauBp3V0aV2Zl3skfps2`
axios.defaults.headers.common["accessToken"] = accessToken;
axios.defaults.headers.common[
  "Authorization"
] = `${"Basic cGItZGlyZWN0OnBiLWRpcmVjdA=="}`;

export const getUser = () => axios.get(Api.USER) ;
export const getUserDetail=(param:any)=>axios.get(`${Api.USER_DETAIL}/${param}`)
