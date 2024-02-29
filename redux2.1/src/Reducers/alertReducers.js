import {Constants } from "../Constants/alertConstants";


const initialState = {
    user:{
    email:'',
    password:'',
    loggedIn: false
  }
  
  }

  export function alert(state=initialState,action){
    switch (action.type) {
        case Constants.LOGIN:
          console.log('##',action);
          return {
            ...state,
            // type: 'Login',
            // userInfo:action.payLoad
                user:action.payload
            
          };
          
        // case Constants.ERROR:
        //   return {
        //     ...state,
        //     type: 'alert-danger',
        //     message: action.message
        //   };
        // case Constants.CLEAR:
        //   return {};
        default:
          return state
      }
    }
   

    // const initialState = {
    //     user : {
    //         email:'',
    //         password:'',
    //         loggedIn: false
    //     }
        
    // }
    
    // const reducer = (state=initialState,action) =>{
    //     switch(action.type){
    //         case 'LOGIN':
    //             console.log("@@@@@@",action.payload)
    //             return{
    //                 ...state,
    //                 user : action.payload
    //             }
    //         case 'LOGOUT':
    //             return{
    //                 ...state,
    //                 user : initialState.user
    //             }
    //         default:
    //             return state;        
    //     }
    // }
    
    // export default reducer;