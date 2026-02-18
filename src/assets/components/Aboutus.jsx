import React from "react";

export default function Aboutus() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg p-10 space-y-10">

        {/* عنوان */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            درباره فروشگاه ما
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ما با هدف ارائه جدیدترین موبایل‌ها و لوازم جانبی اصل، تجربه‌ای مطمئن
            و لذت‌بخش از خرید آنلاین را برای شما فراهم کرده‌ایم.
          </p>
        </div>

        {/* بخش معرفی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-700 leading-7">
            <p>
              فروشگاه موبایل ما از سال <span className="font-medium">1401</span>{" "}
              فعالیت خود را آغاز کرده و تمرکز اصلی‌اش بر کیفیت، اصالت کالا و
              رضایت مشتری است.
            </p>
            <p>
              ما باور داریم خرید موبایل باید ساده، شفاف و بدون دغدغه باشد؛
              به همین دلیل تمامی محصولات با ضمانت اصالت و پشتیبانی واقعی
              ارائه می‌شوند.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              چرا ما را انتخاب می‌کنید؟
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔️ ضمانت اصالت کالا</li>
              <li>✔️ قیمت‌گذاری منصفانه</li>
              <li>✔️ پشتیبانی واقعی و پاسخ‌گو</li>
              <li>✔️ ارسال سریع به سراسر کشور</li>
            </ul>
          </div>
        </div>

        {/* آمار */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-2xl font-bold text-gray-800">+5k</p>
            <p className="text-gray-600 text-sm">مشتری راضی</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-2xl font-bold text-gray-800">+200</p>
            <p className="text-gray-600 text-sm">مدل موبایل</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-2xl font-bold text-gray-800">24/7</p>
            <p className="text-gray-600 text-sm">پشتیبانی</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-2xl font-bold text-gray-800">2 سال</p>
            <p className="text-gray-600 text-sm">سابقه فعالیت</p>
          </div>
        </div>

      </div>
    </div>
  );
}
