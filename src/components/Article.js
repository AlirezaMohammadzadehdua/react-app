import React from "react";

function Article() {
    <div className="grid grid-cols-2 border-2 border-r-indigo-800 border-r-4 border-inherit rounded-lg bg-indigo-50 p-3 mr-2 shadow-2xl mt-4">
        <div>
            {/* <img className="rounded-md transform transition hover:scale-95" src={img} /> */}
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
}

export default Article;