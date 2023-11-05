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

    const BANNER_API = ' http://localhost:3333/banner'
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
                    <SwiperSlide className='font-poppins ' key={banner.id}>
                        <li className='lg:h-[50vh] h-[25vh] w-full relative bg-[#F7F7F7] overflow-hidden rounded-xl'>
                            <img className='h-full rounded-xl object-contain lg:object-none ' src={require(`../../../assets/slider/${banner.image}`)} />
                            <div className='absolute top-0 left-0 h-full w-full flex text-left'>
                                <div className='my-auto lg:space-y-2 md:space-y-1 md:pl-20 lg:pl-40 sm:pl-10 px-3 font-semibold text-slate-800'>
                                    <p className='md:text-md'>{banner.offer_detail}</p>
                                    <p className='lg:text-2xl md:text-xl'>{banner.product_name}</p>
                                    <p><span className='lg:text-2xl'>starting at</span><span className='text-violet-600 lg:text-4xl md:text-2xl'> ₹{banner.price}.00</span></p>
                                    <button className='py-1 px-2 w-28 bg-cyan-400 rounded-3xl text-cyan-50 font-bold'>Shop Now</button>
                                </div>
                            </div>
                        </li>
                    </SwiperSlide>
                )))

            }

        </Swiper>
    )
}
