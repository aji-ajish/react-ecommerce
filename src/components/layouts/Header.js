import { useState } from "react"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuToggle = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="bg-sky-400 w-full ">
            <nav className="flex justify-between container mx-auto items-center h-20 ">
                <div className="order-2 lg:order-1">
                    <span className="text-4xl mr-1 font-love">Online</span>
                    <span className="text-2xl font-agbalumo">Shop</span>
                </div>
                <div className="order-1 ">
                    <div className="lg:hidden mt-2">
                        <button onClick={menuToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? 'M12 4.5v15m7.5-7.5h-15' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'} />
                            </svg>
                        </button>
                    </div>
                    <div className={`${menuOpen ? "block" : "hidden"} lg:block lg:order-2`}>
                        <ul className="grid lg:grid-flow-col absolute lg:relative lg:space-x-16 font-agbalumo text-xl  h-fit bg-red-300 w-full left-0 mt-5">
                            <li className="">Home</li>
                            <li className="">Product</li>
                            <li className="">About</li>
                            <li className="">Home</li>
                            <li className="">Product</li>
                            <li className="">About</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-flow-col space-x-4 order-3 lg:order-3">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>
            </nav>
        </div>
    )
}
