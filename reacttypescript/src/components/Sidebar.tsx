import React from "react";
import { Nav } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import { memo } from "react";

const Sidebar = () => {
  // console.log("rendering sidebar")
  return (
    <>
      <Nav  className="flex-column">
    
        
         <Nav.Link>
         
          <AiOutlineUser className="sidebar-icon" />
          <Link to ='/' className="sidebar-link">
          User
          </Link>
          </Nav.Link>
       
        <Nav.Link >
          <ImProfile className="sidebar-icon" />
          <Link to='/dashboard/:id' className="sidebar-link">
          Dashboard
          </Link>
        </Nav.Link>
      </Nav>
    </>
  );
};
export default memo(Sidebar);
