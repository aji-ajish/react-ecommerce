import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const bannerImage = [
        {
            id: 1,
            image: "1.jpg",
            offer_detail: "Sale offer 20%",
            product_name: "Samsung Galaxy S9",
            price: 20999.0
        },
        {
            id: 2,
            image: "2.jpg",
            offer_detail: "Sale offer 20%",
            product_name: "All in One PCs",
            price: 50999.0
        },
        {
            id: 3,
            image: "3.jpg",
            offer_detail: "Sale offer 20%",
            product_name: "Camera Drones",
            price: 15999.0
        },
        {
            id: 4,
            image: "4.jpg",
            offer_detail: "Sale offer 20%",
            product_name: "DSLR Camera",
            price: 20999.0
        }
    ]

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
        {
            bannerImage.map((banner=>(
                <SwiperSlide className='relative'>
                <div className='absolute flex'>
                    <div className='absolute top-36 sx:-ml-20 sx:top-40 md:-ml-52 md:pl-2 sm:-ml-52 sm sm:pt-20 lg:-ml-52 -ml-12 space-y-2  text-start flex-col mt-10 flex justify-center items-center w-full'>
                        <div className='fixed top-6 sm:top-30 sm:space-y-1 md:top-28 md:space-y-2'>
                            <p className='text-sm sm:text-lg md:text-xl'>{banner.offer_detail}</p>
                            <h2 className='text-2xl sm:text-3xl md:text-5xl w-36'>{banner.product_name}</h2>
                            <p><span className='text-md md:text-2xl'>starting at</span> <span className='text-violet-600 text-lg sm:text-3xl md:text-4xl'>{banner.price}</span></p>
                            <button className='py-1 px-2 w-28 text-sm sm:text-lg sm:px-3 md:text-xl md:w-56 bg-cyan-400 rounded-3xl text-cyan-50 font-bold'>Shop Now</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src={require(`../../../assets/slider/${banner.image}`)} className='rounded-xl object-scale-down' />
                    </div>
                </div>
            </SwiperSlide>
            )))

        }
            
            {/* <SwiperSlide className='relative'>
                <div className='absolute flex'>
                    <div className='absolute top-36 sx:-ml-20 sx:top-40 md:-ml-52 md:pl-2 sm:-ml-52 sm sm:pt-20 lg:-ml-52 -ml-12 space-y-2  text-start flex-col mt-10 flex justify-center items-center w-full'>
                        <div className='fixed top-6 sm:top-30 sm:space-y-1 md:top-28 md:space-y-2'>
                            <p className='text-sm sm:text-lg md:text-xl'>Sale offer 20%</p>
                            <h2 className='text-2xl sm:text-3xl md:text-5xl w-48'>All in One PCs</h2>
                            <p><span className='text-md md:text-2xl'>starting at</span> <span className='text-violet-600 text-lg sm:text-3xl md:text-4xl'>₹50999.00</span></p>
                            <button className='py-1 px-2 w-28 text-sm sm:text-lg sm:px-3 md:text-xl md:w-56 bg-cyan-400 rounded-3xl text-cyan-50 font-bold'>Shop Now</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src={bImage2} className='rounded-xl object-scale-down' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <div className='absolute flex'>
                    <div className='absolute top-36 sx:-ml-20 sx:top-40 md:-ml-52 md:pl-2 sm:-ml-52 sm sm:pt-20 lg:-ml-52 -ml-12 space-y-2  text-start flex-col mt-10 flex justify-center items-center w-full'>
                        <div className='fixed top-6 sm:top-30 sm:space-y-1 md:top-28 md:space-y-2'>
                            <p className='text-sm sm:text-lg md:text-xl'>Sale offer 20%</p>
                            <h2 className='text-2xl sm:text-3xl md:text-5xl w-36'>Camera Drones</h2>
                            <p><span className='text-md md:text-2xl'>starting at</span> <span className='text-violet-600 text-lg sm:text-3xl md:text-4xl'>₹15999.00</span></p>
                            <button className='py-1 px-2 w-28 text-sm sm:text-lg sm:px-3 md:text-xl md:w-56 bg-cyan-400 rounded-3xl text-cyan-50 font-bold'>Shop Now</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src={bImage3} className='rounded-xl object-scale-down' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <div className='absolute flex'>
                    <div className='absolute top-36 sx:-ml-20 sx:top-40 md:-ml-52 md:pl-2 sm:-ml-52 sm sm:pt-20 lg:-ml-52 -ml-12 space-y-2  text-start flex-col mt-10 flex justify-center items-center w-full'>
                        <div className='fixed top-6 sm:top-30 sm:space-y-1 md:top-28 md:space-y-2'>
                            <p className='text-sm sm:text-lg md:text-xl'>Sale offer 20%</p>
                            <h2 className='text-2xl sm:text-3xl md:text-5xl w-36'>DSLR Camera</h2>
                            <p><span className='text-md md:text-2xl'>starting at</span> <span className='text-violet-600 text-lg sm:text-3xl md:text-4xl'>₹20999.00</span></p>
                            <button className='py-1 px-2 w-28 text-sm sm:text-lg sm:px-3 md:text-xl md:w-56 bg-cyan-400 rounded-3xl text-cyan-50 font-bold'>Shop Now</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src={bImage4} className='rounded-xl object-scale-down' />
                    </div>
                </div>
            </SwiperSlide> */}

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    )
}
