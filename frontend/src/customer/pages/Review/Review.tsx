import React, { useState } from 'react'
import ReviewCard from './ReviewCard'
import { Button } from '@mui/material';
import RatingCard from './RatingCard';

const Review = () => {
    const review=[1,1,1];
  const [seeAll,setSeeAll] = useState(false);
  const buttonactive = seeAll?review :review.slice(0,1);
  const data = [
    { label: "Excellent", value: 45, color: "#4caf50" },
    { label: "Good", value: 30, color: "#2196f3" },
    { label: "Medium", value: 15, color: "#ff9800" },
    { label: "Poor", value: 10, color: "#f44336" },
  ];

    const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <div className='px-14 py-5'>
      <div className='w-full grid grid-cols-2 px-5'>
        
          <div className='sectionOne w-full lg:w-[60%] flex flex-wrap lg:flex-col gap-2 '>
            <img 
              className="w-full lg:w-[600px] lg:h-[450px] object-cover rounded-md cursor-pointer" 
              src="https://static.wixstatic.com/media/ca64a6_113a94e17dfd4326a1f9430cb7164357~mv2.jpg/v1/fill/w_480,h_640,fp_0.46_0.24,q_90,enc_avif,quality_auto/ca64a6_113a94e17dfd4326a1f9430cb7164357~mv2.jpg" 
              alt="" />

              <h1 className='text-md font-semibold text-teal-600'>thilkawardana saree</h1>
              <p className='text-gray-500'>women red color saree</p>

              <div className="price flex items-center gap-3 mt-3 font-sans text-xl">
              <span className=" text-gray-700">Rs.800</span>
              <span className=" text-gray-400 line-through">Rs.1000</span>
              <span className=" font-semibold text-teal-600">20% off</span>
            </div>
          </div>
          <div className='sectionTwo w-full flex flex-wrap lg:flex-col gap-3'>
            <h1 className='font-bold text-xl'>Review & Rating</h1>
            <div>
              <RatingCard/>
            </div>

            <div className="reviewSection my-5">
              <h1 className='py-3'>Review</h1>
              {buttonactive.map((item)=><ReviewCard/> )}
              
              {/*see all button */}
              <div>
              <Button onClick={() => setSeeAll(prev => !prev)}>
                {seeAll ? "Hide" : `View All ${review.length} Reviews`}
              </Button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
    
  )
}

export default Review
