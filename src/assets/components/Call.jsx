import React from "react";

export default function Call() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* فرم تماس */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            تماس با ما
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">نام</label>
              <input
                type="text"
                placeholder="نام شما"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">ایمیل</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">پیام</label>
              <textarea
                rows="4"
                placeholder="پیام شما..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              ارسال پیام
            </button>
          </form>
        </div>

        {/* اطلاعات تماس */}
        <div className="bg-gray-100 rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            اطلاعات فروشگاه
          </h3>

          <div className="space-y-3 text-gray-700">
            <p>
              📍 <span className="font-medium">آدرس:</span> تهران، خیابان ولیعصر
            </p>
            <p>
              📞 <span className="font-medium">تلفن:</span> 0912 000 0000
            </p>
            <p>
              📧 <span className="font-medium">ایمیل:</span> info@mobile-shop.ir
            </p>
            <p className="pt-2 text-sm text-gray-600">
              پشتیبانی همه‌روزه از ساعت 9 صبح تا 9 شب
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

