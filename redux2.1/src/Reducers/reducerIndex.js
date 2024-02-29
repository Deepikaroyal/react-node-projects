import { combineReducers } from 'redux';
import { alert } from './alertReducers';


const rootReducer = combineReducers({

alert,

});

export default rootReducer;