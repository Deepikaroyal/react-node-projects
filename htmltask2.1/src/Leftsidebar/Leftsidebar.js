import React from "react";
import "./Leftsidebar.scss";
import Rightsidebar from "../Rightsidebar/Rightsidebar";
import Middle from "../Middle/Middle";

export default class Leftsidebar extends React.Component {
  render() {
    return (
      <div className="universal">
        <div className="left_sidebar_container">
          <div className="section">
            <h2>Heading One</h2>

            <ul>
              <li>Item One</li>
              <li>Item Two</li>
              <li>Item Three</li>
              <li>Item Four</li>
            </ul>

            <h2>Heading Two</h2>

            <ul>
              <li>Item One</li>
              <li>Item Two</li>
            </ul>

            <h2>Heading Three</h2>
            <ul>
              <li>Item One</li>
              <li>Item Two</li>
              <li>Item Three</li>
            </ul>
          </div>
        </div>
        <Middle />
        <Rightsidebar />
      </div>
    );
  }
}
