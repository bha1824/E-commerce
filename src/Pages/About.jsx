import React from "react";
import about from "../images/abouts.jpg";
export default function About() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">About Us</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={about} alt="About Us" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>Who We Are</h2>
          <p>
            Welcome to our e-commerce store! We are committed to bringing you
            the best products at unbeatable prices. Our journey began with a
            passion for quality and customer satisfaction, and we've grown to
            serve thousands of happy customers worldwide.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make online shopping seamless, enjoyable, and
            trustworthy. We strive to provide high-quality products, excellent
            customer service, and a memorable shopping experience.
          </p>
          <h2>Contact Us</h2>
          <p>
            Have questions? Reach out to our support team anytime at
            <strong> support@ecommerce.com</strong>.
          </p>
        </div>
      </div>

      {/* reviews */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Customer Testimonials</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-box">
              <p>
                "Amazing products, excellent service! I will definitely buy
                again."
              </p>
              <p>- John Doe</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-box">
              <p>"The quality exceeded my expectations. Highly recommend!"</p>
              <p>- Jane Smith</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-box">
              <p>"Fast delivery and great prices. Five stars!"</p>
              <p>- Emily Taylor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
