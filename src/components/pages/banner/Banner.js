import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

export default function Banner() {
    const [bannerDetails, setBannerDetails] = useState([])


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const BANNER_API=' http://localhost:3333/banner'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(BANNER_API);
                setBannerDetails(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData()
    }, [])

    return (
        <Swiper
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                bannerDetails.map((banner => (
                    <SwiperSlide className='relative font-poppins min-h-[440px]' key={banner.id}>
                        <div className='absolute flex '>
                            <div className='absolute top-26 sx:-ml-20 sx:top-40 md:-ml-52 md:pl-2 sm:-ml-52 sm sm:pt-20 lg:-ml-52 -ml-12 space-y-2  text-start flex-col mt-10 flex justify-center items-center w-full'>
                                <div className='fixed top-20 sm:top-30 sm:space-y-1 md:top-28 md:space-y-2'>
                                    <p className='text-sm sm:text-lg md:text-xl'>{banner.offer_detail}</p>
                                    <h2 className='text-2xl sm:text-3xl md:text-5xl w-36'>{banner.product_name}</h2>
                                    <p><span className='text-md md:text-2xl'>starting at</span> <span className='text-violet-600 text-lg sm:text-3xl md:text-4xl'>₹{banner.price}.00</span></p>
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
            
        </Swiper>
    )
}
