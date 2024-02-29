import React from "react";
import { Link, Route } from "react-router-dom";

function Protected({auth:auth , component:component,...rest}){

    return <Route
    {...rest}
    render = {(props)=>{

        if(auth){
        return <component/>;
        }
        else{
            window.location.href='./login';
        }
    }}
    />;
}

export default Protected;