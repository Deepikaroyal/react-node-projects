import React, { Component } from 'react'
import './RightNavbar.scss';
import image from "../image/art.png";

export class RightNav extends Component {
    render() {
        return (
            <>

                {/* ************** for right side ******** */}
                <div class="section31">
                    <div className='section31-img'>
                        <img src={image} alt="baby" />
                    </div>
                        <div class="color1">
                            <h1>Post Name</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
                                optio nesciunt numquam.
                            </p>
                        </div>
                </div>
                <div class="section31">
                    <div className='section31-img'>
                        <img src={image} alt="baby" />
                    </div>
                    <div class="color1">
                        <h1>Post Name</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
                            optio nesciunt numquam.
                        </p>
                    </div>
                </div>
                <div class="section31">
                    <div className='section31-img'>
                        <img src={image} alt="baby" />
                    </div>
                    <div class="color1">
                        <h1>Post Name</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
                            optio nesciunt numquam.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default RightNav;
