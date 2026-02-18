import { Link } from "react-router-dom";
function IntoduceWatch() {

    return (
        <>
            <div className="bg-gray-100/50 py-1 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">

                    {/* IMAGE */}
                    <div className="w-full flex justify-center  overflow-hidden">
                        <img
                            src="./img/watch7.png"
                            alt="watch"
                            className="w-full max-w-[400px] md:max-w-[550px] object-contain"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="text-justify ">
                        <h2 className="text-4xl font-bold mb-4">اپل واچ</h2>
                        <p className="leading-8 text-lg">
                           watchOS 8 قابلیت های جدیدی را برای بهبود اپلیکیشن های عکس ارائه کرده است. با استفاده از این قابلیت ها کاربر می تواند به راحتی عکس ها مشاهده و به اشتراک بگذارد. برای انجام این کار، کاربر باید وارد اپلیکیشن Photos شود و با استفاده از دکمه اشتراک گذاری، عکس مورد نظر خود را ارسال کند.
                        </p>
                         <div className="relative top-1 lg:top-1/3 md:top-1/12 sm:top-1/12  text-center  mt-6 bg-pink-700 w-[200px] h-12 py-2 rounded-2xl"><p className="text-white "><Link to="/Watch"> مشاهده محصولات</Link> </p></div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default IntoduceWatch;