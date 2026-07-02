import { Chat, Favorite } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SimilarProductCard = () => {
    const images =[
    
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKZ7ppUWjDwVo7SA0YHXTVTR7M1157yhcOg0czbudEw&s=10",
   
      "https://i.pinimg.com/736x/03/a7/a4/03a7a46125466462648b1ad32430a7b4.jpg",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKZ7ppUWjDwVo7SA0YHXTVTR7M1157yhcOg0czbudEw&s=10"
  ]
  return (
    <>
      <div className="group px-4 relative cursor-pointer transform transition duration-500 hover:scale-105">
        <div className='mt-5 text-center w-[250px] h-[400px] bg-lime-50 rounded-md'>
          <Swiper 
            className='w-[230px] h-[230px]' 
            spaceBetween={1} 
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}>

            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img className='w-full h-full object-cover object-top rounded-md' src={item} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" flex justify-center top-2 gap-5 ">
            <IconButton>
              <Favorite sx={{color:"#6C9662"}}/>
            </IconButton>

            <IconButton>
              <Chat sx={{color:"#6C9662"}} />
            </IconButton>
          </div>
          <div className="details space-y-1 ">
            <div className="">
              <h1 className='text-lg font-semibold text-amber-500'>Niky</h1>
            </div>

            <div className="description">
              <h1 className='text-sm '>Men's T-Shirt Dri-Fit Short Sleeve Tops Sports Gym </h1>
            </div>

            <div className="price">
              <span className='text-sm font-semibold text-emerald-600 '>Rs. 800.00</span>
              <del className='text-sm font-semibold ml-2 '>Rs.1000.00 </del>
              <div><span className='text-sm font-semibold text-red-500 ml-2'>20% OFF</span></div>
              
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default SimilarProductCard



