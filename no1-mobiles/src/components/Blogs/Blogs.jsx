import React from "react";
import Heading from "../Shared/Heading";
import Image1 from "../../assets/blog/blog-1.jpg";
import Image2 from "../../assets/blog/blog-2.jpg";
import Image3 from "../../assets/blog/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi",
    published: "Jan 20, 2024 by Dilshad",
    img: Image1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi",
    published: "Jan 20, 2024 by Satya",
    img: Image2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi",
    published: "Jan 20, 2024 by Sabir",
    img: Image3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Heading Section */}

        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />

        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={i}
              className="bg-white dark:bg-gray-900"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  className="h-[220px] w-full  rounded-2xl hover:scale-105 object-cover duration-500"
                  src={data.img}
                  alt={data.title}
                />
              </div>
              {/* Blogs */}
              <div className="  space-y-2 ">
                <p className="text-gray-500 text-xs">{data.published}</p>
                <h3 className="text-black font-bold line-clamp-1">
                  {data.title}
                </h3>
                <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
