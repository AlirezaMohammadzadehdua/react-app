import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
    const [stateIsOpen, setIsOpenstate] = useState(false)
    return (
        <>
            <nav className="bg-gray-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="#f1f2f6">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <div className="hidden md:block">
                                <ul className="md:mr-48">
                                    <li className="hover:bg-gray-800 p-2 transform transition-all duration-500  rounded-md text-sm   font-bold  cursor-pointer inline-block px-2 text-white">صفحه اصلی</li>
                                    <li className="group relative hover:bg-gray-800 p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                        <button className="font-semibold rounded inline-flex items-center">
                                            <span className="mr-1 text-white">دانش</span>
                                        </button>
                                    </li>
                                    <li className="group relative hover:bg-gray-800 p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                        <button className="font-semibold rounded inline-flex items-center">
                                            <span className="text-white mr-1 ">برنامه نویسی</span>
                                        </button>
                                    </li>
                                    <li className="group relative hover:bg-gray-800 p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                        <button className="font-semibold rounded inline-flex items-center">
                                            <span className="text-white mr-1">فیزیک</span>
                                        </button>
                                    </li>
                                    <li className="group relative hover:bg-gray-800 p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                        <button className="font-semibold rounded inline-flex items-center">
                                            <span className="text-white mr-1">کتاب علمی</span>
                                        </button>
                                    </li>
                                    <li className="group relative hover:bg-gray-800 p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                        <button className="font-semibold rounded inline-flex items-center">
                                            <span className="text-white mr-1">ویدئو</span>
                                        </button>
                                    </li>
                                    <li className="group relative hover:bg-gray-800 p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                        <button className="font-semibold rounded inline-flex items-center">
                                            <span className="text-white mr-1">نجوم</span>
                                        </button>
                                    </li>
                                    <li className="text-white hover:bg-gray-800 p-2 transform transition-all duration-500 rounded-md text-sm font-bold  cursor-pointer inline-block px-2">درباره ما</li>
                                    <li className="text-white hover:bg-gray-800 p-2 transform transition-all duration-500 rounded-md text-sm font-bold  cursor-pointer px-2 w-auto inline-block">عضویت</li>
                                </ul>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpenstate(!stateIsOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only"></span>
                                {!stateIsOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                    </svg>
                                )

                                }
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={stateIsOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {
                        (ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-100">
                                    <ul className="md:mr-48">
                                        <li className="hover:bg-gray-800 hover:text-white p-2 transform transition-all duration-500  rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">صفحه اصلی</li>
                                        <li className="group relative hover:bg-gray-800 hover:text-white p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                            <button className="font-semibold rounded inline-flex items-center">
                                                <span className="mr-1">دانش</span>
                                            </button>
                                        </li>
                                        <li className="group relative hover:bg-gray-800 hover:text-white p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                            <button className="font-semibold rounded inline-flex items-center">
                                                <span className="mr-1">برنامه نویسی</span>
                                            </button>
                                        </li>
                                        <li className="group relative hover:bg-gray-800 hover:text-white p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                            <button className="font-semibold rounded inline-flex items-center">
                                                <span className="mr-1">فیزیک</span>
                                            </button>
                                        </li>
                                        <li className="group relative hover:bg-gray-800 hover:text-white p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                            <button className="font-semibold rounded inline-flex items-center">
                                                <span className="mr-1">کتاب علمی</span>
                                            </button>
                                        </li>
                                        <li className="group relative hover:bg-gray-800 hover:text-white p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                            <button className="font-semibold rounded inline-flex items-center">
                                                <span className="mr-1">ویدئو</span>
                                            </button>
                                        </li>
                                        <li className="group relative hover:bg-gray-800 hover:text-white p-2 transform transition-all duration-500 rounded-md text-sm  text-black font-bold  cursor-pointer inline-block px-2">
                                            <button className="font-semibold rounded inline-flex items-center">
                                                <span className="mr-1">نجوم</span>
                                            </button>
                                        </li>
                                        <li className="hover:bg-gray-800 hover:text-white p-2 transform transition-all duration-500 rounded-md text-sm text-black font-bold  cursor-pointer px-2 w-auto inline-block">درباره ما</li>
                                        <li className="hover:bg-gray-800 hover:text-white p-2 transform transition-all duration-500 rounded-md text-sm text-black font-bold  cursor-pointer px-2 w-auto inline-block">عضویت</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                </Transition>
            </nav>
        </>
    )
}

export default Nav;