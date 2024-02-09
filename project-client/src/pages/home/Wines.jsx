/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa"
import Cards from "../../components/Cards";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import img2 from '../../assets/images/vec.svg'

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gold" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
};

const Wines = () => {
  const [menu, setMenu] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/menu");
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className=" bg-secondary pb-[10%]">
      <div className="section-container py-6">
        <div className="">
          <div className='relative pb-10'>
            <img src={img2} alt="" className=' absolute -top-3 w-[70px] z-20' />
            <p className='subtitle'>Shop</p>
            <h2 className='title'>Wines</h2>
          </div>
          <div className="space-x-5">
            <button onClick={() => slider?.current?.slickPrev()}
              className=" btn p-2 rounded-full "
            >
              <FaAngleLeft className=" h-8 w-8 p-1" />
            </button>
            <button
              className=" btn p-2 rounded-full"
              onClick={() => slider?.current?.slickNext()}
            >
              <FaAngleRight className=" h-8 w-8 p-1" />
            </button>
          </div>
        </div>
      </div>
      <Slider ref={slider} {...settings} className=" mt-10">
        {menu.map((item, i) => (
          <Cards item={item} key={i} />
        ))}
      </Slider>
    </div>
  );
};

export default Wines;
