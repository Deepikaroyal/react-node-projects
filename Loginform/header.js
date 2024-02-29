import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login" className="one">
            Login Page
          </Link>
        </li>

        <li>
          <Link to="/loginform" className="one">
            SignUp Page
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="one">
            DashBoard 
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}