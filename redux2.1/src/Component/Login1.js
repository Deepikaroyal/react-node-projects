import React from "react";
import { alertActions } from "../Action/ alertActions";
import { connect } from "react-redux";
 

class Login1 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            loggedIn: false,
        }

    }    

    handleSubmit= (e) =>{
        console.log(this.state);
        e.preventDefault();
        this.setState({loggedIn:true});
        this.props.loginData(this.state);
        //  window.location.href = "./Dashboard";
        

        
    }   

    handleChange= (e) =>{
            
            this.setState({[e.target.name]:e.target.value})
            
    }


    render(){

      return(
        <div id="main-registration-container">
        <div id="register">
      <form onSubmit={this.handleSubmit}>



         <label>Email</label>
         <input type="text" name='email'  onChange={this.handleChange}></input>



         <label>Password</label>
         <input type="text" name='password' onChange={this.handleChange}></input> 


         <input type='submit'  value='Submit' onClick={this.handleSubmit} className="button"/> 
            

      </form>
      </div>
      </div>
      )
    }

} 

const mapStateToProps = state => ({
    data: state
});

const mapDispatchToProps = dispatch => ({
    loginData: (value) => dispatch(alertActions(value))

});



export default connect(mapStateToProps, mapDispatchToProps)(Login1)
