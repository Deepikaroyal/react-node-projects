import React from "react";
import Header from "../Header/Header";
 import Navbar from "../LeftNavbar/LeftNavbar";
 import RightNav from "../RightNavbar/RightNavbar";
 import './Mainlayout.scss';
import Middle from "../Middle/Middle";

function MainLayout() {
    return (
        <div className="main-div">
            <div className="header-div">
                {/* <Header /> */}
            </div>
            <div className="body-div">
                <div className="container">
                    <div className="left-navbar">
                        <Navbar />
                    </div>
                    <div className="middle-body">
                        <Middle/>
                    </div>
                    <div className="right-div">
                        <RightNav/>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default MainLayout;