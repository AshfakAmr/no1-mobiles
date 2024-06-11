import React from "react";
import Button from "../Shared/Button";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileScreen,
  FaTwitter,
} from "react-icons/fa6";
const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-brandWhite bg-primary p-2 rounded-md font-semibold text-xl tracking-widest uppercase 
              dark:text-primary dark:rounded-none  dark:bg-none dark:bg-transparent sm:text-2xl"
            >
              No.1 Mobiles
            </a>
            <p className="text-gray-600 lg:pr-24 pt-6 dark:text-white/70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
            <p className="text-gray-500 mt-4 ">
              Made with 💖 by The Coding Journey
            </p>

            <a
              href="#"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit Our Youtube Channel
            </a>
          </div>
          {/* Footer Links*/}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="py-8 px-4">
              <h1 className="font-bold mb-3 text-xl sm:text-left">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, i) => (
                  <li key={i}>
                    <a
                      className="text-gray-600 hover:text-black duration-300 hover:dark:text-white dark:text-gray-400"
                      href={data.link}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Col links */}
            <div className="py-8 px-4">
              <h1 className="font-bold mb-3 text-xl sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, i) => (
                  <li key={i}>
                    <a
                      className="text-gray-600 hover:text-black duration-300 hover:dark:text-white dark:text-gray-400"
                      href={data.link}
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div>
                <h1 className="font-bold text-xl sm:text-left mb-3">Address</h1>
                <div className="flex items-center gap-3 ">
                  <FaLocationArrow />
                  <p>Kadayanallur, Tenkasi, TamilNadu</p>
                </div>
                <div className="flex gap-3 items-center mt-6">
                  <FaMobileScreen />
                  <p>+91 8888888888</p>
                </div>
                {/* Social Links */}
                <div className="flex mt-6 gap-3 ">
                  <a
                    href="#"
                    className="text-3xl hover:text-primary duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-3xl hover:text-primary duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-3xl hover:text-primary duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
