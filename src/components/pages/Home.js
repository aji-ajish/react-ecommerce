import React from 'react'

import Banner from './banner/Banner';

export default function Home({isMenuScrolled}) {
    return (
        <section className='h-screen flex '>
            <div className={`${isMenuScrolled?'lg:pt-52 pt-48':'lg:pt-40 pt-24'} h-96 md:h-[500px] lg:h-[600px] container  `}>
            <Banner className="z-0"/>
            </div>
        </section>
    )
}
