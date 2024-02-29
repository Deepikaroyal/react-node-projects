import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import LoginForm from './mycomponent/loginform';
import Login from './mycomponent/login';
import {BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import Header from "./mycomponent/header";
import Board from "./mycomponent/dashboard";
import {Protected1} from './mycomponent/Protected';
import {ProtectedSignUp} from './mycomponent/Protected';
import Protectdashboard from './mycomponent/Protected';


ReactDOM.render(
  <React.StrictMode>
    
    <>
    <Router>
      <Header/>
      <Routes>
       <Route  path="/loginform" element={<LoginForm/>}/>
       < Route path="/login" element={ <Protected1 component={Login}/>}/> 
        {/* <Route element = {<ProtectedSignUp/>}> */}
        {/* <Route element = {<Protected1/>}> */}
        <Route path="/dashboard" element={<Protectdashboard component={Board}/>}/>
         {/* </Route></Route> */}
      </Routes>
    </Router>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


