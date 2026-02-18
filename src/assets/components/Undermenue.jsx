import { Link } from "react-router-dom";
function Undermenue(){


    return(

        <>
            <div className="flex justify-center items-center px-10 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-items-center px-10">
                    
                        <div className=" justify-items-normal items-end relative px-10">
                            <div className="relative top-1 lg:top-1/3 md:top-1/12 sm:top-1/12 mb-3 text-justify "><h2 className="text-4xl font-bold"> آیفون</h2></div>
                            <div className="relative top-1 lg:top-1/3 md:top-1/12 sm:top-1/12  text-justify mt-4"><p className="">قیمت مناسب برای خرید انواع گوشی های آیفون اپل از طریق لینک های زیر ممکن شده است. موبایل های ایفون با داشتن امکانات بی نظیر در میان تلفن های هوشمند موجود در بازار، قابلیت های بی نظیری را در زمینه قدرت پردازش، دوربین با امکانات استثنایی و صفحه نمایش با طراحی ویژه و چشم نواز را در اختیار کاربران قرار می دهد</p></div>
                            <div className="relative top-1 lg:top-1/3 md:top-1/12 sm:top-1/12  text-center  mt-6 bg-black w-[200px] h-12 py-2 rounded-2xl"><p className="text-white "><Link to="/Iphone"> مشاهده محصولات</Link> </p></div>
                        </div>
                        <div className="  "><img src={`${import.meta.env.BASE_URL}img/secondpic.png`} className="w-full h-full" alt="" /></div>
                    
                </div>
            </div>
        </>
    )
}
export default Undermenue;