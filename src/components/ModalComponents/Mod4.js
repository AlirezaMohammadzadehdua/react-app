import React from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="border-[3px] border-blue-800 text-black hover:bg-blue-800 hover:text-white transform font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <span className="text-base">
                    توضیحات
                </span>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        آشنایی با یادگیری ماشین
                                    </h3>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        برای یک انتخاب منطقی، باید عناصر مهمی را در نظر بگیریم؛ اغلب برایتان پیش آمده است که در مقالات مربوط به مقایسه جاوا و Go گیر بیافتید. تقریبا همیشه در مرکز مقایسه بین این دو، سرعت اجرا و وجود یا فقدان ویژگی‌های خاص مطرح می‌شود. بنابراین اگر کسی بگوید که زبان Go بسیار جذاب است، ده‌ها نفر پاسخ می‌دهند که جاوا بهتر است، زیرا این معیاری وجود دارد که ثابت می‌کند جاوا بسیار سریعتر است (به علاوه دارای Generics و همچنین try-catch است). سپس بنچمارک را نگاه می‌کنید و می‌بینید که زبان جاوا سریع‌تر از Go است و دسته دیگری از نظرات را پیدا می‌کنید که برعکس آن است. رفته رفته لحن گفتگوها به سمت جنگ تعصبی گرایش پیدا می‌کند.
                                    </p>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="border-[3px] border-blue-800 text-black hover:bg-blue-800 hover:text-white transform font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        بستن
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}