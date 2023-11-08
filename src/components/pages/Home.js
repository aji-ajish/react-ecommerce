import React, { useEffect, useState } from 'react'


import Banner from './banner/Banner';
import Categories from './Categories';
import RandomItems from './RandomItems';
import Dvider from '../layouts/Dvider';


export default function Home({ isMenuScrolled }) {
    

    return (
        <>
            {loading ? (
                <div className="loader-container h-screen w-screen flex items-center justify-center ">
                    <Dna
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            ) : (
                <section className={`${isMenuScrolled ? 'pt-48 lg:pt-52' : 'pt-24 lg:pt-40'} p-0 px-2 container mx-auto`}>
                    <div className='relative '>
                        <ul>
                            <Banner />
                        </ul>
                    </div>
                    <div className="container mx-auto font-nunito relative">
                        <Dvider title={"Categories"} />
                        <div className="flex justify-center flex-wrap -mx-4">
                            <Categories />
                        </div>
                    </div>
                    <div className="container mx-auto font-nunito">
                        <Dvider title={"Products"} />
                        <div className="flex justify-center flex-wrap -mx-4">
                            <RandomItems />
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
