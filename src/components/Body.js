import React from "react";
import './Body.css'
import img from '../images/Xub58vuiCCEKHLGuM4QWBU-400x255.jpg'
import img2 from '../images/https.webp'
import img3 from '../images/Blockchain.jpeg'
import img4 from '../images/730_full_africa_map.png'
function Articles() {
    return (
        <>
            <div className="bg-gray-200 pb-72 pt-4">
                <h1 className="font-extrabold text-2xl flex justify-center underline decoration-4 decoration-red-900 underline-offset-8">عناوین پربازدید</h1>
                <br />
                <div className="grid sm:grid-cols-2">
                    <div className="responsive relative mr-5 p-4 rounded border-4 border-dashed border-gray-700">
                        <a target="_blank" href="https://bigbangpage.com/astronomy/%d8%a2%db%8c%d8%a7-%da%a9%db%8c%d9%87%d8%a7%d9%86-%d8%af%da%86%d8%a7%d8%b1-%d9%81%d8%b1%d9%88%d9%be%d8%a7%d8%b4%db%8c-%d9%85%db%8c%d8%b4%d9%88%d8%af%d8%9f/" className="font-black text-2xl hover:text-blue-800">آیا کیهان دچار فروپاشی میشود؟</a>
                        <p className="text-slate-700">
                            بیگ بنگ: دانشمندان پیش‌بینی کردند که اگر رفتار “انرژی تاریک” دچار تغییر شود، می‌تواند طی ۱۰۰ میلیون سال آینده منجر به پایان انبساط شتاب‌دار کیهان شود و این روند در نهایت موجب فروپاشی و انقباض جهان می‌شود. به گزارش بیگ بنگ، سه اخترفیزیکدان، به‌نام‌های “کاسمین آندری”، “آنا ایجاس” و “پائول اشتاین‌هارت” در مقاله‌ای که بتازگی…
                        </p>
                        <img src={img} className="transform transition duration-500 hover:scale-105 absolute rounded-lg" />
                    </div>
                    <div className="md:mt-5 ml-3 relative mr-5 p-4 rounded border-4 border-gray-700 border-dashed">
                        <a target="_blank" href="https://roocket.ir/articles/what-is-https-and-why-its-to-important" className="font-black text-2xl hover:text-blue-800">HTTPS چیست و چرا اهمیت دارد؟</a>
                        <p className="text-slate-700">
                            HTTPS از Hyper Text Transfer Protocol Secure گرفته شده است، به عبارت دیگر همان پروتکل HTTP بوده که امنیت بیشتری دارد.

                            داده‌ها به دو روش از طریق مرورگر ارسال و دریافت می‌شوند: Standard و Secured. وقتی از سایت‌هایی بازدید می‌کنید که از HTTP استاندارد استفاده می‌کنند،...
                        </p>
                        <img className="w-11/12 transform transition duration-500 hover:scale-105 absolute rounded-lg" src={img2} />
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 mt-64">
                    <div className="ml-3 relative mr-5 p-4 rounded border-4 border-gray-700 border-dashed">
                        <a target="_blank" href="https://roocket.ir/articles/beginners-guide-to-blockchain-explaining-it-to-a-5-years-old" className="font-black text-2xl hover:text-blue-800">توضیح Blockchain به زبان ساده</a>
                        <p className="text-slate-700">
                            امروزه همه درباره Bitcoin صحبت می‌کنند. نگران نباشید؛ این مقاله درباره راه‌های مختلف کسب درآمد از Bitcoin نیست. گرچه، به شما کمک خواهد کرد تا فناوری اساسی Bitcoin که باعث کار کردن آن می‌شود، و این که چگونه مفهوم Blockchain می‌تواند در دهه‌های پیش رو پر کاربرد باشد را بهتر درک کنید....
                        </p>
                        <img className="w-11/12 transform transition duration-500 hover:scale-105 absolute rounded-lg" src={img3} />
                    </div>
                    <div className="responsive-art mt-5 ml-3 relative mr-5 p-4 rounded border-gray-700 border-4 border-dashed">
                        <a target="_blank" href="https://bigbangpage.com/science-content/%d9%86%d9%82%d8%b4%d9%87-%d9%85%d9%87%d8%a7%d8%ac%d8%b1%d8%aa%db%8c-%d8%a7%d9%86%d8%b3%d8%a7%d9%86-%d8%ae%d8%b1%d8%af%d9%85%d9%86%d8%af/" className="font-black text-2xl hover:text-blue-800">نقشه مهاجرتی انسان خردمند</a>
                        <p className="text-slate-700">
                            شواهد باستان‌شناسی و داده‌های ژنتیکی نشان می‌دهد که اجداد انسانی ما در آفریقا متولد شدند اما برای همیشه در این قاره نماندند. نخستین گام‌های خروج انسان خردمند از آفریقا به احتمال زیاد از منطقه‌ی باب المندب، تنگه‌ی میان یمن در شبه جزیره‌ی عربستان و جیبوتی اریتره در شاخ آفریقا بوده است؛ این تنگه…
                        </p>
                        <img className="w-11/12 transform transition duration-500 hover:scale-105 absolute rounded-lg" src={img4} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles;