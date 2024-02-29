import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Protected1 } from "./Protected";
import {data} from "./loginform";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid: "",
      password: "",
    };
  }
  handlechangeall = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    
  };

  handlesubmit = (event) => {
    event.preventDefault();
    let Fetch_Data = JSON.parse(localStorage.getItem('user'));
    console.log(Fetch_Data);
    let len=Fetch_Data.length;
    console.log(len);
    //console.log(Fetch_Data.Length);
   for(let i=0; i<len; i++){
    if ( Fetch_Data[i].emailid ==this.state.emailid && Fetch_Data[i].password ==this.state.password ){

      // this.state.emailid === (localStorage.getItem("emailid" )) &&
      // this.state.password === (localStorage.getItem("password" ))
      var Email=Fetch_Data[i].emailid;
      var Password=Fetch_Data[i].password;
     
     
    //   localStorage.setItem('check1',true);
    
    //   // this.setState({ emailid: "", password: "" });
  
    //   window.location.href="./dashboard";
      
    //   } else {
    //   alert("Data is Not Same");
    // }
    // window.location.href = "./dashboard";
  }
}
  if(Email==this.state.emailid && Password==this.state.password){
    alert("Yes");
    localStorage.setItem('check1',true);
    window.location.href="./dashboard";
  }
  else {
    alert("Data is Not Same");
  }
  }

  render() {
    
    return (

      <div>
      {/* <nav>
    <ul className="signup-link">
    <li>
    <Link to="/login" >
      Login
    </Link>
    </li>
    </ul>
    </nav> */}
        <div id="main-registration-container">
        <div id="register">
        <h2>Login Page</h2>
        <form onSubmit={this.handlesubmit}>
          
            <label>User Name :-</label>

            <input
              type={"emailid"}
              name={"emailid"}
              placeholder={"Enter emailid"}
              value={this.state.emailid}
              onChange={this.handlechangeall}
            />
            <br />
            <span id="span2"></span>
            <br />
            <label >Password :-</label>

            <input
              type={"password"}
             
              name={"password"}
              placeholder={"Enter Password"}
              value={this.state.password}
              onChange={this.handlechangeall}/>
            
            {/* <span id="span8"></span> */}
        
            <button type="submit" className="button">Login</button>
             </form>
      </div>
      </div>
      </div>
    );
  }
}

export default Login;
