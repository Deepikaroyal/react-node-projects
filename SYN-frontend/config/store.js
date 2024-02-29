import rootReducer from "../reducer";
import thunk from "redux-thunk";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage' ;
                                                                                                         


//export default configureStore({reducer:rootReducer},applyMiddleware(thunk));

// const persistConfig = {
//   //setTimeout:1000,
//   key: 'root',
//   storage
// }

//const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer:rootReducer,
    // devTools: process.env.NODE_ENV !== 'production',
    //devTools: process.env.NEXTAUTH_URL!=='dev',
    middleware: [thunk]
});
export default store;
