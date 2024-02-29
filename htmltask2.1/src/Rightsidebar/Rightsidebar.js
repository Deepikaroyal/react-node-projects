// import React from "react";
import "./Rightsidebar.scss";
import image from "../Rightsidebar/art.png";
import React, { Component } from "react";

class Rightsidebar extends Component {
  render() {
    return (
      <div className="universal1">
      
     
        <div className="right_sidebar_container">
          <div className="right_sidebar_img_container">
            <img src={image} alt="Image" />
            <div class="color1">
              <h1>Post Name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maxime, optio nesciunt numquam.
              </p>
            </div>
          </div>
        </div>
        <div className="right_sidebar_container">
        <div class="section32">
                    <img src={image} alt="baby" />
                    <div class="color1">
                        <h1>Post Name</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
                            optio nesciunt numquam.
                        </p>
                    </div>
                </div>
                </div>
                <div className="right_sidebar_container">
                <div class="section33">
                    <img src={image} alt="baby" />
                    <div class="color1">
                        <h1>Post Name</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
                            optio nesciunt numquam.
                        </p>
                    </div>
                </div>
      </div>
    </div>
    );
  }
}

export default Rightsidebar;
