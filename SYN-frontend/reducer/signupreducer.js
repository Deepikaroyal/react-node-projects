
import { SIGN_IN,SIGN_OUT } from "../config/type";
import { Constants } from "../constants/constants";
import { SHOW_ALERT,CLEAR_ALERT } from "../config/type";
//signup reducer:
const initialState = {
  userData: ''
};
export default function signupReducer(state = initialState, action) {
   // console.log('state111',state)
  switch (action.type) {
    case Constants.RESET:
              return{
                initialState                 
              }
    case Constants.ADDUSER:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
     
  }
  
  }
  

 //login reducer: 
const initialState1= {
    loginData:{       
  } 
  }
  export  function loginReducer(state=initialState1,action){
      switch(action.type){
        case Constants.RESET:
              return{
                initialState1
                  
              }
          case Constants.LOGINUSER:
              return{
                  ...state,
                  loginData:action.payload
              }
              
              default :
              return state
      }
  }
//verification resend api:
const initialState4= {
  resendApiData:{       
} 
}
export  function verificationResendReducer(state=initialState4,action){
  switch(action.type){
          case Constants.LOGINRESEND:
            return{
                ...state,
                resendApiData:action.payload
            }
          default :
          return state
  }
}
//auth header reducer to get user detail:
const initialState3= {
  userData:{     
}
}
export  function loggedInReducer(state=initialState3,action){
    switch(action.type){
        case Constants.LOGGED:
            return{
                ...state,
                userData:action.payload
            }
            case Constants.EDITRES:
              return{
                ...state,
                apiStatus:action.payload
            }
            default :
            return state
    }
}

//auth header reducer to get user detail:
const initialState2= {
  apiData:{     
}
}
//res fro edit profile:
export  function editProfileReducer(state=initialState2,action){
  switch(action.type){
          case Constants.EDITRES:
            return{
              ...state,
              apiStatus:action.payload
          }
          case Constants.APIRES:
            return{
              ...state,
              api:action.payload
          }
          default :
          return state
  }
}


  //google login reducer:
  const INITIAL_STATE = {
    loggedIn: false,
    user: null
  };
  
  export  const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SIGN_IN:
        let loggedIn = action.payload ? true : false;
        return loggedIn
          ? {
              ...state,
              loggedIn,
              user: {
                tokenId: action.payload.tokenId,
               
              }
            }
          : { ...state, loggedIn, user: null };
      case SIGN_OUT:
        return { ...INITIAL_STATE };
      default:
        return state;
    }
  };

  //////////////
  const INITIAL_STATE1 = {
    open: false,
    message: "",
    anchorOrigin: { vertical: "top", horizontal: "center" },
    autoHideDuration: 3500
  };
  
   export const alertReducer = (state = INITIAL_STATE1, action) => {
    switch (action.type) {
      case SHOW_ALERT:
        /*
         action.payload looks like
          {message:''}
        */
        return { ...state, open: true, ...action.payload };
      case CLEAR_ALERT:
        return { ...INITIAL_STATE };
      default:
        return state;
    }
  };
  
  
  
  



