import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const getapi = async () => {
      const response = await fetch(
        "https://shivraj-chavan.github.io/api/electronics.json"
      );
      const apidata = await response.json();
      setdata(apidata);
    };

    getapi();
  });
  return (
    <div className="container-fluid row">
      {data.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
