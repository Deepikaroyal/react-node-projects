import React from "react";
import Header from "../Header";
import "./Middle.css";
import image from "../images/art1.png";
function Middle() {
  return (
    <div class="container-fluid">
      <div class="row">
        <Header />
      </div>
      <div class="row ">
        <div class="col-lg " /*style={{ border: "2px solid red" }}*/>
          <h2 className="heading">Heading One</h2>
          <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
            <li>Item Four</li>
          </ol>
          <h2 className="heading">Heading Two</h2>
          <ol>
            <li>Item One</li>
            <li>Item Two</li>
          </ol>
          <h2 className="heading">Heading Three</h2>
          <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
          </ol>
        </div>

        <div class="col-lg-8 " /*style={{ border: "2px solid green" }}*/>
          <div className="mb-3">
            <label>Create Post</label>
            <input
              type="text"
              className="form-control"
              placeholder="Create Post"
            />
          </div>

          <div class="card mb-3" style={{ flexDirection: "row" }}>
            <img src={image} alt="Image" />

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </p>
            </div>
          </div>
          {/* <div class="card mb-3">
                        <div class="row">
                            <div class="col-md-4">
                                <img src={image} alt="Image"/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p ><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            </div>
                            </div> */}

          <div class="card mb-3" style={{ flexDirection: "row" }}>
            <img src={image} alt="Image" />

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </p>
            </div>
          </div>

          <div class="card mb-3" style={{ flexDirection: "row" }}>
            <img src={image} alt="Baby" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg" /*style={{ border: "2px solid black" }}*/>

        <div class="card mb-3" >
            <img style={{ height: "180px", display: "block" }} src={image} class="card-img-top" alt="Image" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card mb-3">
            <img style={{ height: "180px", display: "block" }} src={image} class="card-img-top" alt="Image" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card mb-3">
            <img style={{ height: "180px", display: "block" }}  src={image} class="card-img-top" alt="Image" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Middle;
