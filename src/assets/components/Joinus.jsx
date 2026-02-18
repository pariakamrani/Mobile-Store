import React from "react";

export default function JoinOurTeam() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg p-10 space-y-10">

        {/* عنوان */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            پیوستن به تیم ما
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اگر به دنیای موبایل و تکنولوژی علاقه‌مند هستید و دوست دارید در یک
            محیط پویا و حرفه‌ای رشد کنید، خوشحال می‌شویم شما را در تیم خود
            داشته باشیم.
          </p>
        </div>

        {/* مزایا */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-700 leading-7">
            <h2 className="text-xl font-semibold text-gray-800">
              چرا همکاری با ما؟
            </h2>
            <ul className="space-y-3">
              <li>✔️ محیط کاری دوستانه و حرفه‌ای</li>
              <li>✔️ فرصت رشد و یادگیری</li>
              <li>✔️ حقوق و مزایای منصفانه</li>
              <li>✔️ کار با جدیدترین محصولات موبایل</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              موقعیت‌های شغلی
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>📱 کارشناس فروش موبایل</li>
              <li>🎧 پشتیبان مشتریان</li>
              <li>💻 ادمین سایت / تولید محتوا</li>
              <li>📦 انبار و ارسال سفارشات</li>
            </ul>
          </div>
        </div>

        {/* فرم ارسال درخواست */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            ارسال درخواست همکاری
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="text"
              placeholder="شماره تماس"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="ایمیل"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 md:col-span-2"
            />
            <textarea
              rows="4"
              placeholder="درباره خودتان و مهارت‌هایتان بنویسید..."
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 md:col-span-2 resize-none"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              ارسال درخواست
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
