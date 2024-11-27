import React from "react";

export default function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Us</h1>
      <p className="text-center">
        Have a question? We'd love to hear from you. Send us a message using the
        form below.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
