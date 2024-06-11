import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import PopUp from "./components/PopUp/PopUp";
import Aos from "aos";
import "aos/dist/aos.css";

// Image Imports
import headphone from "./assets/hero/headphone.png";
import watch from "./assets/category/smartwatch2-removebg-preview.png";

const BannerData = [
  {
    id: 1,
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis ",
    bgColor: "#f42c37",
  },
];
const BannerData2 = [
  {
    id: 1,
    discount: "40% OFF",
    title: "Happy Hours",
    date: "11 Jun to 28 Aug",
    image: watch,
    title2: "Apple Series 8",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis ",
    bgColor: "#2dcc6f",
  },
];

function App() {
  const [orderPopUp, setOrderPopUp] = useState(false);

  const handleOrderPopUp = () => {
    setOrderPopUp(!orderPopUp);
  };
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    Aos.refresh;
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar handleOrderPopUp={handleOrderPopUp} />
      <Hero handleOrderPopUp={handleOrderPopUp} />
      <Category />
      <Category2 />
      <Services />
      <Banner BannerData={BannerData} />
      <Products />
      <Banner BannerData={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <PopUp
        orderPopUp={orderPopUp}
        setOrderPopUp={setOrderPopUp}
        handleOrderPopUp={handleOrderPopUp}
      />
    </div>
  );
}

export default App;
