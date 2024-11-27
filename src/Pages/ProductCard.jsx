import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="col-md-4 mt-4 mb-4">
      <div
        className="card shadow-sm"
        style={{
          background: "white",
          border: "none",
          height: "450px", // Set the height of the card
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={product.thumbnail}
          alt={product.name}
          className="card-img-top"
          style={{
            height: "200px", // Adjusted to fit the card height
            objectFit: "cover",
            borderRadius: "10px 10px 0px 0px",
          }}
        />
        <div className="card-body" style={{ overflow: "hidden", flexGrow: 1 }}>
          <h5 className="card-title">{product.name}</h5>
          <div
            style={{
              marginTop: "10px",
              color: "orange",
              fontSize: "18px",
            }}
          >
            {"★".repeat(5)}
          </div>
          <p
            className="card-text"
            style={{
              overflow: "hidden", // Prevents content from overflowing
              textOverflow: "ellipsis", // Adds ellipsis for overflowed text
              whiteSpace: "nowrap", // Prevents wrapping
              maxHeight: "50px",
            }}
          >
            {product.description}
          </p>
          <h1 style={{ fontSize: "20px", margin: "10px 0" }}>
            MRP:{" "}
            <span
              style={{
                color: "rgba(0, 131, 83, 0.94)",
                fontWeight: "600",
                fontSize: "26px",
              }}
            >
              ${product.price}
            </span>
          </h1>
          <h6 style={{ color: "gray" }}>[INCLUSIVE OF ALL TAXES]</h6>
        </div>
        <div className="d-flex justify-content-between mt-auto px-3 mb-3">
          <a
            href="/cart"
            className="btn"
            style={{
              padding: "0.5rem 1.5rem",
              background: "orange",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              fontFamily: "calibri",
              border: "1px solid #f07119",
              fontWeight: "bold",
            }}
          >
            Buy Now
          </a>
          <button
            className="btn"
            style={{
              padding: "0.5rem 1.5rem",
              background: "orange",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              fontFamily: "calibri",
              border: "1px solid #f07119",
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
