import React from 'react';
import './Login.scss';
import Footer from '../Footer/Footer';


function Login(){
    return (
        <div className='form_wrapper'>
          <div className='inner_wrapper'>
              <h3>Login Page</h3>
                <div className='img'>
                <img src = "https://www.clipartkey.com/mpngs/m/314-3148588_transparent-edit-icon-png.png" alt="logo"></img>
                </div>
                  <div className='inputfield1'>
                     <label>Email:</label>
                        <input type="text" placeholder='Enter your mail'/>
                  </div>

                  <div className='inputfield2'>
                    <label>Password:</label>
                        <input type="text"  placeholder='Enter your Password'/>
                  </div>
                  <div className='msg'>
                    <p>Forgot Password?</p>
                  </div>
                   <div>
                   <button type="submit"className='btn'>Login</button>
                    
                  </div>
            </div>
        </div>
        
         
      );
}
export default Login;