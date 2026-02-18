import { Link } from "react-router-dom";
function Squer(){

    return(
        <>
              <div className=" flex justify-center items-center mt-20"><p className=" w-full text-center font-bold text-blac text-3xl">لپ تاپ های پر فروش   </p></div>
            <div className=" flex justify-center items-center mt-10">

                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%]   gap-y-4 justify-items-center   rounded-xl  ">
                    <div className="shadow-lg shadow-gray-600/50  w-[83%] h-92 rounded-xl overflow-hidden  ">
                        <div className=" w-full h-[85%] overflow-hidden "> <img src={`${import.meta.env.BASE_URL}img/l1.jpg`} alt="" className="w-full h-full hover:scale-125 transition-all duration-400"/></div>
                        <div className="  h-[15%] text-center pt-3 font-bold"><Link to="/Laptop" className="">لپ تاپ Acer Aspire </Link></div>
                    </div>
                    <div className=" shadow-lg shadow-gray-600/50  w-[83%] h-92  rounded-xl overflow-hidden ">
                        <div className=" h-[85%] overflow-hidden "> <img src={`${import.meta.env.BASE_URL}img/l2.jpg`} alt="" className="w-full h-full hover:scale-125 transition-all duration-400"/></div>
                        <div className=" h-[15%] text-center pt-3 font-bold"><Link to="/Laptop">لپ تاپ Intel Core Ultra 200H</Link></div>
                    </div>
                    <div className=" shadow-lg shadow-gray-600/50  w-[83%] h-92  rounded-xl overflow-hidden ">
                        <div className=" h-[85%] overflow-hidden"><img src={`${import.meta.env.BASE_URL}img/macbook.jpg`}alt="" className="w-full h-full hover:scale-125 transition-all duration-400"/> </div>
                        <div className=" h-[15%] text-center pt-3 font-bold"><Link to="/Laptop">Intel Core Ultra 200H مک بوک</Link></div>
                    </div>
                    <div className=" shadow-lg shadow-gray-600/50  w-[83%] h-92  rounded-xl overflow-hidden ">
                        <div className=" h-[85%] overflow-hidden"><img src={`${import.meta.env.BASE_URL}img/l5.jpg`} alt="" className="w-full h-full hover:scale-125 transition-all duration-400"/> </div>
                        <div className="h-[15%] text-center pt-3 font-bold"> <Link to="/Laptop"> Surface Laptop Go 3</Link></div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Squer