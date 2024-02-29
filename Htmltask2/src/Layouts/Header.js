import React from "react";
import "./Header.scss";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header1">
                    <h2>Test</h2>
                </div>
                <div className="header2"></div>
                <div className="header3">Home</div>
                <div className="header4">About Us</div>
                <div className="header4">Login</div>
                <div className="header5">
                    <button>Register</button>
                </div>
            </div>
        )
    }
}