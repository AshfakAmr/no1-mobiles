import React from "react";
import Image1 from "../../assets/product/p-1.jpg";
import Image2 from "../../assets/product/p-2.jpg";
import Image3 from "../../assets/product/p-3.jpg";
import Image7 from "../../assets/product/p-9.jpg";
import Image4 from "../../assets/product/p-4.jpg";
import Image5 from "../../assets/product/p-5.jpg";
import Image6 from "../../assets/product/p-7.jpg";
import Heading from "../Shared/Heading";

import ProductsCard from "./ProductsCard";

const ProductsData = [
  {
    id: 1,
    name: "Boat Headphone",
    price: `$${120}`,
    image: Image1,
    aosDelay: "0",
  },
  {
    id: 2,
    name: "Rocky Mountain",
    price: `$${120}`,
    image: Image2,
    aosDelay: "200",
  },
  { id: 3, name: "Noise", price: `$${120}`, image: Image3, aosDelay: "400" },
  {
    id: 4,
    name: "Realme 3s",
    price: `$${120}`,
    image: Image4,
    aosDelay: "400",
  },
  {
    id: 5,
    name: "One Plus Headphone",
    price: `$${120}`,
    image: Image5,
    aosDelay: "0",
  },
  {
    id: 6,
    name: "Apple Airpods",
    price: `$${120}`,
    image: Image6,
    aosDelay: "200",
  },
  {
    id: 7,
    name: "Boat Avante",
    price: `$${120}`,
    image: Image7,
    aosDelay: "400",
  },
  {
    id: 8,
    name: "Marshall",
    price: `$${120}`,
    image: Image1,
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <Heading title={"Our Products"} subtitle="Explore Our Products" />
        {/* Body Section */}
        <ProductsCard ProductsData={ProductsData} />
      </div>
    </div>
  );
};

export default Products;
