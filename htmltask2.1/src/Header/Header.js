import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { RoutesConstant } from '../RouteConstant/Constants';



export default class Header extends React.Component {
  render() {
    return (

        <div className="main_header_div">
          <div className="inner_header_div">
            <ul className="header_left_content_div">
              <li>Test</li>
            </ul>

            <div className="header_right_content_div">
              <ul className="header_right_content">
                <li><Link to={RoutesConstant.Home}> Home</Link></li>
                <li><Link to={RoutesConstant.About}>AboutUs</Link></li>
                <li><Link to={RoutesConstant.Login}>Login</Link></li>
                
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
