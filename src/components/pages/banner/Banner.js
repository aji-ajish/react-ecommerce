import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Dna } from "react-loader-spinner";

export default function Banner() {
    const [bannerDetails, setBannerDetails] = useState([])
    const [loading, setLoading] = useState(true);


    const BANNER_API = ' http://localhost:3333/banner'
    useEffect(() => {
        // Fetch product details based on the ID from your API
            fetch(BANNER_API)
          .then((response) => response.json())
          .then((data) => setBannerDetails(data)
          ,setLoading(false)
          )
          .catch((error) => console.error('Error fetching product:', error));
        
      }, []);
    


    return (
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
                    <SwiperSlide className='font-poppins  overflow-hidden' key={banner.id}>
                        <li className='lg:h-[50vh] h-[25vh] w-full relative bg-[#F7F7F7] rounded-xl'>
                            <img className='h-full rounded-full  object-contain lg:object-none ' src={require(`../../../assets/${banner.image}`)} />
                            <div className='absolute top-0 left-0 h-full w-full flex text-left'>
                                <div className='my-auto lg:space-y-2 md:space-y-1 md:pl-20 lg:pl-40 sm:pl-10 px-3 font-semibold text-slate-800'>
                                    <p className='md:text-md'>{banner.offer_detail}</p>
                                    <p className='lg:text-2xl md:text-xl'>{banner.product_name}</p>
                                    <p><span className='lg:text-2xl'>starting at</span><span className='text-violet-600 lg:text-4xl md:text-2xl'> ₹{banner.price}.00</span></p>
                                    <button className=' py-1 px-2 w-28 bg-cyan-400 rounded-3xl text-cyan-50 font-bold'>Shop Now</button>
                                </div>
                            </div>
                        </li>
                    </SwiperSlide>
                )))

            }

        </Swiper>
        
    )
    )}
}
