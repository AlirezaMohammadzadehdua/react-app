import React, { useState } from "react";
import img from '../images/SSGISGSSRCSR.png'
import img2 from '../images/bP8wV4OTP563o7Ch0zSvCkv1ANOEcyPg9szrVgok.jpg'
import img3 from '../images/cover.webp'
import img4 from '../images/nativeHybrid.png'
import img5 from '../images/2cbSe0RTRhV7mSAPCzqygsbNADongAm9XYcLjAOZ.png'
import img6 from '../images/gravity_well_cartography_2_by_lordsong-d5lrxws.jpg'
import img7 from '../images/1754057.jpg'
import Documents from "./Documents";
function NewData() {
    const [stateArticle, setStateArticle] = useState({
        articles: [
            <>
                <div className="grid grid-cols-2 border-2 border-r-indigo-800 border-r-4 border-inherit rounded-lg bg-indigo-50 p-3 mr-2 shadow-2xl mt-4">
                    <div>
                        <img className="rounded-md transform transition hover:scale-95" src={img} />
                        <div className="flex mt-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-red-200 text-red-600 hover:bg-red-700 hover:text-white transform transition duration-200 rounded h-6 w-6 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-200 text-blue-600 hover:bg-blue-700 hover:text-white transform transition duration-200 rounded mr-2 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-gray-200 text-gray-600 mr-2 hover:bg-gray-700 hover:text-white transform transition duration-200 rounded p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-orange-200 mr-2 p-1 rounded text-orange-600 cursor-pointer hover:bg-orange-700 hover:text-white transform transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <a className="mr-2 hover:text-blue-800 font-bold" href="#">
                            تفاوت بین SSG و ISG و SSR و CSR
                        </a>
                        <h3 className="m-6 md:m-16 border-2 border-indigo-600 py-1 rounded-lg text-center bg-indigo-600 text-white hover:bg-white hover:text-black cursor-pointer transform transition duration-150">توسعه وب</h3>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-2 border-r-blue-800 border-r-4 border-inherit rounded-lg bg-blue-50 p-3 mr-2 shadow-2xl mt-4">
                    <div>
                        <img className="rounded-md transform transition hover:scale-95" src={img2} />
                        <div className="flex mt-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-red-200 text-red-600 hover:bg-red-700 hover:text-white transform transition duration-200 rounded h-6 w-6 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-200 text-blue-600 hover:bg-blue-700 hover:text-white transform transition duration-200 rounded mr-2 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-gray-200 text-gray-600 mr-2 hover:bg-gray-700 hover:text-white transform transition duration-200 rounded p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-orange-200 mr-2 p-1 rounded text-orange-600 cursor-pointer hover:bg-orange-700 hover:text-white transform transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <a className="mr-2 hover:text-blue-800 font-bold" href="#">
                            سرور پایتون روی رزبری‌پای
                        </a>
                        <h3 className="m-6 md:m-16 border-2 border-blue-600 py-1 rounded-lg text-center bg-blue-600 text-white hover:bg-white hover:text-black cursor-pointer transform transition duration-150">پایتون</h3>
                    </div>ّ
                </div>
                <div className="grid grid-cols-2 border-2 border-r-yellow-600 border-r-4 border-inherit rounded-lg bg-indigo-50 p-3 mr-2 shadow-2xl mt-4">
                    <div>
                        <img className="rounded-md transform transition hover:scale-95" src={img3} />
                        <div className="flex mt-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-red-200 text-red-600 hover:bg-red-700 hover:text-white transform transition duration-200 rounded h-6 w-6 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-200 text-blue-600 hover:bg-blue-700 hover:text-white transform transition duration-200 rounded mr-2 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-gray-200 text-gray-600 mr-2 hover:bg-gray-700 hover:text-white transform transition duration-200 rounded p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-orange-200 mr-2 p-1 rounded text-orange-600 cursor-pointer hover:bg-orange-700 hover:text-white transform transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <a className="mr-2 hover:text-blue-800 font-bold" href="#">
                            شاید “سفر در زمان” امکان‌پذیر باشد!
                        </a>
                        <h3 className="m-6 md:m-16 border-2 border-yellow-600 py-1 rounded-lg text-center bg-yellow-600 text-white hover:bg-white hover:text-black cursor-pointer transform transition duration-150">فیزیک</h3>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-2 border-r-cyan-600 border-r-4 border-inherit rounded-lg bg-blue-50 p-3 mr-2 shadow-2xl mt-4">
                    <div>
                        <img className="rounded-md transform transition hover:scale-95" src={img4} />
                        <div className="flex mt-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-red-200 text-red-600 hover:bg-red-700 hover:text-white transform transition duration-200 rounded h-6 w-6 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-200 text-blue-600 hover:bg-blue-700 hover:text-white transform transition duration-200 rounded mr-2 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-gray-200 text-gray-600 mr-2 hover:bg-gray-700 hover:text-white transform transition duration-200 rounded p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-orange-200 mr-2 p-1 rounded text-orange-600 cursor-pointer hover:bg-orange-700 hover:text-white transform transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <a className="mr-2 hover:text-blue-800 font-bold" href="#">
                            مقایسه اپلیکیشن‌های Native و Hybrid
                        </a>
                        <h3 className="m-6 md:m-16 border-2 border-cyan-600 py-1 rounded-lg text-center bg-cyan-600 text-white hover:bg-white hover:text-black cursor-pointer transform transition duration-150">
                            برنامه نویسی موبایل
                        </h3>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-2 border-r-orange-600 border-r-4 border-inherit rounded-lg bg-indigo-50 p-3 mr-2 shadow-2xl mt-4">
                    <div>
                        <img className="rounded-md transform transition hover:scale-95" src={img5} />
                        <div className="flex mt-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-red-200 text-red-600 hover:bg-red-700 hover:text-white transform transition duration-200 rounded h-6 w-6 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-200 text-blue-600 hover:bg-blue-700 hover:text-white transform transition duration-200 rounded mr-2 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-gray-200 text-gray-600 mr-2 hover:bg-gray-700 hover:text-white transform transition duration-200 rounded p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-orange-200 mr-2 p-1 rounded text-orange-600 cursor-pointer hover:bg-orange-700 hover:text-white transform transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <a className="mr-2 hover:text-blue-800 font-bold" href="#">
                            فناوری‌هایی که امسال در صنعت توسعه اپلیکیشن مورد استفاده قرار می‌گیرند
                        </a>
                        <h3 className="m-6 md:m-16 border-2 border-orange-600 py-1 rounded-lg text-center bg-orange-600 text-white hover:bg-white hover:text-black cursor-pointer transform transition duration-150">آموزشی</h3>
                    </div>
                </div>
            </>
        ],
        loading: false
    })
    const loadMore = () => {
        setStateArticle({ loading: true })
        let articles = [
            <>
                <div className="grid grid-cols-2 border-2 border-r-green-600 border-r-4 border-inherit rounded-lg bg-indigo-50 p-3 mr-2 shadow-2xl mt-4">
                    <div>
                        <img className="rounded-md transform transition hover:scale-95" src={img6} />
                        <div className="flex mt-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-red-200 text-red-600 hover:bg-red-700 hover:text-white transform transition duration-200 rounded h-6 w-6 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-200 text-blue-600 hover:bg-blue-700 hover:text-white transform transition duration-200 rounded mr-2 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-gray-200 text-gray-600 mr-2 hover:bg-gray-700 hover:text-white transform transition duration-200 rounded p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-orange-200 mr-2 p-1 rounded text-orange-600 cursor-pointer hover:bg-orange-700 hover:text-white transform transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <a className="mr-2 hover:text-blue-800 font-bold" href="#">
                            مدل جدیدی از گرانش احیا شد
                        </a>
                        <h3 className="m-6 md:m-16 border-2 border-green-600 py-1 rounded-lg text-center bg-green-600 text-white hover:bg-white hover:text-black cursor-pointer transform transition duration-150">فیزیک</h3>
                    </div>
                </div>
                <div className="grid grid-cols-2 border-2 border-r-black border-r-4 border-inherit rounded-lg bg-indigo-50 p-3 mr-2 shadow-2xl mt-4">
                    <div>
                        <img className="rounded-md transform transition hover:scale-95" src={img7} />
                        <div className="flex mt-2 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-red-200 text-red-600 hover:bg-red-700 hover:text-white transform transition duration-200 rounded h-6 w-6 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-200 text-blue-600 hover:bg-blue-700 hover:text-white transform transition duration-200 rounded mr-2 cursor-pointer p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-gray-200 text-gray-600 mr-2 hover:bg-gray-700 hover:text-white transform transition duration-200 rounded p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-orange-200 mr-2 p-1 rounded text-orange-600 cursor-pointer hover:bg-orange-700 hover:text-white transform transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <a className="mr-2 hover:text-blue-800 font-bold" href="#">
                            انتشار عکس تمام رنگی جیمز وب
                        </a>
                        <h3 className="m-6 md:m-16 border-2 border-black py-1 rounded-lg text-center bg-black text-white hover:bg-white hover:text-black cursor-pointer transform transition duration-150">آموزشی</h3>
                    </div>
                </div>
            </>
        ]
        setTimeout(() => {
            setStateArticle(prevState => {
                return {
                    articles: [...stateArticle.articles, ...articles],
                    loading: false
                }
            })
        }, 3000);
    }
    return (
        <>
            <div className="grid md:grid-cols-2 bg-gray-200">
                <div className="right-section mt-4">
                    <div className="flex items-center border-2 border-r-blue-800 border-r-4 border-white rounded-lg bg-white p-3 mr-2 shadow-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-lime-900 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <h2 className="font-bold text-lg">مطالب جدید</h2>
                    </div>
                    {
                        stateArticle.articles
                    }
                    {
                        stateArticle.loading
                            ? <div className="mt-2">
                                در حال دریافت اطلاعات
                                <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </div>
                            : null
                    }
                    <button onClick={loadMore} className="md:mr-4 rounded-md border-2 border-pink-700 bg-pink-700 text-white hover:bg-white hover:text-black cursor-pointer transform transition duration-150 md:w-1/3 text-center p-1 my-2">مقالات بیشتر</button>
                </div>
                <div className="left-section mt-4">
                    <Documents />
                </div>
            </div>
        </>
    )
}

export default NewData;