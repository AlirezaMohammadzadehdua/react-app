import React from "react";
import img from '../images/how-the-universe-works-science-channel-season-5-release-date.jpg'
import img2 from '../images/MV5BMDFlMTllMzEtMzhmMC00MmU5LTkyM2EtMThkMTQ4ZDYyZDFkXkEyXkFqcGdeQXVyNTYxMzI5MTk@._V1_.jpg'
import img3 from '../images/maxresdefault-1.jpg'
function Documents() {
    return (
        <>
            <div className="items-center border-2 border-r-blue-800 border-r-4 border-white rounded-lg bg-white p-3 mr-2 shadow-2xl">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-900 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="mr-1 font-black">جستجو</span>
                </div>
                <div className="flex">
                    <input className="mt-2 py-2 bg-gray-50 border border-gray-300 w-2/3 text-gray-600 rounded-lg focus:ring-2 ring-blue-700 outline-none" placeholder="جستجو..." />
                    <button className="mr-20 border-2 border-cyan-900 bg-cyan-900 text-white hover:bg-white hover:text-black transform transition duration-150 p-2 rounded-md cursor-pointer">جستجو</button>
                </div>
            </div>
            <div className="mt-2 items-center border-2 border-r-blue-800 border-r-4 border-white rounded-lg bg-white p-3 mr-2 shadow-2xl">
                <a href="#" className="underline decoration-2 underline-offset-4 font-extrabold cursor-pointer">
                    محبوب ترین ها براساس لایک ها
                </a>
                <div className="divide-y mt-5">
                    <h3 className="text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        صخره‌ای شبیه “درب ورودی” در مریخ
                    </h3>
                    <h3 className="my-1 text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        عکس سیاهچاله راه‌شیری آماده است!
                    </h3>
                    <h3 className="text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        عکس سیاهچاله مرکزی راه‌شیری منتشر شد
                    </h3>
                    <h3 className="my-1 text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        آیا ویجر ۱ دچار نقص فنی شده؟
                    </h3>
                    <h3 className="text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        پرتاب ماهواره با منجنیق
                    </h3>
                    <h3 className="my-1 text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        آیا نرم افزار بدون باگ وجود دارد؟
                    </h3>
                    <h3 className="text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        توزیع‌های لینوکس برای برنامه نویسان
                    </h3>
                    <h3 className="my-1 text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        سلول‌های پوست انسان ۳۰ سال جوان‌تر شدند!
                    </h3>
                    <h3 className="my-1 text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        نقشۀ کامل ژنوم انسان رمزگشایی شد!
                    </h3>
                    <h3 className="my-1 text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        در “تجربه‌ نزدیک به مرگ” چه روی می‌دهد؟
                    </h3>
                    <h3 className="my-1 text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        تفاوت وب اپلیکیشن و وب سایت
                    </h3>
                    <h3 className="text-gray-500 cursor-pointer hover:text-gray-700 transform transition duration-150">
                        خویشاوند کهن انسان ۲ میلیون سال پیش مانند ما راه می‌رفت
                    </h3>
                </div>
            </div>
            <div className="mt-2 items-center border-2 border-r-blue-800 border-r-4 border-white rounded-lg bg-white p-3 mr-2 shadow-2xl">
                <h3 className="font-bold">
                    <span className="border-r-4 border-x-slate-700 ml-3"></span>
                    آخرین مستندات
                </h3>
                <br />
                <a href="#" className="hover:text-gray-900 text-gray-500">
                    دانلود مستند: کیهان چگونه کار می‌کند؟ +زیرنویس فارسی
                </a>
                <img className="rounded-md my-4" src={img} />
                <a href="#" className="hover:text-gray-900 text-gray-500">
                    دانلود مستند: چه وجود دارد ۲؟
                </a>
                <img className="rounded-md mt-4" src={img2} />
                <br />
                <a href="#" className="hover:text-gray-900 text-gray-500">
                    دانلود مستند: چرا باید به فلسفۀ فیزیک و کیهان‌شناسی بپردازیم؟
                </a>
                <img className="rounded-md my-4" src={img3} />
            </div>
        </>
    )
}

export default Documents;