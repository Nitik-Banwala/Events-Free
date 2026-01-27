import { useState, useEffect } from "react";
import Button from "./Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <>

            <nav className="w-full px-4 lg:px-0 fixed top-0 left-0 bg-black/40 backdrop-blur-[9px] z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between pt-4">


                    <div className="flex items-center gap-3 whitespace-nowrap">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="sm:w-24.5 sm:h-16.5 w-13"
                        />
                        <div className="flex items-baseline gap-1">
                            <h1 className="sm:text-4xl text-2xl font-bold text-[#2C49FE] cursor-pointer">
                                Events
                            </h1>
                            <span className="sm:text-4xl text-2xl font-bold text-[#1A9FFF] cursor-pointer">
                                Free
                            </span>
                        </div>
                    </div>


                    <div className="hidden lg:flex items-center gap-14 whitespace-nowrap">
                        <a className="text-white hover:text-gray-400 transition cursor-pointer">HOME</a>
                        <a className="text-white hover:text-gray-400 transition cursor-pointer">EVENTS</a>
                        <a className="text-white hover:text-gray-400 transition cursor-pointer">FEED</a>
                        <a className="text-white hover:text-gray-400 transition cursor-pointer">USER NAME</a>
                        <Button
                            text="Log Out"
                            style='bg-[#2C49FE] hover:bg-white hover:text-[#2C49FE] px-7 py-2 rounded-[23px] text-[20px] text-white font-normal font-["Yantramanav",sans-serif]'
                        />
                    </div>
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden flex flex-col gap-1.5 z-60"
                    >
                        <span
                            className={`h-0.75 w-7.5 bg-white transition-all duration-300 ${open && "rotate-45 translate-y-2"
                                }`}
                        />
                        <span
                            className={`h-0.75 w-7.5 bg-white transition-all duration-300 ${open && "opacity-0"
                                }`}
                        />
                        <span
                            className={`h-0.75 w-7.5 bg-white transition-all duration-300 ${open && "-rotate-45 -translate-y-2"
                                }`}
                        />
                    </button>
                </div>
            </nav>

            <div
                className={`fixed top-0 right-0 h-screen w-full bg-black flex flex-col items-center justify-center gap-6
        transition-transform duration-500 ease-in-out lg:hidden z-40
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <a onClick={() => setOpen(false)} className="text-white text-[22px]">
                    HOME
                </a>
                <a onClick={() => setOpen(false)} className="text-white text-[22px]">
                    EVENTS
                </a>
                <a onClick={() => setOpen(false)} className="text-white text-[22px]">
                    FEED
                </a>
                <a onClick={() => setOpen(false)} className="text-white text-[22px]">
                    USER NAME
                </a>
                <Button
                    text="Log Out"
                    style='bg-[#2C49FE] hover:bg-white hover:text-[#2C49FE] px-7 py-2 rounded-[23px] text-[20px] text-white font-normal font-["Yantramanav",sans-serif]'
                />
            </div>
        </>
    );
}
