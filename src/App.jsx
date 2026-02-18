import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Menue from "./assets/components/Menue";
import Undermenue from "./assets/components/Undermenue";
import Banner from "./assets/components/Banner";
import Squer from "./assets/components/Squer";
import AutoPlay from "./assets/components/Autoplay";
import IntoduceWatch from "./assets/components/IntoduceWatch";
import Footer from "./assets/components/Footer";
import Iphone from "./assets/components/Iphone";
import Laptop from "./assets/components/Laptop";
import Call from "./assets/components/Call";
import Joinus from "./assets/components/Joinus";
import NotFound from "./assets/components/Notfound";
// import ShopcontextProvider, { ShopContext } from "./assets/components/Shopcontext";
import Watch from "./assets/components/Watch";
import Cart from "./assets/components/Cart";
import Product from "./assets/components/Product";
import { useState } from 'react';
import Weblog from './assets/components/Weblog';
import Aboutus from './assets/components/Aboutus';

function App() {


  // این تابع افزودن محصول به سبد خریده 
  const [BasketItems, setBasketItems] = useState([]);
  const AddTocard=(mahsol)=>{
    const exsit=BasketItems.find((x)=>{
      return (x.id === mahsol.id && x.apiId === mahsol.apiId)
    })
    if(exsit){
      alert("محصول قبلا انتخاب شده.")
    }
    else{
      setBasketItems([...BasketItems,{...mahsol,quantity:1}]),
       alert("محصول به سبد خرید اضافه شد")
    }
    console.log(BasketItems)
  }


  
  
  // این تابع زیاد کردن تعداد محصول توی سبد خریده . + رو که میزنی زیاد میشه
   // تابع میاد اول آی دی و ای پی آی آیدی رو میگیره چون کحصولات با این دوتا بخش نسبت به همدیگه متمایز شدن . 
  // بعد میاد روش مپ میزنه و تو خط 47 میاد چک میکنه آیا آی دی محصول همونیه که دکمش زده شد ؟
  //  اگر همون بود بیا یه کپی ازش بگیر و تعدادش رو که میش کوانتیتی رو به علاوه یک کن
  const increaseQty = (id, apiId) => {
  setBasketItems(prev =>
    prev.map(item =>
      item.id === id && item.apiId === apiId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}

  // این تابع کم کردن تعداد محصول توی سبد خریده . - رو که میزنی زیاد میشه
//  این مثل بالایی هبا این تفاوت که میاد میکه :
// math.max(1)
// ینی ماکسیمم یک باشه زیر 1 نشه عدد . و بعد میاد ازش کم میکنه عدد رو
  const decreaseQty = (id, apiId) => {
  setBasketItems(prev =>
    prev.map(item =>
      item.id === id && item.apiId === apiId
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    )
  )
}
  return (
    <>
    
      <Router>
        <Menue BasketItems={BasketItems}/>
        <Routes>
          <Route path="/" element={<> <Undermenue/> <Banner/> <Squer/>  <AutoPlay/> <IntoduceWatch/>  </>}/>
           <Route path='/iphone' element={<Iphone AddTocard={AddTocard} /> }/>
           <Route path='/laptop' element={<Laptop AddTocard={AddTocard} /> }/>
           <Route path='/watch' element={<Watch AddTocard={AddTocard}/> }/>
           <Route path='/weblog' element={<Weblog /> }/>
           <Route path='/call' element={<Call/>}/>
           <Route path='/aboutus' element={<Aboutus/>}/>
           <Route path='/joinus' element={<Joinus/>}/>
           <Route path='/cart' element={<Cart AddTocard={AddTocard} BasketItems={BasketItems} decreaseQty={decreaseQty}  increaseQty={increaseQty}/> }/>
           {/* <Route path='/product' element={<Product/> }/> */}

          




            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
