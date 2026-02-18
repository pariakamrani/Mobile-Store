
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Banner() {

    const products = [
        {
            id: 1,
            title: "an orange Iphone",
            img: "orangeiphone.jpg",
            price: "250$",
            to:"/Iphone"
        },
        {
            id: 2,
            title: "Iphone pro max",
            img: "promax.png",
            price: "150$",
            to:"/Iphone"
        },
        {
            id: 3,
            title: "Macbook pro *gray*",
            img: "macbook.jpg",
            price: "450$",
            to:"/Laptop"
        },
        {
            id: 4,
            title: "Apple watch series 11 ",
            img: "wach0.jpg",
            price: "250$",
            to:"/Watch"
        },
        {
            id: 5,
            title: "Iphone 16 pro ",
            img: "p2.webp",
            price: "250$",
            to:"/Iphone"
        }
    ]


    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: "0px",
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (

        <>
            <div className="slider-container bg-gray-100  w-[91%] mx-auto mt-20 shadow-xl/10 rounded-2xl">
                <Slider {...settings}>
                    {products.map(items => (
                        <div key={items.id} className="flex justify-center px-4">
                            <div className="bg-white flex flex-col rounded-3xl shadow-lg h-[30rem] w-full max-w-sm object-cover overflow-hidden">

                                {/* تصویر */}
                                <div className="h-[55%] flex items-center justify-center pt-3  overflow-hidden object-cover">
                                    <img
                                        src={`${import.meta.env.BASE_URL}img/${items.img}`}
                                        alt={items.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* متن (قفل شده) */}
                                <div className="h-[25%] px-6 py-4 flex flex-col items-center justify-center gap-2 ">
                                    <p className="text-xl font-semibold text-gray-900">
                                        {items.price}
                                    </p>

                                    <p className="text-base font-medium text-gray-600 line-clamp-2 text-center">
                                        {items.title}
                                    </p>
                                </div>

                                {/* دکمه */}
                                <div className="h-[20%] px-6 pb-6 flex items-end">
                                    <Link
                                        to={items.to}
                                        className="w-full h-[48px] rounded-xl bg-black text-white flex items-center justify-center text-sm font-medium hover:bg-gray-800 transition"
                                    >
                                        مشاهده محصولات
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </>
    )
}
export default Banner;