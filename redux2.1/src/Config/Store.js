import { configureStore } from "@reduxjs/toolkit";
import { alert } from "../Reducers/alertReducers";
import { createLogger } from "redux-logger";
import rootReducer from "../Reducers/reducerIndex";

export default configureStore({reducer:rootReducer});

