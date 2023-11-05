import React from 'react'

import Banner from './banner/Banner';
import Categories from './Categories';
import RandomItems from './RandomItems';

export default function Home({ isMenuScrolled }) {
    return (
        <section className={`${isMenuScrolled?'pt-48 lg:pt-52':'pt-24 lg:pt-40'} p-0 px-2 container mx-auto`}>
            <div className='relative '>
                <ul>
                    <Banner/>
                </ul>
            </div>
             <div className="container mx-auto   font-nunito">
                <div className="flex justify-center flex-wrap -mx-4">
                    <Categories />
                </div>
            </div>
            {/*<div className="container mx-auto   font-nunito">
                <div className="flex justify-center flex-wrap -mx-4">
                    <RandomItems />
                </div>
            </div> */}
        </section>
    )
}
