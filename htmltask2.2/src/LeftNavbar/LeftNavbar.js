import React, { Component } from 'react'
import './LeftNavbar.scss';


export class Navbar extends Component {
    render() {
        return (
                <div className="section1">
                    <h2>Heading One</h2>
                    <ol>
                        <li>Item One</li>
                        <li>Item Two</li>
                        <li>Item Three</li>
                        <li>Item Four</li>
                    </ol>
                    <h2>Heading Two</h2>
                    <ol>
                        <li>Item One</li>
                        <li>Item Two</li>
                    </ol>
                    <h2>Heading Three</h2>
                    <ol>
                        <li>Item One</li>
                        <li>Item Two</li>
                        <li>Item Three</li>
                    </ol>
                </div>
        )
    }
}

export default Navbar