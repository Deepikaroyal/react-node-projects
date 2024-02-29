import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Dashboard1 from './Components/Dashboards/Dashboard1';
import Dashboard2 from './Components/Dashboards/Dashboard2';
import Dashboard3 from './Components/Dashboards/Dashboard3';
import Dashboard4 from './Components/Dashboards/Dashboard4';



ReactDOM.render(
  <React.StrictMode>
     <>
     <BrowserRouter>
     <Header/>
    <Routes>
      <Route path ='/Login' element = {<Login/>}></Route>
      <Route path ='/Dashboard1' element = {<Dashboard1/>}></Route>
      <Route path ='/Dashboard2' element = {<Dashboard2/>}></Route>
      <Route path ='/Dashboard3' element = {<Dashboard3/>}></Route>
      <Route path ='/Dashboard4' element = {<Dashboard4/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
