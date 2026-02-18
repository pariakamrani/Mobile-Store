import React from "react";
import Slider from "react-slick"
import { Link } from "react-router-dom";
function AutoPlay(){

    const products=[
        {
            id: 1,
            title: "گوشی موبایل اپل مدل iPhone 17 Pro Max ZAA تک سیم کارت  ",
            price: 64000000,
            img: "p1.webp",
            to:"/Iphone"
        },
       {
            id: 2,
            title:"اپل واچ سری ۱۰ آلومینیوم رنگ نقره‌ای - سایز ۴۲ میلی‌متر-گارانتی ۶ ماهه",
            price: 75000000,
            img: "watch2.webp",
            to:"/Watch"
        },
        {
            id: 3,
            title: "ساعت هوشمند طرح اپل واچ اولترا مدل Z66 Ultra - ریمووین",
            price: 119000000,
            img: "watch3.webp",
            to:"/Watch"
        },
        {
            id: 4,
            title: "لپ‌تاپ لنوو مدل IdeaPad Slim 3 15IRH8 با پردازنده Core i5-13420H",
            price: 50000000,
            img: "l5.jpg",
            to:"/Laptop"
        },
        {
            id: 5,
            title: "لپ تاپ 15.6 اینچی لنوو مدل  13420H-8GB LPDDR5-512GB SSD-IPS-Backlit",
            price: 47000000,
            img: "l6.jpg",
            to:"/Laptop"
        },
        {
            id: 6,
            title: "گوشی موبایل اپل مدل iPhone XR A2108 دو سیم کارت ظرفیت 256 گیگابایت",
            price: 60000000,
            img: "p6.webp",
            to:"/Iphone"
        },
    ]

    const Autoplay = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="slider-container bg-gray-100  w-[91%] mx-auto py-5 mt-30 shadow-xl/10 rounded-2xl">
        <div className=" text-3xl font-bold text-center mt-5 mb-20">پیشنهاد کاربران</div>
                <Slider {...Autoplay}>
                    {products.map(items => (
                        <div key={items.id} className="flex justify-center px-4 ">
                            <div className="bg-white flex flex-col  rounded-3xl shadow-lg h-[30rem] w-full max-w-sm object-cover overflow-hidden">

                                {/* تصویر */}
                                <div className="h-[70%]  flex items-center justify-center pt-3  overflow-hidden object-cover">
                                    <img
                                        src={`${import.meta.env.BASE_URL}img/${items.img}`}
                                        alt={items.title}
                                        className="h-full w-full "
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
  );
}
export default AutoPlay;