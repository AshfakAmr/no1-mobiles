import React from "react";

import brand1 from "../../assets/brand/br-1.png";
import brand2 from "../../assets/brand/br-2.png";
import brand3 from "../../assets/brand/br-3.png";
import brand4 from "../../assets/brand/br-4.png";
import brand5 from "../../assets/brand/br-5.png";

const Brands = [
  { id: 1, tag: "brand img", image: brand1 },
  { id: 2, tag: "brand img", image: brand2 },
  { id: 3, tag: "brand img", image: brand3 },
  { id: 4, tag: "brand img", image: brand4 },
  { id: 5, tag: "brand img", image: brand5 },
];

const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
      className="hidden md:block py-8 mt-24 bg-gray-200 dark:bg-white/10"
    >
      <div className="container">
        <div className=" grid grid-cols-5 place-items-center gap-3 opacity-50">
          {Brands.map((data) => (
            <img
              key={data.id}
              className="w-[80px]"
              src={data.image}
              alt={data.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
