import React from "react";
import img from '../images/data-science-predictions-for-near-future-1024x440.jpeg.optimal.jpeg'
import img2 from '../images/K5kPayf4aw92S2VIDxQ5YCMOUqadJVQkKQcKaXcB.jpg'
import img3 from '../images/GettyImages-1202870693.webp'
import img4 from '../images/GRDtAF0RSNF7n2NiAycqlXNKiWsZMa9aq6iZnRSy.png'
import Mod from './ModalComponents/Mod'
import Mod2 from './ModalComponents/Mod2'
import Mod3 from './ModalComponents/Mod3'
import Mod4 from './ModalComponents/Mod4'
function Content() {
    return (
        <>
            <div className="bg-gray-200">
                <h1 className="text-2xl md:text-5xl text-center font-extrabold">
                    از گوشه و اطراف دنیای علم
                </h1>
                <br />
                <p className="text-center md:px-32 font-bold">
                    نوشتن کار جالبیست که هزاران سال است که همراه ماست و کمک کرده تا همیشه بروز باشیم،ما اینجا سعی کردیم فضا را به شکلی آماده کنیم تا شما بتوانید ایده ها و مطالب جالب حوزه های مختلف علمی را در دسترس داشته باشید
                </p>
                <a href="#" className="flex justify-center font-semibold cursor-pointer border-[3px] border-green-800 py-3 mt-8 rounded-md bg-green-800 text-white m-auto text-center w-2/5 md:w-1/5 hover:bg-gray-200 hover:text-black transform transition duration-150">
                    مشاهده همه مطالب
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <div className="grid md:grid-cols-4">
                <div className="bg-gray-200 pt-4 text-xl font-medium pr-5">
                    <a href="#" className="font-black hover:text-blue-800">
                        نقشه راه یادگیری علم داده
                    </a>
                    <img className="rounded-md transform transition-all hover:scale-95" src={img} />
                    <br />
                    <Mod />
                </div>
                <div className="bg-gray-200 pt-4 text-xl font-medium pr-5">
                    <a href="#" className="font-black hover:text-blue-800">
                        هوش مصنوعی چیست؟
                    </a>
                    <img className="rounded-md transform transition-all hover:scale-95" src={img2} />
                    <br />
                    <Mod2 />
                </div>
                <div className="bg-gray-200 pt-4 text-xl font-medium pr-5">
                    <a href="#" className="font-black hover:text-blue-800">
                        آشنایی با یادگیری ماشین
                    </a>
                    <img className="rounded-md transform transition-all hover:scale-95" src={img3} />
                    <br />
                    <Mod3 />
                </div>
                <div className="bg-gray-200 pt-4 text-xl font-medium pr-5">
                    <a href="#" className="font-black hover:text-blue-800">
                        سرعت Go در مقایسه با Java
                    </a>
                    <img className="rounded-md transform transition-all hover:scale-95" src={img4} />
                    <br />
                    <Mod4 />
                </div>
            </div>
        </>
    )
}

export default Content;