import React from 'react';
import rootReducer from '../reducers/Index';
import alertReducer from '../reducers/alertReducers';
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({reducer:rootReducer});
 