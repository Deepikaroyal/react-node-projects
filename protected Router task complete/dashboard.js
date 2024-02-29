
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Protected2 } from "./Protected";
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      emailid: "",
  
     
    };
  }
  
  render() {

    var Fetch_data = JSON.parse(localStorage.getItem('user'))
    var len = Fetch_data.length;
    var key1 = localStorage.getItem('key');
    for(let i=0 ;i<len; i++){
      if(i==key1){
    this.state.username = Fetch_data[i].username;
    this.state.emailid = Fetch_data[i].emailid;
    }
  }
    return (
      <>
        
          <div>
            {/* <nav>
          <ul className="signup-link">
          <li>
          <Link to="/dashboard" >
            DashBoard
          </Link>
          </li>
          </ul>
          </nav> */}
            <h1>Employee Detail</h1>
            <h3>Name: {this.state.username}</h3>
            <h3>Email Id: {this.state.emailid}</h3>
           
            </div>
    
      </>
    );
  }
}
export default Contact;