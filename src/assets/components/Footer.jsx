import { MapPinIcon, DevicePhoneMobileIcon, ClockIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-300 text-black w-full mt-10 px-6 py-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-center md:text-right">
        {/* ستون ۱ */}
        <div>
          <h4 className="font-bold text-xl mb-4">درباره ما</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><Link to={"/Iphone"} className="hover:text-gray-500">معرفی  گوشی اپل</Link></li>
            <li><Link to="Joinus" className="hover:text-gray-500">پیوستن به تیم ما</Link></li>
            <li><Link to="/Call" className="hover:text-gray-500">تماس با ما</Link></li>
            <li><Link to="/Weblog" className="hover:text-gray-500">وبلاگ (مجله  و )</Link></li>
            <li><a href="#" className="hover:text-gray-500"> محصولات </a></li>
          </ul>
        </div>

        {/* ستون ۲ */}
        <div>
          <h4 className="font-bold text-xl mb-4"> پر بازدید ها</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
           
            <li><Link to="/Iphone" className="hover:text-gray-500"> آیفون های برتر </Link></li>
            <li><Link to="/Laptop" className="hover:text-gray-500">   لپ تاپ </Link></li>
          </ul>
        </div>

        {/* ستون ۳ */}
        <div>
          <h4 className="font-bold text-xl mb-4">دسته‌بندی محصولات</h4>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><Link to="/Iphone" className="hover:text-gray-500"> گوشی های ارزان  </Link></li>
            <li><Link to="/Laptop" className="hover:text-gray-500">   لپ تاپ گیمینگ</Link></li>
            <li><Link to="/Watch" className="hover:text-gray-500">  اپل واچ</Link></li>
            
           
          </ul>
        </div>
      </div>

      {/* خط جداکننده */}
      <div className="border-t border-black mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm">
          <p className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-black" />
            تهران، خیابان کریمخان زند، قرنی بهشهر، پلاک ۵۵ عمارتن
          </p>
          <p className="flex items-center gap-2">
            <DevicePhoneMobileIcon className="w-5 h-5 text-black" />
            ۰۲۱-۴۴۴۷۵۹۳۶
          </p>
          <p className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-black" />
            همه‌روزه ۱۰ الی ۹
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;