import React from "react";

import Button from "../Shared/Button";

const Banner = ({ BannerData }) => {
  return (
    <div className="min-h-[550px] flex items-center justify-center py-12">
      <div className="container">
        <div>
          {BannerData.map((data) => (
            <div
              key={data.id}
              style={{ backgroundColor: data.bgColor }}
              className={`grid grid-cols-1 md:grid-cols-3 rounded-3xl gap-6 items-center text-white`}
            >
              {/* First Column */}
              <div className=" p-6 sm:p-8 ">
                <p data-aos="slide-right">{data.discount}</p>
                <h1
                  data-aos="zoom-out"
                  className="font-bold lg:text-7xl text-4xl uppercase"
                >
                  {data.title}
                </h1>
                <p data-aos="fade-up" className="text-sm">
                  {data.date}
                </p>
              </div>
              {/* Second Column */}
              <div data-aos="zoom-in" className="h-full flex items-center">
                <img
                  className=" scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"
                  src={data.image}
                  alt={data.title}
                />
              </div>
              {/* Third Column */}
              <div className="flex flex-col justify-center items-start gap-4 p-6 sm:p-8">
                <h3 data-aos="zoom-out" className="font-bold text-xl">
                  {data.title2}
                </h3>
                <h2
                  data-aos="fade-up"
                  className="text-3xl sm:text-5xl font-bold "
                >
                  {data.title3}
                </h2>
                <p
                  data-aos="fade-up"
                  className="text-sm tracking-wide leading-5"
                >
                  {data.title4}
                </p>
                <div data-aos="fade-up" data-aos-offset="0">
                  <Button styles={`${data.bgColor}`} bgColor="bg-white ">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
