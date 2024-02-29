import { combineReducers } from "redux";
import { loginReducer, authReducer, loggedInReducer,verificationResendReducer,editProfileReducer } from "./signupreducer";
import signupReducer from "./signupreducer";
import getCategoryReducer from "./dashboardreducer";
import { followReducer,commentReducer } from "./dashboardreducer";


const rootReducer = combineReducers({
    signupReducer,
    loginReducer,
    loggedInReducer,
    authReducer,
    verificationResendReducer,
    getCategoryReducer,
    followReducer,
    editProfileReducer,
    commentReducer
    
});

export default rootReducer;













