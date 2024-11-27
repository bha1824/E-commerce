import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Myapi2 from "./Myapi2";
import Mens from "./Mens";

export default function Home() {
  return (
    <div>
      <Carousel />

      <div className="container mt-5">
        <h1 className="text-center mb-4">Our Products</h1>
        <div className="container py-4">
          <div className="row">
            {/* Box 1 */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Electronics</h5>
                  <p className="card-text">
                    This is one of our best-selling electronics.
                  </p>
                  <Link className="btn btn-primary" to="/electronics">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Jewellery</h5>
                  <p className="card-text">
                    This is one of the best Jewellery Collections.
                  </p>
                  <Link className="btn btn-primary" to="/jewels">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Mens Clothing</h5>
                  <p className="card-text">
                    This is our latest winter collection at discounted prices.
                  </p>
                  <Link className="btn btn-primary" to="/mens">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Womens Clothing</h5>
                  <p className="card-text">
                    This is our latest winter collection at discounted prices.
                  </p>
                  <Link className="btn btn-primary" to="/furniture">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-container mt-4">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our E-commerce Store</h1>
          <p className="hero-description">
            Discover the best products at unbeatable prices. Shop now and enjoy
            exclusive offers!
          </p>
          <Link className="hero-btn" to="/products">
            Shop Now
          </Link>
        </div>
      </div>

      <Myapi2 />
      <Mens />
    </div>
  );
}
