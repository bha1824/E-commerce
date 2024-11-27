import React from "react";
import img1 from "../images/iphone.jpg";
import img2 from "../images/iphone2.jpg";
import img3 from "../images/camera.jpg";

export default function Carousel() {
  return (
    <div
      id="homepageCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#homepageCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#homepageCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#homepageCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img1}
            className="d-block w-100"
            alt="Welcome to E-Shop"
            height="670px"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to E-Shop</h5>
            <p>Explore the best deals and products today!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100"
            alt="Best Products"
            height="670px"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Our Best Products</h5>
            <p>Find top-rated items just for you.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="d-block w-100"
            alt="Exclusive Offers"
            height="670px"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Exclusive Offers</h5>
            <p>Don’t miss out on our special discounts.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homepageCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homepageCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
