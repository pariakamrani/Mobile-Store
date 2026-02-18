



import { useEffect, useState } from "react";
function Iphone({AddTocard}) {
    
    const[product,setProduct]=useState([])
        // fetch("/api/strawber
        useEffect(() => {
            fetch(`${import.meta.env.BASE_URL}api/iphone.json`)
              .then(res => res.json())
              .then(data => setProduct(data))
              .catch(error => console.log(error))
        
          }, [])


    // const products = [
    //     {
    //         id: 0,
    //         title: "گوشی موبایل اپل مدل iPhone 17 Pro Max ZAA تک سیم کارت  ",
    //         price: 64.000000,
    //         img: "/img/p1.webp"
    //     },
    //     {
    //         id: 1,
    //         title:"گوشی اپل iPhone 13 Pro Max ZAA رجیستر‌شده دو سیم‌کارت 256 گیگابایت",
    //         price: 75.000000,
    //         img: "/img/p2.webp"
    //     },
    //     {
    //         id: 2,
    //         title: "گوشی اپل iPhone 13 Pro Max ZAA رجیستر‌شده دو سیم‌کارت 256 گیگابایت",
    //         price: 119.000000,
    //         img: "/img/p3.webp"
    //     },
    //     {
    //         id: 3,
    //         title: "گوشی اپل iPhone 13 CH رجیسترشده دو سیم‌کارت 256 گیگابایت با رم 4 گیگابایت",
    //         price: 124.000000,
    //         img: "/img/p4.webp"
    //     }, {
    //         id: 4,
    //         title: "گوشی موبایل اپل مدل iPhone 16 Pro ZAA",
    //         price: 150.000000,
    //         img: "/img/p5.webp"
    //     },
    //     {
    //         id: 5,
    //         title: "گوشی موبایل اپل مدل iPhone XR A2108 دو سیم کارت ظرفیت 256 گیگابایت",
    //         price: 60.000000,
    //         img: "/img/p6.webp"
    //     },
    //     {
    //         id: 6,
    //         title: "گوشی موبایل اپل مدل iPhone 16 Plus CH دو سیم کارت ظرفیت 512 ",
    //         price: 95.000000,
    //         img: "/img/p7.webp"
    //     },
    //     {
    //         id: 7,
    //         title:"گوشی موبایل اپل مدل iPhone 16 CH دو سیم کارت ظرفیت 256 گیگابایت" ,
    //         price: 95.000000,
    //         img: "/img/p8.webp"
    //     },



    // ]
    return (
        <>
            <div className="justify-items-center">
                <div className="  container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-y-14 gap-x-14 pt-10 justify-items-center" >
                {
                    product.map((items) => {
                        // داریم یه کارت جدید میسازیم که به id عناصر دسترسی داشته باشیم
                        // const cartItemsAmount=cartItems[items.id];
                        return (
                            <div key={`${items.apiId}-${items.id}`} className=" shadow-xl shadow-gray-300 w-full max-w-[350px]  mx-auto overflow-hidden rounded-3xl">
                                <div className=" w-full h-[350px] overflow-hidden"><img src={`${import.meta.env.BASE_URL}img/${items.img}`} alt="" className="w-full h-full" /></div>
                                <div className="px-4 pt-2 wrap-break-word">{items.title}</div>
                                <div className="px-4 pt-2 font-bold">{items.price.toLocaleString()}تومان</div>
                                <button className="text-center bg-black w-[90%] mx-5 h-14 text-white rounded-3xl mt-5 mb-4" onClick={()=>AddTocard(items)}>افزودن به سبد خرید
                                    
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
}
export default Iphone;