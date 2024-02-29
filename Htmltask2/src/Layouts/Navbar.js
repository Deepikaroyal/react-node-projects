
import React from "react";
// import Render from "../createpost/CreatePost";
// import CreatePost from "../createpost/CreatePost";
import CreatePost from "./Main1";
import "./Navbar.scss";

class NavBar extends React.Component{
    render(){
        return(

            
                <div className="section">
                    <div className="section1">

                    <h2 >Heading One</h2>

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

                     <h2 >Heading Three</h2>
                    <ol>
                     <li>Item One</li>
                     <li>Item Two</li>
                     <li>Item Three</li>
                     </ol>

                    </div>
                    <CreatePost/>


                </div>
            
        )
    }
}
export default NavBar;