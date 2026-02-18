// // هندل کردن سفارش ها و ایجاد نوابع برای خرید یا حذف . قابل استفاده در تمامی کامپوننت ها
// import { createContext, useState } from "react"
// import {products as iphoneproducts} from "../../../public/api/iphone.js"
// import {products as Laptopproducts} from '../../../public/api/Laptop.js';
// import {products as watchproducts} from '../../../public/api/watch.js';
// import Iphone from "./Iphone";
// import Laptop from "./Laptop.jsx";
// export const ShopContext = createContext(null);



// // hamdel the changes that would happen in add or delet a product from cart
// const allProducts = [...iphoneproducts, ...Laptopproducts,...watchproducts];
// const getDefaultCart = () => {
//     let cart = {};
//     for (let i = 1; i < allProducts .length + 1; i++) {
//         cart[i] = 0;
//     }
//     return cart;
// };
// // توی تمام کامپوننت ها قراره استفاده بشه
// const ShopcontextProvider = (props) => {
//     // save the id od each product that you chose
//     const [cartItems, setCartItems] = useState(getDefaultCart());

//     const addtocart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//     };
//     const removefromcart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//     }
//     console.log(cartItems)
//     const contextvalue = { cartItems, addtocart, removefromcart ,allProducts }
//     return (
//         <>
//             <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>
//         </>
//     )
// }
// export default ShopcontextProvider;
