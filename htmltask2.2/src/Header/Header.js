import React, { Component } from 'react';
import './Header.scss';
 import { Link } from 'react-router-dom';
 import { RoutesConstant } from '../RouteConstant/RouteConstant';


export class Header extends Component {
    render() {
        return (
            <div class="main-header">
                <div class="header1"><h2>Test</h2></div>
                <div class="header2">
                    <div className='header3'><Link to={RoutesConstant.Home}>Home</Link></div>
                    <div className='header3'><Link to={RoutesConstant.About}>about</Link></div>
                    <div className='header3'><Link to={RoutesConstant.Login}>login</Link></div>
                    <button className='header3'>Register</button>
                </div>


                {/* <div class="header3" >
                    <Link to="/Home" class="link">Home</Link>
                </div>
                <div class="header3"><Link to="About" class="link">AboutUs</Link></div>
                <div class="header3"><Link to="Login" class="link">Login</Link></div>
                <div class="header4"><Link to='SignUp' class='link'><button>Register</button></Link></div> */}
            </div>
        )
    }
}

export default Header