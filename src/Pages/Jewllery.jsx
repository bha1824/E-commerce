import React, { useState, useEffect } from "react";

export default function Jewellery() {
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
    <div className="container-fluid row">
      {data.length > 0 ? (
        data.map((v) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mt-5 "
            key={v.id}
          >
            {v.category === "beauty" && (
              <div
                className="sa col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3 px-3 "
                style={{
                  background: "white",
                  width: "100%",
                  border: "none",
                  height: "680px",
                  borderRadius: "10px",
                  boxShadow: "1px 1px 4px 6px rgba(5, 5, 1, 0.1)",
                }}
              >
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="card-img-top"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                />
                <div className="card-body">
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
                    style={{ textTransform: "uppercase" }}
                  >
                    {v.category}
                  </p>
                  <h1 style={{ fontSize: "26px" }}>
                    MRP:{" "}
                    <span
                      style={{
                        color: "rgba(0, 131, 83, 0.94)",
                        fontWeight: "600",
                        fontSize: "32px",
                      }}
                    >
                      ${v.price}
                    </span>
                  </h1>
                  <h6 style={{ color: "gray" }}>[INCLUSIVE OF ALL TAXES]</h6>
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
                  href="#cart"
                  className="btn"
                  style={{
                    padding: "0.8rem 2.6rem",
                    height: "70px",
                    background: "orange",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "22px",
                    fontFamily: "calibri",
                    border: "1px solid #f07119",
                    fontWeight: "bold",
                    marginBottom: "0",
                    marginTop: "3rem",
                    bottom: "0",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "40px" }}>🛒</span> &nbsp; ADD TO
                  CART
                </a>
                <br />
                <br />
                <br />
                <br />
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Loading products...</p> // Display a loading message if data is empty
      )}
    </div>
  );
}
