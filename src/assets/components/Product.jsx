import { useState } from "react";
import api from "../../../public/api/api.json";


function Product() {

  const [active, setActive] = useState(0); // id دسته فعال (0 = همه)

  // تعریف دسته‌ها با حداقل/حداکثر قیمت (بر حسب همان واحد price.amount از api)
  // این اعداد را بسته به نیازت عوض کن
  const seprate = [
    // { id: 0, title: "همه", min: 0, max: Infinity },            // همه محصولات
    { id: 0, title: "ارزام ترین ها", min: 1, max: 1000.00 },
    { id: 1, title: "پیشنهاد کاربران", min: 1001.000, max: 1900.000 },
    { id: 2, title: "پر فروش ترین ها", min: 1901.000, max: 2000.000 },
    { id: 3, title: "کاربردی ترین ها", min: 2001.000, max: 2500.000 }, // نمونه
    { id: 4, title: "گران ترین ها", min: 2501.000, max: 1000000 },
   
  ];

  // فیلتر کردن بر اساس active
  const currentCategory = seprate.find(s => s.id === active) || seprate[0];

  const productfilter = api.products.filter(p => {
    const amount = p.price?.amount ?? 0; // مقدار عددی قیمت از api
    return amount >= currentCategory.min && amount <= currentCategory.max;
  });
  

  return (
    <>
    
      <div className="container mx-auto mt-10">
        <div className="flex items-center justify-center gap-6">
          <div className="bg-blue-200 grid grid-cols-6 sm:grid-cols-2 md:grid-cols-6 gap-4 p-4 text-center ">
            {seprate.map(item => (
              
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`text-base text-center font-black cursor-pointer uppercase ${
                  active === item.id ? "text-black" : "text-gray-500"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {productfilter.length === 0 ? (
          
          <div className="col-span-full text-center text-gray-500">هیچ محصولی در این دسته موجود نیست.</div>
        ) : (
          productfilter.map(product => (
            
            <div key={product.id} className="border rounded p-4">
              <img
                src={product.images?.[0]?.url}
                alt={product.title?.fa || product.title?.en || "product"}
                className="w-full h-40 object-cover mb-3"
              />
              <div className="font-bold">{product.title?.fa || product.title?.en}</div>
              <div className="text-sm text-gray-600">{product.description?.fa || product.description?.en}</div>
              <div className="mt-2">{product.price?.amount} {product.price?.currency}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Product;