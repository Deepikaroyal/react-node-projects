import React from "react";
import { Link } from "react-router-dom";

 export default function Header() {
  return (
     <nav>
    <ul className="signup-link">
     {/* <li>
           <Link to="/login" className="one">
            Login Page
         </Link>
        </li> */}
 
         <li>
           <Link to="/loginform" >
            SignUp Page
          </Link>
       </li> 
         {/* <li>
           <Link to="/dashboard" className="one">
            DashBoard 
         </Link>
         </li>
         */}
  </ul>
 </nav>
  );
}