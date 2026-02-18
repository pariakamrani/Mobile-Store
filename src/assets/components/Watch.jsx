import { useEffect, useState } from "react";


function Watch({AddTocard}){


 const[product,setProduct]=useState([])
           // fetch("/api/strawber
           useEffect(() => {
               fetch(`${import.meta.env.BASE_URL}api/watch.json`)
                 .then(res => res.json())
                 .then(data => setProduct(data))
                 .catch(error => console.log(error))
           
             }, [])
    return (
        <>
            <div className="justify-items-center">
                <div className="  container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-y-14 gap-x-14 pt-10 justify-center items-center " >
                {
                    product.map((items) => {
                        // داریم یه کارت جدید میسازیم که به id عناصر دسترسی داشته باشیم
                        // const cartItemsAmount=cartItems[items.id];
                        return (
                            <div key={`${items.apiId}-${items.id}`} className=" shadow-xl shadow-gray-300 w-full max-w-[350px]  mx-auto overflow-hidden rounded-3xl">
                                <div className=" w-full h-[350px] overflow-hidden object-cover"><img src={`${import.meta.env.BASE_URL}img/${items.img}`} alt="" className="w-full h-full object-cover" /></div>
                                <div className="px-4 pt-2 wrap-break-word truncate">{items.title}</div>
                                <div className="px-4 pt-2 font-bold">{items.price.toLocaleString()} تومان</div>
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
export default Watch;