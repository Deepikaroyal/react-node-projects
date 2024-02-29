import React, { Component } from 'react'
import './Middle.scss';
import image from "../image/art.png";

export class Middle extends Component {
    render() {
        return (
            <>
                {/* ********* for main body ******* */}
                    
                <div class="block">
                    <h2>Create Post</h2>
                    <input type="text" placeholder="Create Post" />
                </div>

                    {/* ******* for block one ******** */}
                    <div class="block1">
                    <div class="block11">
                        <div className="block11-img">
                            <img src={image} alt="baby" />
                        </div>
                            <div class="color">
                                <h1>Post Name</h1>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Maxime, optio nesciunt numquam.
                                </p>
                            </div>
                        </div>
                        <div class="block12">
                            <h2>Post One</h2>
                            <h3>29 Jul 12:00 P.M</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptates optio ratione nostrum corrupti possimus. Quos,
                                molestias cum libero tenetur enim error doloribus id temporibus at
                                corrupti accusamus itaque ea sint amet obcaecati vitae debitis
                                perspiciatis fugiat cupiditate atque assumenda rerum ut? Amet
                                atque nam tempore dicta veniam ratione totam similique?
                            </p>
                        </div>
                </div>
                {/* ******* for block one ******** */}
                <div class="block1">
                    <div class="block11">
                        <div className="block11-img">
                            <img src={image} alt="baby" />
                        </div>
                        <div class="color">
                            <h1>Post Name</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Maxime, optio nesciunt numquam.
                            </p>
                        </div>
                    </div>
                    <div class="block12">
                        <h2>Post One</h2>
                        <h3>29 Jul 12:00 P.M</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates optio ratione nostrum corrupti possimus. Quos,
                            molestias cum libero tenetur enim error doloribus id temporibus at
                            corrupti accusamus itaque ea sint amet obcaecati vitae debitis
                            perspiciatis fugiat cupiditate atque assumenda rerum ut? Amet
                            atque nam tempore dicta veniam ratione totam similique?
                        </p>
                    </div>
                </div>
                {/* ******* for block one ******** */}
                <div class="block1">
                    <div class="block11">
                        <div className="block11-img">
                            <img src={image} alt="baby" />
                        </div>
                        <div class="color">
                            <h1>Post Name</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Maxime, optio nesciunt numquam.
                            </p>
                        </div>
                    </div>
                    <div class="block12">
                        <h2>Post One</h2>
                        <h3>29 Jul 12:00 P.M</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates optio ratione nostrum corrupti possimus. Quos,
                            molestias cum libero tenetur enim error doloribus id temporibus at
                            corrupti accusamus itaque ea sint amet obcaecati vitae debitis
                            perspiciatis fugiat cupiditate atque assumenda rerum ut? Amet
                            atque nam tempore dicta veniam ratione totam similique?
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Middle;