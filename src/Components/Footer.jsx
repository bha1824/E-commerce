import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white mt-5">
        <div class="container py-4">
          <div class="row">
            {/* About Section  */}
            <div class="col-md-3">
              <h5>About Us</h5>
              <p class="small">
                We are dedicated to providing the best online shopping
                experience with quality products and customer support.
              </p>
            </div>

            {/* Links Section  */}
            <div class="col-md-3">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/home" class="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/product" class="text-white">
                    Mens
                  </a>
                </li>
                <li>
                  <a href="/Cart" class="text-white">
                    Womens
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Support Section */}
            <div class="col-md-3">
              <h5>Customer Support</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/faq" class="text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/shipping" class="text-white">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="/privacy" class="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" class="text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div class="col-md-3">
              <h5>Contact Us</h5>
              <p class="small">Email: support@example.com</p>
              <p class="small">Phone: +1 (123) 456-7890</p>
              <p class="small">Address: 1234 Market St, City, Country</p>
              <div>
                <a href="abc" class="text-white me-2">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="abc" class="text-white me-2">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="abc" class="text-white me-2">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="abc" class="text-white">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <hr class="border-light" />
          <div class="text-center small">
            © 2024 Eshop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
