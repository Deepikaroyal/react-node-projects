import React from "react";
import "./Main1.scss";
import image from "../Assets/art.png";

export default class CreatePost extends React.Component {
    render() {
        return (
            <>
            
            <div class="mid-body">
                <h2>Create Post</h2>
                <div class="block">
                    <input type="text" placeholder="Create Post" />
                </div>

                
                <div class="block1">
                    <div class="block11">
                        <img src={image} alt="baby" />
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


               

                <div class="block1">
                    <div class="block11">
                        <img src={image} alt="baby" />
                        <div class="color">
                            <h1>Post Name</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Maxime, optio nesciunt numquam.
                            </p>
                        </div>
                    </div>
                    <div class="block12">
                        <h2>Post Two</h2>
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
             
                <div class="block1">
                    <div class="block11">
                        <img src={image} alt="baby" />
                        <div class="color">
                            <h1>Post Name</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Maxime, optio nesciunt numquam.
                            </p>
                        </div>
                    </div>
                    <div class="block12">
                        <h2>Post Three</h2>
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








            </div>

         

            <div class="section3">
                <div class="section31">
                    <img src={image} alt="baby" />
                    <div class="color1">
                        <h1>Post Name</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
                            optio nesciunt numquam.
                        </p>
                    </div>
                </div>
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
        </>
        )
    }
}