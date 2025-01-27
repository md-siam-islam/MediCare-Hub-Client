
import img1 from "../../assets/medicinImage/Amoxicillin.jpeg";
import img2 from "../../assets/medicinImage/Aspirin.avif";
import img3 from "../../assets/medicinImage/azithromycin.jpg";
import img4 from "../../assets/medicinImage/Ciprofloxacin.png";
import img5 from "../../assets/medicinImage/Ibuprofen.jpg";
import img6 from "../../assets/medicinImage/paracetamol-tablets_1618901822.jpg";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCode } from "react-icons/fa";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[78%] md:w-full mx-auto my-16">
      <div>
        <Slider className="" {...settings}>
          <div className="p-2">
            <img src={img2} alt="Aspirin" className="w-[363px] object-cover" />
          </div>
          <div className="p-2">
            <img
              src={img3}
              alt="Azithromycin"
              className="w-[363px] object-cover"
            />
          </div>
          <div className="p-2">
            <img
              src={img4}
              alt="Ciprofloxacin"
              className="w-[363px] object-cover"
            />
          </div>
          <div className="p-2">
            <img src={img5} alt="Ibuprofen" className="w-[363px] object-cover" />
          </div>
          <div className="p-2">
            <img
              src={img6}
              alt="Paracetamol Tablets"
              className="w-[363px] object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
