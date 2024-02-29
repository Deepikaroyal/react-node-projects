import React ,{Component} from 'react'
/*
export const form = () => {
  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}
export default form; */
/*const defaultState = {
  email:null,
  emailError:null,
  username:null,
  usernameError:null
}
let flag=0;*/

const validEmailRegex = 
RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) =>{
  let valid = true;
  Object.values(errors).forEach(
   (val) => val.length>0 && (valid=false)
  );

  return valid;
}


class Form extends Component {
  constructor(props){
    super(props);
     
    this.state={
      username:"",
      email:"",
      password:"",
      contact:"",
    errors:{
      username:"",
      email:"",
      password:"",
      contact:"",
    }
    };
    
  }/*
   handleFormValidation(){
     const{username ,email,password, contact }= this.state;
     let errors ={}
   }*/
  handlechange=(event)=>{
    console.log("handelevent")
    event.preventDefault();
    const { name, value } = event.target;
      let errors = this.state.errors;

        switch(name){
        case 'username':
        errors.username =
        value.length <5 ? 'Username must be 5 characters long!': ' ';
         break;
         case 'email' :
         errors.email = 
         validEmailRegex.test(value) ? '':"Invalid mail";
         break;
         case 'contact' : 
         errors.contact = 
         value.length <10 ? 'number must be 10 digit long' : '';
         case 'password':
         errors.password = 
         value.length<8 ? 'Password must be 8 characters long!' : '';
         break;
         default:
         break;
      }
      this.setState({errors, [name]: value});
     
      }
    
      /*this.setState({
        username:event.target.value,
        email:event.target.value,
        });*/
  /*

  handleemail=(event)=>{
    console.log("handel")
    this.setState({
      email:event.target.value,
    });
  }
    validate(){
      const reg = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
      if(!this.state.email|| reg.test(this.state.email)===false){
        this.setState({emailError:"Invalid email"});
        return false;
      }
      return true;
    }*/  

    /*
     submit(){
       
       console.log("msg");
       if(this.handlechange()){
         console.warn(this.state.errors);
         this.setState(this.state);
         
       }
       
     }/*
     validateName(){
       console.log("validateName", this.state)
       if( !this.state.username.length<5){
          this.setState({usernameError:"Invalid Name"});
          return false;
       }
       return true;
     }*/
  
/*
  handlesubmit= (event)=>{
    document.getElementById('main1').innerHTML=`${this.state.username}`;
    document.getElementById('main2').innerHTML=`${this.state.email}`;

    event.preventDefault();

  }*/
    handleSubmit = (event) =>{
      event.preventDefault();
      if(validateForm(this.state.errors)){
        console.info("valid form");
      }
        else{
          console.warn("Invalid Form");
        }
      }

    

    render() {
      const {errors} = this.state;
      return( 
      <div className='form-container'>

        <form className='form' onSubmit={this.handleSubmit} noValidate >
      <h2>Sign up</h2>
      <div className='name-input'>
        <label htmlFor='username'>Username </label>
        <input 
             type='text'
             name='username'
             placeholder='Enter your name'
             onChange={this.handlechange} noValidate/>
             {errors.username.length > 0 && 
                <span className='error'>{errors.username}</span>}
         </div>

      <div className='name-input'>
        <label htmlFor='email'>Email</label>
        <input 
             type='email'
             name='email'
             placeholder='Enter your email'
             onChange={this.handlechange} noValidate/>
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
              </div> 


      <div className='name-input'>
        <label htmlFor='contact'>Contact Number </label>

        <input 
             type='text'
             name='contact'
             placeholder='Contact Number '
             onChange={this.handlechange} noValidate />
             {errors.contact.length > 0 && 
              <span className='error'>{errors.contact}</span>}
            
      </div>

      <div className='name-input'>
        <label htmlFor='password'>Password </label>

        <input 
             type='password'
             name='password'
             placeholder='Enter your password'
             onChange={this.handlechange} noValidate />
             {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
      </div>


      <button className='form-btn' type='submit' >Click me</button>

      <div>{this.name = this.state.username}<br/> {this.email=this.state.email}<br/>
       {this.contact= this.state.contact}</div>
      
      </form>
      </div>
     );
    }
  }
  export default Form;