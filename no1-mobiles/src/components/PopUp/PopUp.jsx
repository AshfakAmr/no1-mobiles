import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Shared/Button";

const PopUp = ({ orderPopUp, handleOrderPopUp }) => {
  return (
    <>
      {orderPopUp && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="bg-white fixed w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl dark:text-white dark:bg-gray-900 duration-200">
              {/* Header Section */}
              <div className="flex items-center justify-between">
                <h1>Order Now</h1>
                <div>
                  <IoCloseOutline
                    onClick={handleOrderPopUp}
                    className="cursor-pointer text-2xl"
                  />
                </div>
              </div>
              {/* Form Section */}
              <div className=" mt-4">
                <input type="text" placeholder="Name" className="form-input" />
                <input type="text" placeholder="Email" className="form-input" />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-input"
                />
                <div className="flex justify-center">
                  <Button bgColor={"bg-primary"} textColor={"text-white"}>
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
