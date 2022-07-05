import React from "react";
import './Footer.css'
import { FaTelegram, FaInstagram, FaFacebookSquare, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {

    return (
        <>
            <div className="bg-gray-300">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
                    <div className="p-5 w-48">
                        <div className="text-xs text-gray-700 font-medium">خانه</div>
                        <a href="#link" className="my-3 block">
                            خدمات
                        </a>
                        <a href="#link" className="my-3 block">
                            محصولات
                        </a>
                        <a href="#link" className="my-3 block">
                            درباره ما
                        </a>
                        <a href="#link" className="my-3 block">
                            ارتباط با ما
                        </a>
                        <a href="#link" className="my-3 block">
                            پرسش و پاسخ|
                            <span className="text-teal-600 text-xs p-1">جدید</span>
                        </a>
                    </div>
                    <div className="p-5 w-48">
                        <div className="text-xs text-gray-700 font-medium">کاربران</div>
                        <a href="#link" className="my-3 block">
                            ورود
                        </a>
                        <a href="#link" className="my-3 block">
                            عضویت
                        </a>
                        <a href="#link" className="my-3 block">
                            نظرسنجی ها
                        </a>
                        <a href="#link" className="my-3 block">
                            دسته بندی
                        </a>
                        <a href="#link" className="my-3 block">
                            قوانین و مقررات
                        </a>
                    </div>
                    <div className="p-5 w-48">
                        <div className="text-xs text-gray-700 font-medium">موضوعات پرطرفدار</div>
                        <a href="#link" className="my-3 block">
                            نجوم
                        </a>
                        <a href="#link" className="my-3 block">
                            کیهان شناسی
                        </a>
                        <a href="#link" className="my-3 block">
                            هوش مصنوعی
                        </a>
                        <a href="#link" className="my-3 block">
                            علم و شبه علم
                        </a>
                        <a href="#link" className="my-3 block">
                            توسعه اپلیکیشن
                        </a>
                    </div>
                    <div className="p-5 w-48">
                        <div className="text-xs text-gray-700 font-medium">منابع</div>
                        <a href="#link" className="my-3 block">
                            مستندات
                        </a>
                        <a href="#link" className="my-3 block">
                            آموزشی
                        </a>
                        <a href="#link" className="my-3 block">
                            حمایت
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-t-4 border-gray-700">
                    <div className="flex pb-5 px-3 m-auto pt-5  text-sm flex-col md:flex-row max-w-6xl">
                        <a href="#telegram">
                            <FaTelegram className="w-8 h-8 text-blue-600" />
                        </a>
                        <a href="#instagram">
                            <FaInstagram className="w-8 h-8 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-gray-100 rounded-md md:mx-3" />
                        </a>
                        <a href="#faceBook">
                            <FaFacebookSquare className="w-8 h-8 text-blue-800" />
                        </a>
                        <a href="#youTube">
                            <FaYoutube className="w-8 h-8 md:mr-3 text-red-600" />
                        </a>
                        <a href="#linkedin" className="md:mx-3">
                            <FaLinkedin className="w-8 h-8 text-blue-600" />
                        </a>
                        <a href="#twitter">
                            <FaTwitter className="w-8 h-8 text-blue-600" />
                        </a>
                    </div>
                    <p className="mt-6">کلیه حقوق این وبسایت محفوظ میباشد.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;