import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className="container-fluid">
    <div className='row'>
      <div className="col ms-auto" >
        <h2>Test</h2>
      </div>
    
      <div className="home col-md-1" >
        Home
      </div>
    
      <div className="col-md-1" > 
        Login
      </div>
    
      <div className="col-md-1" >
        AboutUs
      </div>
    
      <div className="col-md-1" >
        <button>Register</button>
      </div>
    </div>
        </div>
  )
}
