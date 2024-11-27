import React, { useState, useEffect } from "react";

export default function Mens() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const getapi = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=194"
        );
        const apidata = await response.json();
        setdata(apidata.products); // Assuming products is the correct key
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getapi();
  }, []);
  return (
    <div className="container-fluid row mt-5">
      {data.length > 0 ? (
        data.map(
          (v) =>
            v.category === "fragrances" && (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-4"
                key={v.id}
              >
                <div
                  className="sa"
                  style={{
                    background: "white",
                    width: "100%",
                    border: "none",
                    height: "530px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="card-img-top"
                    style={{
                      borderRadius: "10px 10px 0px 0px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="card-body"
                    style={{
                      padding: "1rem",
                      overflow: "hidden",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h5 className="card-title">{v.title}</h5>
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
                          textTransform: "uppercase",
                          margin: "0.5rem 0",
                        }}
                      >
                        {v.category}
                      </p>
                      <h1 style={{ fontSize: "20px", margin: "10px 0" }}>
                        MRP:{" "}
                        <span
                          style={{
                            color: "rgba(0, 131, 83, 0.94)",
                            fontWeight: "600",
                            fontSize: "24px",
                          }}
                        >
                          ${v.price}
                        </span>
                      </h1>
                      <h6 style={{ color: "gray" }}>
                        [INCLUSIVE OF ALL TAXES]
                      </h6>
                      <p
                        className="card-text"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2, // Allows only 2 lines of text
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {v.description}
                      </p>
                    </div>
                    <a
                      href="/cart"
                      className="btn"
                      style={{
                        padding: "0.8rem 1.6rem",
                        background: "orange",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontFamily: "calibri",
                        border: "1px solid #f07119",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "1rem",
                      }}
                    >
                      <span style={{ fontSize: "24px" }}>🛒</span> &nbsp; ADD TO
                      CART
                    </a>
                  </div>
                </div>
              </div>
            )
        )
      ) : (
        <p>Loading products...</p> // Display a loading message if data is empty
      )}
    </div>
  );
}
