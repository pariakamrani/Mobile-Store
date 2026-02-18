import { Link } from "react-router-dom";



export default function Weblog() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <header className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            وبلاگ فروشگاه موبایل
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            جدیدترین اخبار، بررسی تخصصی موبایل‌ها و راهنمای خرید هوشمندانه
          </p>
        </div>
      </header>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Card */}
          {blogs.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-56 overflow-hidden object-cover ">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300 "
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <span className="text-sm text-gray-500">
                  {item.date}
                </span>

                <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm line-clamp-3">
                  {item.description}
                </p>

                
              </div>
            </article>
          ))}

        </div>
      </section>
    </div>
  );
}

const blogs = [
  {
    id: 1,
    title: "بهترین گوشی‌های 2025 برای خرید",
    description:
      "در این مقاله بهترین گوشی‌های سال 2025 را از نظر قیمت، عملکرد و دوربین بررسی می‌کنیم.",
    date: "۲۲ بهمن ۱۴۰۴",
    image: "./img/weblog1.webp",
  },
  {
    id: 2,
    title: "راهنمای انتخاب آیفون مناسب",
    description:
      "اگر بین مدل‌های مختلف آیفون مردد هستید، این راهنما به شما کمک می‌کند بهترین انتخاب را داشته باشید.",
    date: "۱۸ بهمن ۱۴۰۴",
    image: "./img/weblog2.jpg",
  },
  {
    id: 3,
    title: "مقایسه گوشی‌های پرچمدار اندرویدی",
    description:
      "سامسونگ، شیائومی یا گوگل؟ مقایسه کامل پرچمداران اندرویدی برای تصمیم‌گیری بهتر.",
    date: "۱۲ بهمن ۱۴۰۴",
    image: "./img/weblog3.jpg",
  },
];
