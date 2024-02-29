import { toast } from "react-toastify";
import { Constants } from "../constants/constants";
import {
  LoginService,
  forgotService,
  forgotOtpService,
  newPasswordService,
  changePasswordService,
  personalInfoService,
  googleService,
  authHeaderService,
  VerificationResendService,
  VerificationCodeResendService,
  VerificationSignupResendService
} from "../services";
import { LOG_OUT, LOG_IN } from "../config/type";
import { userSignupService } from "../services";
import { SignupOtpService } from "../services";
import Router from "next/router";
import { useRef } from "react";
export const signupAction = (userDetails) => {
 // console.log("action999", userDetails);
  return (dispatch) => {
    userSignupService(userDetails)
   
      .then((res) => {
        if (res.successMsg) {
          //writecode here for localstorage:
          toast.success(res.successMsg,{
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
        //  Router.push("/auth/verification");
        } else if (res.errorMsg) {
          toast.error(res.errorMsg, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
        }
         console.log("res^&^&", res);
        const apiStatus = res.statusCode;
        const email= userDetails.email
       const  phone = userDetails. phone_no
       const  full_name = userDetails.full_name
       const password = userDetails.password
       const country_code = userDetails.country_code
     const  Data = {
         apiStatus:apiStatus,
         email:email,
         full_name:full_name,
         phone:phone,
         password:password,
         country_code:country_code,
         mode:"normal",
         
       }
      // console.log("@@@@",Data)
      dispatch({ type: Constants.ADDUSER, payload: Data});
    //     dispatch({ type: Constants.ADDUSER, payload: userDetails });
      })
      .catch((error) => {
        // const errorMessage = error.errorMessage;
        console.log("error", error);
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
};

//signupotp verification action:
export const signupOtpAction = (SignupOtpDetails) => {
  return (dispatch) => {
    SignupOtpService(SignupOtpDetails)
      .then((res) => {
        if (res.successMsg) {
          //writecode here for localstorage:
          toast.success(res.successMsg, {
            // autoClose:1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
          Router.push("/dashboard/home");
        } else if (res.errorMsg) {
          toast.error(res.errorMsg, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
        }
         console.log("res^&^&", res);
         let accessToken = res.accessToken;
         //console.log("checkingggggggtoken",accessToken)
         localStorage.setItem('token', JSON.stringify(accessToken));
        //  dispatch({ type: Constants.ADDUSER, payload: data});
      })
      .catch((error) => {
        console.log("signupotperror", error);
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
};
//forgot password action :
export const forgotAction = (userDetails) => {

  return (dispatch) => {
    forgotService(userDetails)
      .then((res) => {
        if (res.successMsg) {
          //writecode here for localstorage:
          toast.success(res.successMsg, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
          Router.push("/auth/verificationCode");
        } else if (res.errorMsg) {
          toast.error(res.errorMsg, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
        }
        console.log("res^&^&", res);
        // let accessToken = res.accessToken;
        // console.log("checkingggggggtoken",accessToken)
        // localStorage.setItem('token', JSON.stringify(accessToken));
        dispatch({ type: Constants.ADDUSER, payload: userDetails });
      })

      .catch((error) => {
        console.log("signupotperror", error);
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
};
//action for reset signup reducer:
export const signupResetAction = ()=>{
  return (dispatch) => {
    dispatch({ type: Constants. RESET});
  }
}
//verification code action:
export const verificationCodeAction = (userDetails) => {
  return (dispatch) => {
    forgotOtpService(userDetails)
      .then((res) => {
        if (res.successMsg) {
          //writecode here for localstorage:
          toast.success(res.successMsg, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
          Router.push("/auth/newPassword");
        } else if (res.errorMsg) {
          toast.error(res.errorMsg, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
        }
       
         console.log("res^&^&", res.accessToken);
         let accessToken = res.accessToken;
       //  console.log("checkingggggggtoken",accessToken)
         localStorage.setItem('token', JSON.stringify(accessToken));

        // dispatch({ type: Constants.ADDUSER, payload: userDetails});
      })

      .catch((error) => {
        console.log("signupotperror", error);
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
};
//new password action:
export const newPasswordAction = (userDetails) => {
  let token =JSON.parse(localStorage.getItem('token'));
  
  return (dispatch) => {
  //  console.log('tokennn',token)
 newPasswordService(userDetails,token)
      .then((res) => {
        console.log("@@@@++++++",res)
        let status = res.data.status
        if (status===1) {
          //writecode here for localstorage:
          toast.success(res.data.responseData.message, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
          Router.push("/auth/resetPassword");
        } else if (status===0) {
          toast.error(res.data.error.message, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
        }
        // console.log("res^&^&", res);

        // dispatch({ type: Constants.ADDUSER, payload: userDetails});
      })

      .catch((error) => {
        console.log("newpassworderror", error);
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
};
//login action:
export const loginAction = (loginDetails) => {
  //console.log("action999", loginDetails);

  return (dispatch) => {
    LoginService(loginDetails)
      .then((res) => {
        if (res.successMsg) {
        
          toast.success(res.successMsg, {
            autoClose: 1200,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
          const statusCheck = {
            status: "true",
           }
        const apiStatus = res.statusCode;
        const email = loginDetails.email;
        const  password = loginDetails.password;
        let  Data
        if(loginDetails.email){
         Data = {
           apiStatus:apiStatus,
          email:email,
          password:password,
          mode:"normal"
        }
      } else if(loginDetails.phone_no){
        Data = {
        apiStatus:apiStatus,
        email:loginDetails.phone_no,
        password:password,
        mode:"normal"
      }
    }
      //  console.log("#########",loginDetails)
       //localStorage.setItem('userInfo', JSON.stringify(Data));
        dispatch({ type: Constants.LOGINUSER, payload: Data});
       // dispatch({ type: Constants.LOGINRESEND, payload: loginDetails});
        } else if (res.errorMsg) {
         
       
          toast.error(res.errorMsg, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
      }
        console.log("res^&^&", res);
        //const apiStatus = res.statusCode;  
       // dispatch({ type: Constants.LOGINUSER, payload: apiStatus });
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        console.log("error", error);
        //writecode here for localstorage:
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
};
//action for reset login reducer:
export const loginResetAction = ()=>{
  return (dispatch) => {
    dispatch({ type: Constants. RESET});
  }
}
//login/signup  verifivation resend api:
// export const  verificationResendAction = (loginDetails) =>{
//   return (dispatch) => {
//     VerificationResendService(loginDetails)
//       .then((res) => {
//         if (res.successMsg) {
//           toast.success(res.successMsg, {
//             autoClose: 1500,
//             closeOnClick: true,
//             hideProgressBar: true,
//             pauseOnHover: false,
//           });
//         const apiStatus = res.statusCode;
//         const email = loginDetails.email;
//         const  password = loginDetails.password;
//         let  Data
//         if(loginDetails.email){
//          Data = {
//           apiStatus:apiStatus,
//           email:email,
//           password:password
//         }
//       } else if(loginDetails.phone_no){
//         Data = {
//         apiStatus:apiStatus,
//         email:loginDetails.phone_no,
//         password:password
//       }
//     }
//         dispatch({ type: Constants.VERIFICATIONRESEND, payload: Data});

//         } else if (res.errorMsg) {
//           toast.error(res.errorMsg, {
//             autoClose: 1200,
//             closeOnClick: true,
//             hideProgressBar: true,
//             pauseOnHover: false,
//             toastId: 1
//           });
//         }
//         console.log("res^&^&", res);
//       })
//       .catch((error) => {
//         const errorMessage = error.errorMessage;
//         console.log("error", error);
//         //writecode here for localstorage:
//         toast.error("Network Error", {
//           autoClose: 1500,
//           closeOnClick: true,
//           hideProgressBar: true,
//           pauseOnHover: false,
//         });
//       });
//   };
// }
//verification resend implementing for signup only:
export const verificationSignupResendAction = (userDetails) =>{
  return (dispatch) => {
    VerificationSignupResendService(userDetails)
      .then((res) => {
        if (res.successMsg) {
          toast.success(res.successMsg, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
        const apiStatus = res.statusCode;
      
        //dispatch({ type: Constants.VERIFICATIONRESEND, payload: Data});

        } else if (res.errorMsg) {
          toast.error(res.errorMsg, {
            autoClose: 1200,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
        }
        console.log("res^&^&", res);
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        console.log("error", error);
        //writecode here for localstorage:
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
}

//resend api for verficationCode:
export const  verificationCodeResendAction = (loginDetails) =>{
 // let token =JSON.parse(localStorage.getItem('token'));

  return (dispatch) => {
    VerificationCodeResendService(loginDetails)
      .then((res) => {
        let status = res.data.status
        if (status===1) {
          toast.success(res.data.responseData.message, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
        const apiStatus = res.statusCode;
        const email = loginDetails.email;
        const  password = loginDetails.password;
        let  Data
        console.log("*****",loginDetails)
        if(loginDetails.email){
         Data = {
          apiStatus:apiStatus,
          email:email,
          password:password
        }
      } else if(loginDetails.phone_no){
        Data = {
        apiStatus:apiStatus,
        email:loginDetails.phone_no,
        password:password
      }
    }
        dispatch({ type: Constants.VERIFICATIONRESEND, payload: Data});

        } else if (status===0) {
          toast.error(res.data.error.message, {
            autoClose: 1200,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
        }
        console.log("res^&^&", res);
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        console.log("error", error);
        //writecode here for localstorage:
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
}
//auth header action :
export const authHeaderAction = (token) =>{
return (dispatch) =>{
  authHeaderService(token)
  .then((res)=>{
console.log("$$$^^res",res)
let filterDetail = res.data.responseData.data[0].full_name
let filterObject = res.data.responseData.data[0]
//console.log("^^^^^",filterObject)
//localStorage.setItem('userFilterData', JSON.stringify(filterObject));
 dispatch({ type: Constants.LOGGED, payload: filterObject});
  })
  .catch((error) => {
    console.log("error",error)
  })
}
}
//edit profile change password action:
export const changePasswordAction = (userDetails)=>{
  let token =JSON.parse(localStorage.getItem('token'));
  return (dispatch) => {
    changePasswordService(userDetails,token)
      .then((res) => {
        let status = res.data.status
        if (status===1)  {
          toast.success(res.data.responseData.message, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
          // dispatch({ type: Constants.APIRES, payload:userDetails});
        // const apiStatus = res.data.status;

        } else if (status===0) {
          toast.error(res.data.error.message, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
        }
        console.log("res^&^&", res);
        //const apiStatus = res.statusCode;  
       // dispatch({ type: Constants.LOGINUSER, payload: apiStatus });
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        console.log("error", error);
        //writecode here for localstorage:
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
}
//user update personal info action:
export const personalInfoAction=(userDetails)=>{
  let token =JSON.parse(localStorage.getItem('token'));
  return (dispatch) => {
    personalInfoService(userDetails,token)
      .then((res) => {
        let status = res.data.status
        if (status===1) {
          toast.success(res.data.responseData.message, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
           dispatch({ type: Constants.EDITRES, payload: userDetails});    
        } else if (status===0) {
          toast.error(res.data.error.message, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
        }

        console.log("res^&^&", res);
      //let filterObject = res.data.responseData.data[0]
       //console.log("##########",filterObject)
       // dispatch({ type: Constants.LOGGED, payload: filterObject });
       // const apiRes = res.data.status; 


      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        console.log("error", error);
        //writecode here for localstorage:
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
}
//edit profile image :
//user update personal info action:
export const editInfoAction=(userDetails,testObj)=>{
  let token =JSON.parse(localStorage.getItem('token'));
  return (dispatch) => {
    personalInfoService(userDetails,token)
      .then((res) => {
        let status = res.data.status
        if (status===1) {
          toast.success(res.data.responseData.message, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
          });
              console.log("&&&&",testObj) 
           dispatch({ type: Constants.EDITRES, payload: testObj});    
        } else if (status===0) {
          toast.error(res.data.error.message, {
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: false,
            toastId: 1
          });
        }

        console.log("res^&^&", res);
      //let filterObject = res.data.responseData.data[0]
       //console.log("##########",filterObject)
       // dispatch({ type: Constants.LOGGED, payload: filterObject });
       // const apiRes = res.data.status; 


      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        console.log("error", error);
        //writecode here for localstorage:
        toast.error("Network Error", {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      });
  };
}
//goggle login action:
export const googleOAuthLogin = (response) => {
  const action = { type: LOG_IN };
  let payload;
  if (typeof response === "undefined" || response.error) {
    //If login fails
    payload = null;
  } else {
    payload = response;
    //console.log("&&&&&", payload)
   // console.log("######", payload.tokenObj.id_token);
    let googleToken = payload.tokenObj.id_token
    const data = {
      'google_token' : googleToken
    }
   // console.log("***check data before",data)
    googleService(data)
    .then((res) => {
    if (res.successMsg) {
      Router.push('/dashboard/home')
        toast.success(res.successMsg, {
          autoClose: 1500,
          closeOnClick: true,
          hideProgressBar: true,
          pauseOnHover: false,
        });
    }
    else if (res.errorMsg) {
      toast.error(res.errorMsg, {
        autoClose: 1500,
        closeOnClick: true,
        hideProgressBar: true,
        pauseOnHover: false,
        toastId: 1
      });
    }
    console.log("$%$%$%$%$%^&*(",res)
    let accessToken = res.accessToken;
 //   console.log("checkingggggggtoken",accessToken)
    localStorage.setItem('token', JSON.stringify(accessToken));
  })
.catch((error) => {
  const errorMessage = error.errorMessage;
  console.log("error", error);
  toast.error("Network Error", {
    autoClose: 1500,
    closeOnClick: true,
    hideProgressBar: true,
    pauseOnHover: false,
  });
});

  action.payload = payload;
  return action;
};
}
export const googleOAuthLogout = () => {
  const action = { type: LOG_OUT };
  return action;
};

