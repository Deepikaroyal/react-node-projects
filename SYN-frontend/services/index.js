import api from '../config/api';
import ApiInstance from './intercepter';
import axios from 'axios';
import setting from '../config/setting';


export const  userSignupService = params => ApiInstance.post(`${api.USER_SIGNUP}`, params);
export const  LoginService  = params => ApiInstance.post(`${api.USER_LOGIN}`, params);
export const SignupOtpService = param => ApiInstance.post(`${api.SIGNUP_OTP}`, param);
export const    LoginOtpService = param => ApiInstance.post(`${api.LOGIN_OTP}`,param);

export const forgotService = param => ApiInstance.post(`${api.FORGOT_PASSWORD}`, param);
export const forgotOtpService = param => ApiInstance.post(`${api.FORGOT_OTP_VERIFICATION}`, param);
//need to send access token:
//export const newPasswordService = param => ApiInstance.post(`${api.NEW_PASSWORD}`, param);
////////////////////////////////
export const newPasswordService = async (obj, access_token) => {
 // console.log("cheking params in reset new password : ", obj);
  return await axios.post(api.NEW_PASSWORD, obj, {
    headers: {
      authorization: `${setting.api.AUTH}`,
      token: access_token,
    },
  });
}; 

///////////////////////
//export const changePasswordService =param => ApiInstance.post(`${api.PROFILE_CHANGE_PASSWORD}`, param)
export const changePasswordService = (params, token) => {
  //  console.log('cheking params in reset new password : ',params)
   // console.log("^^^^^^^^6",token)
    axios.defaults.headers.common['token'] = `${token}`,
    axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  //  console.log("%%%%",axios.defaults.headers.common)
    return  axios.post(api.PROFILE_CHANGE_PASSWORD, params)  
}

//need to send access token:
//export const  personalInfoService =param => ApiInstance.post(`${api.PROFILE_UPDATE}`, param)
export const personalInfoService = (params, token) => {
   // console.log('cheking params in reset new password : ',params)
   // console.log("^^^^^^^^6",token)
    axios.defaults.headers.common['token'] = `${token}`,
    axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
    axios.defaults.headers.common['accept'] = 'application/json';
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
   // console.log("%%%%",axios.defaults.headers.common)
    return  axios.post(api.PROFILE_UPDATE, params)  
}


export const googleService = param => ApiInstance.post(`${api.GOOGLE_LOGIN}`, param)
//get user info
export  const   authHeaderService = async(token)=>{
  //  console.log('cheking params in reset new password : ',token)
    return   await axios.get(api.HEADER_DATA_RETRIVE, {
            headers : {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `${setting.api.AUTH}`,
                "token" : token,
            }
        })  
}
// export const  VerificationResendService  = params => ApiInstance.post(`${api.USER_LOGIN}`, params);
//verification code resend:
export const  VerificationCodeResendService =(params)=>{
 // axios.defaults.headers.common['token'] = `${token}`,
    axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  //  console.log("%%%%",axios.defaults.headers.common)
    return  axios.post(api.FORGOT_PASSWORD, params) 
}
//signup resend :
export const VerificationSignupResendService = param => ApiInstance.post(`${api.SIGNUP_RESEND}`, param)
//cretefixed price:
export const createFixedPriceService =(params,token)=>{
  axios.defaults.headers.common['token'] = `${token}`,
  axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    return  axios.post(api.CREATE_POST, params) 
}
//GET category list dynamically:
export const  getCategoryService = async(token) =>{
  return   await axios.get(api.GET_CATEGORY_DATA, {
    headers : {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `${setting.api.AUTH}`,
        "token" : token,
    }
})
}
//getting user suggestion list:
export const  getSuggestionService = async(token)=>{
  return   await axios.get(api.GET_SUGGESTION_LIST, {
    headers : {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `${setting.api.AUTH}`,
        "token" : token,
    }
})
}
//getting created data in myprofile:
export const  createdCardService = async(token,param)=>{
  let category = param.categories_filter
  // console.log("indexx0000",param)
  // console.log("indexx00022220",param.category)
  axios.defaults.headers.common['token'] = `${token}`,
  axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
  axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
return  axios.get(api.GET_PROFILE_CREATE_DATA+ `${category?`categories_filter=${category}&`:""}`+`dashboard=${param.dashboard}&user_id=${param.user_id}`) 
}
//follow api function:
export const followService=(params,token)=>{
    axios.defaults.headers.common['token'] = `${token}`,
     axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
     axios.defaults.headers.common['Content-Type'] = 'application/json';
   //  console.log("%%%%",axios.defaults.headers.common)
     return  axios.patch(api.FOLLOW_USER, params) 
 }

 //feed data api function:
 export const feedDataService = async(token) =>{
  return   await axios.get(api.FEEDS_DATA, {
    headers : {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `${setting.api.AUTH}`,
        "token" : token,
    }
})
 }
//getting all following user list:
export const getFollowingListService =(token)=>{
  axios.defaults.headers.common['token'] = `${token}`,
     axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
     axios.defaults.headers.common['Content-Type'] = 'application/json';
   //  console.log("%%%%",axios.defaults.headers.common)
     return  axios.get(api.FOLLOWING_USER_LIST) 
}
//getting all following user list:
export const  getFollowerListService =(token)=>{
  axios.defaults.headers.common['token'] = `${token}`,
  axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
  axios.defaults.headers.common['Content-Type'] = 'application/json';
//  console.log("%%%%",axios.defaults.headers.common)
  return  axios.get(api.FOLLOWER_USER_LIST) 
}

//unfollow api function:
export const unFollowService = (params,token)=>{
  axios.defaults.headers.common['token'] = `${token}`,
  axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
  axios.defaults.headers.common['Content-Type'] = 'application/json';
//  console.log("%%%%",axios.defaults.headers.common)
  return  axios.patch(api.UNFOLLOW_USER, params)
}

//comment service:
export const commentService =(params,token)=>{
  axios.defaults.headers.common['token'] = `${token}`,
  axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
  axios.defaults.headers.common['Content-Type'] = 'application/json';
//  console.log("%%%%",axios.defaults.headers.common)
  return  axios.post(api.POST_COMMENT, params)
}

//getting all comment :
export const getCommentService =(params,token)=>{
  console.log("###paramsss",params)
  axios.defaults.headers.common['token'] = `${token}`,
  axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
  axios.defaults.headers.common['Content-Type'] = 'application/json';
//  console.log("%%%%",axios.defaults.headers.common)
  return  axios.get(api.GET_ALL_COMMENT+`${params.post_id?`?post_id=${params.post_id}`:""}`)
}

//like service:
export const likeService =(params,token)=>{
  axios.defaults.headers.common['token'] = `${token}`,
  axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
  axios.defaults.headers.common['Content-Type'] = 'application/json';
//  console.log("%%%%",axios.defaults.headers.common)
  return  axios.post(api.LIKE, params)
}
//dislike service:
// export const dislikePostService =(params,token)=>{
//   console.log("8***",params)
//   axios.defaults.headers.common['token'] = `${token}`,
//   axios.defaults.headers.common['authorization'] = `${setting.api.AUTH}`
//   axios.defaults.headers.common['Content-Type'] = 'application/json';
// //  console.log("%%%%",axios.defaults.headers.common)
//   return  axios.delete(api.DISLIKE,params)
// }
export const dislikePostService = async (data, access_token) => {
  try {
      const response = await axios.delete(api.DISLIKE, {
          headers  : {
              'accept' : 'application/json',
              'authorization' : setting.api.AUTH,
              'Token' : access_token,
              'Content-Type': 'application/json'
          },
          data 
      })
      
      return response;
  } catch (error) {
      // console.log(error)
  }
}