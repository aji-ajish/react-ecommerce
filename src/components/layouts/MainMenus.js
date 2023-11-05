import React, { useState } from 'react'
import SearchForm from './SearchForm'

export default function MainMenus({ isSideBarOpen,searchButton }) {

    return (
        <ul className={`${isSideBarOpen ? 'block' : 'lg:flex hidden'} dark:text-slate-50 transition-all duration-700 text-lg font-agbalumo text-slate-800 gap-1 order-3`}>
            <li className="p-3 px-6 border-t lg:border-0">Home</li>
            <li className="p-3 px-6 border-t lg:border-0">Home</li>
            <li className="p-3 px-6 border-t lg:border-0">Home</li>
            <li className="p-3 px-6 border-t lg:border-0">Home</li>
            <li className="p-3 px-6 border-t lg:border-0">Home</li>
            <li className="p-3 px-6 border-y lg:border-0">Sign in</li>
            <li className="p-3 px-6 border-y lg:border-0">
                <SearchForm />
                <svg onClick={searchButton} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6 hidden lg:block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </li>
        </ul>
    )
}
