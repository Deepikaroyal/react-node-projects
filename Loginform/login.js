import React, { Component } from "react";

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
    if (
      this.state.emailid === localStorage.getItem("emailid") &&
      this.state.password === localStorage.getItem("password")
    ) {
      alert("Data is Same");
      this.setState({ emailid: "", password: "" });
    } else {
      alert("Data is Not Same");
    }
    window.location.href = "./dashboard";
  }

  render() {
    
    return (
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
    );
  }
}

export default Login;