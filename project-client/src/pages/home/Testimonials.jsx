/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import SliderTes from "../../components/SliderTes";

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

const Testimonials = () => {
    const [detailss, setdetailss] = useState([]);
    const slider = React.useRef(null);

    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => {
                const specials = data.filter((item) => item.category === "popular");
                setdetailss(specials);
            });
    }, []);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                    infinite: true,
                    dots: true,
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
        <section className="bg-secondary py-[10%] xl:bg-fixed bgf">
            <div className="section-container grid grid-cols-1 gap-8 xl:grid-cols-3 xl:items-center xl:gap-16">
                <div className="text-center xl:sm:text-left ">
                    <p className='subtitle pb-4'>Testimonials</p>
                    <h1 className="title">
                        Don't just take our word for it...
                    </h1>

                    <p className="mt-4 text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat
                        harum porro optio fugit a culpa sunt id!
                    </p>
                    <div className="mt-6 space-x-5">
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
                <div className="xl:col-span-2">
                    <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
                        {detailss.map((item, i) => (
                            <SliderTes item={item} key={i} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;