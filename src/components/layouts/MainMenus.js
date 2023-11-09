import React from 'react'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'

export default function MainMenus({ isSideBarOpen, searchButton }) {

    return (
        <ul className={`${isSideBarOpen ? '' : 'lg:flex hidden'} dark:text-slate-50 transition-all duration-700 text-lg font-agbalumo text-slate-800 gap-1 order-3`}>
            <li className="p-3 px-4 border-t lg:border-0"><Link to="/">Home</Link></li>
            <li className="p-3 px-4 border-t lg:border-0"><Link>Men</Link></li>
            <li className="p-3 px-4 border-t lg:border-0"><Link>Women</Link></li>
            <li className="p-3 px-4 border-t lg:border-0"><Link>Electronics</Link></li>
            <li className="p-3 px-4 border-t lg:border-0"><Link>Cosmetic</Link></li>
            <li className="p-3 px-4 border-y lg:border-0"><Link>Sign in</Link></li>
            <li className="p-3 px-4 border-y lg:border-0">
                <SearchForm />
                <svg onClick={searchButton} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6 hidden lg:block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </li>
        </ul>
    )
}
