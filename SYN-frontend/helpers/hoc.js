// HOC/withAuth.jsx
import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect, useState } from "react";
const withAuth = (WrappedComponent) => {
  
  return (props) => {
    //const [token,setToken] = useState('')
    // checks whether we are on client / browser or server.
   // const Router = useRouter();
   let accessToken
   useEffect(() => {
    async function getToken() {
      // You can await here
       accessToken =  localStorage.getItem("token");
      //console.log("$$$$",accessToken)
      if(accessToken){
      // setToken(token)
      }
     
  }
  getToken()
      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/");
        //return null;
      }
    },[])
      // If this is an accessToken we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
       
  //}

    // If we are on server, return null
   // return null;
  };
};

export default withAuth;