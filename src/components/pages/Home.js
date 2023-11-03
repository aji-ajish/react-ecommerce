import React from 'react'

import Banner from './banner/Banner';
import Categories from './Categories';
import RandomItems from './RandomItems';

export default function Home({ isMenuScrolled }) {
    return (
        <section>
            <div className='flex '>
                <div className={`${isMenuScrolled ? 'lg:pt-52 md:pt-48 sm:pt-48 pt-28' : 'lg:pt-40 md:pt-28 sm:pt-20 pt-2'} h-96 md:h-[500px] lg:h-[600px] container  `}>
                    <Banner className="z-0" />
                </div>
            </div>
            <div className="container mx-auto   font-nunito">
                <div className="flex justify-center flex-wrap -mx-4">
                    <Categories />
                </div>
            </div>
            <div className="container mx-auto   font-nunito">
                <div className="flex justify-center flex-wrap -mx-4">
                    <RandomItems />
                </div>
            </div>
        </section>
    )
}
