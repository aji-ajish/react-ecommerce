import React from 'react'

export default function SearchForm() {
    return (
        <form className='lg:hidden '>
            <input type='search' placeholder='search products'  
            className='p-1 px-4  border border-gray-600 rounded-full w-full font-poppins'/>
        </form>
    )
}
