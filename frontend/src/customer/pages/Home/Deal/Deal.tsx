import React from 'react'
import DealCard from './DealCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const Deal = () => {
  return (
    <div className="py-5 lg:px-20 border-t border-gray-200">
      <h1 className="text-center text-5xl py-10 text-gray-500 ">Today's Deals</h1>

      <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            speed={11000}   // 🔥 smooth slow transition
            autoplay={{
                delay: 0,     // 🔥 no pause
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
        
      >
        {[1,1,1,1,1,1].map((_, index) => (
          <SwiperSlide key={index}>
            <DealCard />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Deal