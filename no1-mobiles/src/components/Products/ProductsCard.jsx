import React from "react";
import Button from "../Shared/Button";

const ProductsCard = ({ ProductsData }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center ">
        {/* Card Section */}
        {ProductsData.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative">
              <img
                className="h-[180px] w-[260px] rounded-md object-cover"
                src={data.image}
                alt={data.name}
              />
              {/* Hover Button */}
              <div className="hidden group-hover:flex absolute w-full h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                <Button bgColor="bg-primary" textColor="text-white">
                  Add to cart
                </Button>
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.name}</h2>
              <p className="font-bold">{data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
