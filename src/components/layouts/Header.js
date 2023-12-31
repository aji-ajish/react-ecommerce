import { useState, useEffect } from "react"
import rightArrow from '../../assets/shapes/shape-1.webp'
import leftArrow from '../../assets/shapes/shape-2.webp'
import 'animate.css';
import MainMenus from "./MainMenus";
import SocialMediaLinks from "./SocialMediaLinks";


export default function Navbar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)
    const [isMenuScrolled, setIsMenuScrolled] = useState(false);
    const [searchFormOpen, setSearchFormOpen] = useState(false)



    const scrollCheck = () => {
        if (window.pageYOffset > 100) {
            setIsMenuScrolled(true);
        } else {
            setIsMenuScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollCheck);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', scrollCheck);
        };
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }

    const openSideBar = () => {
        setIsSideBarOpen(true)
    }

    const searchButton = () => {
        console.log('sdc');
    }

    return (
        <>
            <nav className={`${isSideBarOpen ? 'flex' : 'hidden'} absolute w-full top-0 left-0 h-screen z-10 lg:hidden bg-gray-800 bg-opacity-70 animate__animated  animate__fadeIn`} >
                <div className="bg-white w-full md:max-w-sm shadow-2xl animate__animated  animate__fadeInLeft">
                    <div className="flex justify-end p-5 text-slate-700">
                        <svg onClick={closeSideBar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div>
                        <div className="flex gap-3 justify-center  mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <a href='tel:+91 99999 99999' className="hover:text-emerald-500 transition-all duration-500">+91 99999 99999</a>
                        </div>
                        <div className="flex gap-3 justify-center  mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            <a target='_blank' href='mailto:test@gmail.com' className="hover:text-emerald-500 transition-all duration-500">test@gmail.com</a>
                        </div>
                        <div className="mt-6">
                            <MainMenus isSideBarOpen={isSideBarOpen} searchButton={searchButton()} />
                        </div>
                        <div className="mt-6">
                            <SocialMediaLinks />
                        </div>
                    </div>
                </div>
                <div onClick={closeSideBar} className=" hidden sm:block sm:w-full">
                </div>
            </nav>
            <header className="absolute w-full">
                <div className="bg-slate-800 hidden lg:block">
                    <div className="container text-white py-2">
                        <ul className="flex justify-between ">
                            <li>Upto 20% off for<span className="text-emerald-500">Specific Products</span></li>
                            <li>
                                <img src={rightArrow} alt="Logo" />
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <a href='tel:+91 99999 99999' className="hover:text-emerald-500 transition-all duration-500">+91 99999 99999</a>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                    <a target='_blank' href='mailto:test@gmail.com' className="hover:text-emerald-500 transition-all duration-500">test@gmail.com</a>
                                </div>
                            </li>
                            <li>
                                <img src={leftArrow} alt="Logo" />
                            </li>
                            <li>
                                <SocialMediaLinks />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${isMenuScrolled ? 'fixed top-0 w-full bg-white shadow-xl animate__animated animate__slideInDown' : 'py-5'} px-5`}>
                    <div className={`${isMenuScrolled ? '' : 'border border-emerald-500 border-opacity-30'} py-3 md:py-3 flex items-center justify-between container rounded-xl`}>
                        <a href="#" className="order-2 lg:order-1">
                            <div>
                                <span className="sm:text-4xl text-3xl mr-1 font-love">Online</span>
                                <span className="sm:text-2xl text-xl font-agbalumo">Shop</span>
                            </div>
                        </a>
                        <div className="text-slate-700 order-1 lg:hidden">
                            <svg onClick={openSideBar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        <MainMenus />
                        <ul className="flex lg:gap-6 gap-1 lg:order-3 order-3">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </li>

                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
