import React from "react";
import {  Navigate, Outlet, Route, } from "react-router-dom";

 //for protected login page

//  const auth = () =>{
//      const access = {loggingYou: localStorage.getItem('check')} //for signUp page
//      return access && access.loggingYou;
//  }

// export const ProtectedSignUp = ()=>{
//     const isAuth = auth();
//     return isAuth? <Outlet/> : <Navigate to ="/loginform" />//for signUp page
// };
// //


 //for protected login page

const auth1 = () =>{
    const access = {loggingYou: localStorage.getItem('check1')} //for login page
    return access && access.loggingYou;
}



export function Protected1({component:Component,...rest}){
    const isAuth = auth1();
console.log("this", isAuth);

if( isAuth=='true') 

  return   <Navigate to ="/dashboard"/> ;

   else
   
  return <Component/>;

}

//for protected Dashboard page

const auth2= () =>{
    const access = {loggingYou: localStorage.getItem('check1'),loggingYou1: localStorage.getItem('check')} //for protected Dashboard page
    return  access && access.loggingYou && access.loggingYou1;
}


function Protectdashboard({component:Component,...rest}){
const isAuth = auth2();
console.log("this", isAuth);

  if( isAuth=='true') 

  return <Component/>;

   else
   
  return  <Navigate to ="/login"/> 

}
export default Protectdashboard;








// function Protected({auth:auth , component:component,...rest}){
//      
//     return <Route
//     {...rest}
//     render = {(props)=>{

//         if(auth){
//         return <component/>;
//         }
//         else{
//             window.location.href='./login';
//         }
//     }}
//     />;
// }