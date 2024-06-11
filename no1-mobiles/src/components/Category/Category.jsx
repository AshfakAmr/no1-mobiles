import React from "react";
import EarphoneImg from "../../assets/category/earphone.png";
import gamingImg from "../../assets/category/gaming.png";
import LaptopImg from "../../assets/category/macbook.png";
import SmartwatchImg from "../../assets/category/smartwatch2-removebg-preview.png";
import SpeakerImg from "../../assets/category/speaker.png";
import VrImg from "../../assets/category/vr.png";
import WatchImg from "../../assets/category/watch.png";
import Button from "../Shared/Button";

const categories = [
  { id: 1, name: "Earphones", tag: "Enjoy with", image: EarphoneImg },
  { id: 2, name: "Watches", tag: "Enjoy with", image: WatchImg },
  { id: 3, name: "Laptop", tag: "Enjoy with", image: LaptopImg },
  { id: 4, name: "Gaming", tag: "Enjoy with", image: gamingImg },
  { id: 5, name: "Virtual Reality", tag: "Enjoy with", image: VrImg },
  { id: 6, name: "Gadget", tag: "Enjoy with", image: SpeakerImg },
];

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="text-gray-400 mb-[2px]">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="mb-2 text-4xl xl:text-5xl opacity-40 font-bold">
                  Earphone
                </p>
                <Button bgColor="bg-primary text-white">Browse</Button>
              </div>
            </div>

            <img
              className="w-[320px] absolute bottom-0"
              src={EarphoneImg}
              alt="Earphone Img"
            />
          </div>

          {/* Second Col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="text-white mb-[2px]">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="mb-2 text-4xl xl:text-5xl opacity-40 font-bold">
                  Watches
                </p>
                <Button bgColor="bg-white text-brandYellow">Browse</Button>
              </div>
            </div>

            <img
              className="w-[320px] absolute lg:top-[40px] -right-4"
              src={WatchImg}
              alt="Earphone Img"
            />
          </div>

          {/* Third Col */}
          <div className="py-10 sm:col-span-2 pl-5 bg-gradient-to-br from-primary/90 to-primary text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="text-white mb-[2px]">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="mb-2 text-4xl xl:text-5xl opacity-40 font-bold">
                  Laptops
                </p>
                <Button bgColor="bg-white text-primary">Browse</Button>
              </div>
            </div>

            <img
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
              src={LaptopImg}
              alt="Earphone Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

// {categories.map((data) => {
//   <div key={data.id}>
//     {/* Text Section */}
//     <div>
//       <h3>{data.tag}</h3>

//       <h3>{data.name}</h3>
//     </div>
//     {/* Image Section */}
//     <div>
//       <img src={data.image} alt={data.name} />
//     </div>
//   </div>;
// })}
