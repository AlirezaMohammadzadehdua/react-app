import React from "react";
import Wave from "react-wavify";
import img from '../images/blockchain.svg'
function HeroSection() {
    const WaveEffect = () => (
        <Wave
            className="bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]"
            paused={false}
            options={{
                height: 110,
                amplitude: 80,
                speed: .09,
                points: 5
            }}
        />
    )
    return (
        <>
            <div className="bg-gradient-to-l from-[#2c3e50] to-[#bdc3c7]">
                <div className="flex justify-between">
                    <div>
                        <p className="mr-16 mt-20 text-white">آخرین مطالب</p>
                        <h1 className="w-3/5 mr-20 mt-10 mb-5 text-white font-extrabold text-2xl">فرصت های شغلی در حوزه بلاک چین و ارزهای دیجیتال</h1>
                        <p className="w-3/5 mr-20 text-white">پنج دلیل برای آنکه در سال ۲۰۲۲ برنامه نویس بلاک چین شویم</p>
                        <a href="#link" target="_blank" className="hidden md:block bg-white w-24 mr-20 mt-5 p-1 rounded-full hover:bg-gray-100 cursor-pointer"><span className="mr-2">ادامه مطلب</span></a>
                    </div>
                    <div>
                        <img src={img} className="md:mt-10 md:ml-20 w-60 h-60" alt="upgrade proccess" />
                        <a href="#link" className="block md:hidden bg-white w-24 p-1 rounded-full hover:bg-gray-100 cursor-pointer"><span className="mr-2">ادامه مطلب</span></a>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <WaveEffect />
        </>
    )
}

export default HeroSection;