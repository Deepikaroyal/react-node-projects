
import { Constants } from "../constants/alertConstants";

const initialState = {
    user:{
    firstName:'' ,  
    lastName:'',
    email:'',
    
  }
  
  }
  export default function alertReducer(state=initialState,action){
      switch(action.type){
          case Constants.ADDUSER:
              return{
                  ...state,
                  user:action.payload
              }
              default :
              return state
      }
  }