

import axios from "axios";
import setting from "../config/setting";


const ApiInstance = axios.create({
    baseURL:setting.api.url,
});

ApiInstance.interceptors.request.use(req =>{
  //let token = localStorage.getItem("accessToken");
const headers ={
    "Content-Type" : "application/json",
    "accept": "application/json",
   
};
headers["authorization"] = setting.api.AUTH;
req.headers = headers;

return req ;
},
(error)=> Promise.reject(error)
);
//to handle api res write here:

ApiInstance.interceptors.response.use(res => {
 //   console.log(resinstance, 'ApiInstance');
 //console.log("inside interceptor",res)
    if (res.data.status === 0) {
      //  console.log("^&^&^&^&^&",res)
        return {
            statusCode:res.data.status,
            errorMsg:res.data.error.message,
          }
      }
  
      else  if (res.data.status === 1) {
          return{
            statusCode:res.data.status,
            successMsg: res.data.responseData.message,
            accessToken: res.data.responseData.data.access_token
           

          }
      }
    }
    
  );
  
export default ApiInstance;









