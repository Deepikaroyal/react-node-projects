import React from "react";
import "./Component.css";
import { Link } from "react-router-dom";
import { RoutesConstant } from '../Constants/Constants';

function Component() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <ul class="navbar navbar-light bg-black">
        <a class="navbar-brand" href="#">
       <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt="" width="100px" height="24" class="d-inline-block align-text-top"/>
       Bootstrap
       </a>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">
              FITNESS
            </a>
          </li>
          <li class="nav-item"> <Link to ={RoutesConstant.Accordion}>
            <a class="nav-link">
            CARE
            </a>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            MIND
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">STORE</a>
          </li>
          <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
        </ul>
      </div>

      
      <div className="container ">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="http://lh3.googleusercontent.com/rjUl1CYQtXtAZEF9bczFBpV1yEdcdsXKBk7qqtzWcL2AbYFCjv0dm3ecZ_Painn90JHeoy0iUBdBTX_PqTLqUqkGgL8v=s750" class="tales d-block w-100" alt="Image"/>
    </div>
    <div class="carousel-item">
      <img src="https://images.moneycontrol.com/static-mcnews/2022/02/Gym-Cult-Fit.jpg?impolicy=website&width=770&height=431" class="tales d-block w-100" alt="Image"/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/VRROQiID3Qk/maxresdefault.jpg" class="tales d-block w-100" alt="Image"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>

      </div>
     {/* Modal */}
     
     <button type="button" class="btn btn-primary  "  data-bs-toggle="modal" data-bs-target="#exampleModal" id="modalbutton">
  TRY FOR FREE
</button>

{/* Modal */}
<div class=" modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Woohoo, you're reading this text in a modal!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

{/* Accordion */}

    <div class="accordion accordion-flush"  id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Choose your cultpass
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Book a Free Trails
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Cult pass elite
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  </div>
  <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  </div>

  </div>
    
  );
}

export default Component;
