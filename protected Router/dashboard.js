
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      emailid: "",
      mobileno: "",
     
    };
  }
 
  render() {
    this.state.username = localStorage.getItem("username");
    this.state.emailid = localStorage.getItem("emailid");
    this.state.mobileno = localStorage.getItem("mobileno");
    return (
      <>
        
          <div>
            <nav>
          <ul className="signup-link">
          <li>
          <Link to="/dashboard" >
            DashBoard
          </Link>
          </li>
          </ul>
          </nav>
            <h1>Employee Detail</h1>
            <h3>Name: {this.state.username}</h3>
            <h3>Email Id: {this.state.emailid}</h3>
            <h3>mobileno: {this.state.mobileno}</h3>
            </div>
    
      </>
    );
  }
}
export default Contact;