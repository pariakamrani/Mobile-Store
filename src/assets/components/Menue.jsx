import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
import { useState } from 'react'
// import Zamfolia from './component/Zamfolia'






function Menue({ BasketItems }) {
  const [Menue, setMenue] = useState(false)
  const [Subnav, setSubnav] = useState(false)


  const Openmenue = () => {
    setMenue(prev => !prev)
  }

  const subnavbtn = () => {
    setSubnav(prev => !prev)
  }
  
 

  return (
    <>
      <header className="bg-white  relative top-0 right-0 left-0 w-full h-[100px] flex justify-start items-center px-5 overflow-hidden hrederr">

        {/* بخش وسط (لوگو + سرچ) */}
        {/* کلاس هایی که به حالت کوچیک و میدیوم دادم باعث میشه وقتی صفحه سایزش عوض شد اینا تغیر نکنن و جابجا نشن */}
        <div className="lg:flex lg:gap-x-64   lg:items-center lg:justify-between  lg:left-3/5  sm:absolute md:absolute md:left-3/5 sm:left-3/6 sm:-translate-x-1/2  ">
          {/* لوگو */}

          <div className="w-[150px] gap-x-9 ">
            <img src="./img/logo.jpg" className="rounded-2xl w-full h-[90px] " alt="logo" />
          </div>

          {/* سرچ */}
          <div className="lg:flex  items-center hidden">
            <input
              type="search"
              name="search"
              placeholder="search..."
              className="pr-5 bg-gray-200  2xl:w-[420px] xl:w-[350px]  md:w-[280px] sm:w-40 h-10 rounded-3xl"
            />
            <MagnifyingGlassIcon className="w-8 h-8 text-black ml-2" />
          </div>
        </div>

        {/* بخش آیکون‌ها (سمت چپ)< */}
        <div className="flex items-center gap-x-12 ml-auto absolute left-30 md:left-1/12 sm:left-10">
          <Link to="/Cart" className="relative">{BasketItems.length >0 ? <div><ShoppingCartIcon className="w-8 h-8 text-black hidden sm:flex" /> <span className="absolute -top-3 -right-2 w-6 h-6 bg-red-300 text-black text-xs rounded-full flex items-center justify-center">{BasketItems.length}</span></div> : <ShoppingCartIcon className="w-8 h-8 text-black hidden sm:flex" />}</Link>
          <a href="#"><ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-black hidden sm:flex" /></a>
        </div>

        {/* اون سه نقطه بالا سمت چپ که با کلیک روش منوی ایل باز میشه  */}
        <div className='bg-black text-white lg:hidden mr-20 sm:relative sm:left-0 absolute left-10'>
          <button href="" onClick={Openmenue}><Bars3Icon className="bg-withe x-8 h-8" /></button>
        </div>
        {/* اون مستطیل بزرگی که با زدن رو دکمه 3 نقطه ظاهر میشه */}
        <div className='lg:hidden fixed  bg-white  z-50'>
          {Menue &&
            <div className=' block w-[320px] min-h-screen top-15 right-0 left-30 fixed mt-10 bg-white border-t-2 rounded-xl border-black shadow-xl shadow-gray-500'>
              <a href="#" className='block my-5 px-4 hover:border-b-2  pb-2 transition-all duration-150'>صفحه اصلی</a>
              <button href="" className='block my-5 px-4  text-center' onClick={subnavbtn}> محصولات

                <div className=' '>
                  {
                    Subnav &&
                    <div className=' '>
                      <Link to="/Begonia" className='block  my-1 shadow-lg shadow-gray-600/15 inset-shadow-sm inset-shadow-gray-600 py-2 '>api واقعی </Link>
                      <Link to="/Watch" className='block  my-1 shadow-lg shadow-gray-600/15 inset-shadow-sm inset-shadow-gray-600 py-2 '> اپل واچ</Link>

                      <Link to="/Iphone" className='block  my-1 shadow-lg shadow-gray-600/15 inset-shadow-sm inset-shadow-gray-600 py-2 '>آیفون</Link>

                      <Link to="/Laptop" className='block  my-1 shadow-lg shadow-gray-600/15 inset-shadow-sm inset-shadow-gray-600 py-2 '> لپ تاپ</Link>

                    </div>

                  }
                </div>
              </button>
              {/* <a href="" className='block my-5 px-4'></a> */}
              <Link to='/Weblog' className='block my-5 px-4 hover:border-b-2  pb-2 transition-all duration-150'>وبلاگ</Link>
              <Link to="/Aboutus" className='block my-5 px-4 hover:border-b-2  pb-2 transition-all duration-150'>درباره ما</Link>
              <Link to="/Joinus" className='block my-5 px-4 hover:border-b-2  pb-2 transition-all duration-150'>  پیوستن به تیم ما</Link>
              <Link to="/Cart" className='block  my-1 shadow-lg shadow-gray-600/15 inset-shadow-sm inset-shadow-gray-600 py-2 '>  سبد خرید</Link>
            </div>


          }
        </div>

      </header>









      <section className=' shadow-lg bg-gray-200 h-20   justify-center   hidden lg:flex lg:gap-y-3 mt-2.5 hrederr'>
        <nav className='flex '>
          <ul className='flex gap-x-12 justify-center items-center'>
            <li className='text-2xl'><Link to='/' className='hover:border-b-2  pb-2 transition-all duration-150' >صفحه اصلی</Link></li>
            <li className='relative text-2xl group flex'> <a className='hover:text-teal-700/    flex  justify-start ' href="" >محصولات<ChevronDownIcon className="text-gray-500 w-4 h-3 flex justify-end mt-4 mr-2" /> </a>

              <div className='bg-white grid grid-cols-3 z-50 justify-center items-center rounded-2xl border-gray-300 border-2  w-[600px] h-40 absolute  top-14 tracking-normal   transition-all duration-400 invisible group-hover:visible  opacity-0 group-hover:opacity-100'>


                <Link to="/Product" className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:bg-gray-100 hover:rounded-2xl  transition duration-300 whitespace-nowrap' >api واقعی </Link>
                <Link to="/Iphone" className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:bg-gray-100 hover:rounded-2xl  transition duration-300 whitespace-nowrap' >آیفون</Link>
                <Link to="/Laptop" className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:bg-gray-100 hover:rounded-2xl  transition duration-300 whitespace-nowrap' >لپ تاپ</Link>
                <Link to="/Watch" className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:bg-gray-100 hover:rounded-2xl  transition duration-300 whitespace-nowrap' href="">اپل واچ</Link>


              </div>
            </li>



            <li className='text-2xl'><Link to='/Weblog' className='hover:border-b-2  pb-2 transition-all duration-150 ' >وبلاگ</Link></li>
            <li className='text-2xl'><Link to={"/Aboutus"} className='hover:border-b-2  pb-2 transition-all duration-150' href="">درباره ما</Link></li>
            <li className='text-2xl'><Link to={"/Call"} className='hover:border-b-2  pb-2 transition-all duration-150' href="">تماس با ما</Link></li>
            <li className='text-2xl'><Link to={"/Joinus"} className='hover:border-b-2  pb-2 transition-all duration-150' href="">  پیوستن به تیم ما</Link></li>
          </ul>
        </nav>
      </section>

      <div >


      </div>

      {/* <div className='bg-red-500'>dddddddddd</div> */}



    </>
  )
}
export default Menue;