import React from 'react'
import { SwiperSlide } from 'swiper/react';
import bImage1 from '../../../assets/slider/1.jpg'
import bImage2 from '../../../assets/slider/2.jpg'
import bImage3 from '../../../assets/slider/3.jpg'
import bImage4 from '../../../assets/slider/4.jpg'
import bImage5 from '../../../assets/slider/5.jpg'
import bImage9 from '../../../assets/slider/9.jpg'
import bImage10 from '../../../assets/slider/10.jpg'
import bImage11 from '../../../assets/slider/11.jpg'
import bImage12 from '../../../assets/slider/12.jpg'
import bImage13 from '../../../assets/slider/13.jpg'

export default function BannerImage() {
    return (
        <>
            <SwiperSlide>
                <img src={bImage1} className='rounded-xl' />
            </SwiperSlide>
        </>
    )
}
