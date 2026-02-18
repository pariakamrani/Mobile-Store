

import { useEffect, useState } from "react";

function Laptop({AddTocard}) {
  
  const[product,setProduct]=useState([])
          // fetch("/api/strawber
          useEffect(() => {
              fetch(`${import.meta.env.BASE_URL}api/Laptop.json`)
                .then(res => res.json())
                .then(data => setProduct(data))
                .catch(error => console.log(error))
          
            }, [])
    // const products = [
    //     {
    //         id: 0,
    //         title: "لپ‌تاپ لنوو مدل V15 G4 IRU با پردازنده Core i5-13420H، رم DDR4 16GB با فرکانس  ",
    //         price: "4.000.000",
    //         img: "/img/l1.jpg"
    //     },
    //     {
    //         id: 1,
    //         title: "لپ‌تاپ اپل مدل MacBook Air MGN93 2020 با پردازنده Apple M1،",
    //         price: "5.000.000",
    //         img: "/img/l2.jpg"
    //     },
    //     {
    //         id: 2,
    //         title: "لپ‌تاپ اپل مدل MacBook Air MXD23 2024 LLA با پردازنده Apple M3،",
    //         price: "119.000.000",
    //         img: "/img/macbook.webp"
    //     },
    //     {
    //         id: 3,
    //         title: "لپ‌تاپ لنوو مدل V15 G2 IJL با پردازنده Celeron N4500",
    //         price: "24.000.000",
    //         img: "/img/l4.webp"
    //     }, {
    //         id: 4,
    //         title: "لپ‌تاپ لنوو مدل IdeaPad Slim 3 15IRH8 با پردازنده Core i5-13420H",
    //         price: "50.000.000",
    //         img: "/img/l5.jpg"
    //     },
    //     {
    //         id: 5,
    //         title: "لپ تاپ 15.6 اینچی لنوو مدل  13420H-8GB LPDDR5-512GB SSD-IPS-Backlit",
    //         price: "47.000.000",
    //         img: "/img/l6.jpg"
    //     },
    //     {
    //         id: 6,
    //         title: "لپ تاپ 15.3 اینچی لنوو مدل  13420H-8GB DDR5-512GB SSD-IPS",
    //         price: "95.000.000",
    //         img: "/img/l7.webp"
    //     },



    // ]
   return (
        <>
            <div className="justify-items-center">
                <div className="  container grid grid-cols-1 md:grid-cols-2 mx-auto  lg:grid-cols-4 gap-y-14 gap-x-14 pt-10 justify-items-center" >
                {
                    product.map((items) => {
                        // داریم یه کارت جدید میسازیم که به id عناصر دسترسی داشته باشیم
                        // const cartItemsAmount=cartItems[items.id];
                        return (
                            <div key={`${items.apiId}-${items.id}`} className=" shadow-xl shadow-gray-300 w-full max-w-[350px]  mx-auto overflow-hidden rounded-3xl">
                                <div className=" w-full h-[350px] overflow-hidden"><img src={`${import.meta.env.BASE_URL}img/${items.img}`} alt="" className="w-full h-full" /></div>
                                <div className="px-4 pt-2 wrap-break-word tru">{items.title}</div>
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
export default Laptop;