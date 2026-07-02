import { Add, AddShoppingCart, AssuredWorkload, CardMembership, FavoriteBorder, LocalShipping, Remove, Shield } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Button, Divider } from '@mui/material';
import { teal } from '@mui/material/colors';
import React, { useState } from 'react'
import Review from '../Review/Review';
import SimilarProduct from './SimilarProduct';
import RatingCard from '../Review/RatingCard';

const Productdetails = () => {
  const [quantiry, setQuantity] = React.useState(1);

  const review=[1,1,1];
  const [seeAll,setSeeAll] = useState(false);
  const buttonactive = seeAll?review :review.slice(0,1);

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE98PY6i1yZSzzihUP5A_lAHvRJYd7Tf5_Ubk6F5YfQw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxl1l2pfYPuiyP0agtwD4FMu1amCnZ2xZWM-bNwexBg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFhBcYyn2biDfNDN2QjQite4jbLztuxgwAE5T2qKqX0SmbivGcpLu-7Ku&s=10"
  ];

  return (
    <div className="px-5 lg:px-20 pt-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

        <section className="flex flex-col lg:flex-row gap-5 py-5">

          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">

            {images.map((item)=><div>
              <img 
              className="w-full  lg:w-[120px] lg:h-[120px] object-cover rounded-md cursor-pointer"
              src={item} 
              alt="" />
            </div>)}
          </div>
          <div className="w-full lg:w-[80%]">

            <img 
              className="w-full lg:w-[450px] lg:h-[500px] object-cover rounded-md cursor-pointer" 
              src="https://static.wixstatic.com/media/ca64a6_113a94e17dfd4326a1f9430cb7164357~mv2.jpg/v1/fill/w_480,h_640,fp_0.46_0.24,q_90,enc_avif,quality_auto/ca64a6_113a94e17dfd4326a1f9430cb7164357~mv2.jpg" 
              alt="" />
          </div>
        </section>

        <section className="flex flex-col gap-3 py-5">
          <h1 className="text-2xl font-bold text-teal-600">THilakawardana Saree</h1>
          <p className="text-lg font-semibold text-gray-600">women red color saree</p>

          {/* Rating */}
          <div className="flex justify-between item-center py-2 border border-teal-400 w-[180px] px-3 mt-3">
               <div className="flex gap-1 items-center">
                  <span>4</span>
                    <StarIcon sx={{color:teal[500], fontSize: "17px"}}/>
               </div>
                <Divider orientation='vertical' flexItem/>
                  <p>350 Ratings</p>
          </div>
          <div className="gap-1">
            <div className="price flex items-center gap-3 mt-3 font-sans text-xl">
              <span className=" text-gray-700">Rs.800</span>
              <span className=" text-gray-400 line-through">Rs.1000</span>
              <span className=" font-semibold text-teal-600">20% off</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Inclusive of all taxes</p>
          </div>

          <div className="flex flex-col gap-3 mt-7">
            <div className="flex items-center gap-4">
              <Shield sx={{color:teal[500], fontSize: "20px"}}/>
              <p>Authenticated and quality azured</p>
            </div>
            <div className="flex items-center gap-4">
              <AssuredWorkload sx={{color:teal[500], fontSize: "20px"}}/>
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{color:teal[500], fontSize: "20px"}}/>
              <p>pre shipping and retured</p>
            </div>
            <div className="flex items-center gap-4">
              <CardMembership sx={{color:teal[500], fontSize: "20px"}}/>
              <p>pay on delivary might be avaliable</p>
            </div>

          </div>
          <div className="mt-7 space-y-7">
              <h1 className="uppercase font-semibold">Quantity</h1>
              <div>
                <Button disabled={quantiry <= 1} onClick={() => setQuantity(quantiry - 1)}><Remove/></Button>
                <span className="px-3">{quantiry}</span>
                <Button onClick={() => setQuantity(quantiry + 1)}><Add/></Button>
              </div>
          </div>

          <div className="mt-5 flex items-center gap-4">
              <Button startIcon={<AddShoppingCart/>} variant="contained" sx={{backgroundColor:teal[500], "&:hover":{backgroundColor:teal[600]}}}>
                Add To Bag
              </Button>

              <Button startIcon={<FavoriteBorder/>} variant="outlined" sx={{borderColor:teal[500], color:teal[500]}}>
                Wishlist
              </Button>
          </div>

          <div className="mt-5 font-semibold first-letter:uppercase ">
              <p>a saree is a timeless, unstitched garment from the Indian subcontinent, consisting of 5 to 9 yards of flowing fabric draped elegantly around the body. It is traditionally paired with a fitted upper bodice (blouse) and a waist-to-floor underskirt (petticoat).</p>
          </div>

          <div>
            <RatingCard/>
          </div>
          <div>
            <Review/>
          </div>
        </section>
      </div>
      <Divider/>
      <div className='py-5'>
        <h1 className='text-lg font-bold text-teal-600'>Similar product</h1>
        <div>
           <SimilarProduct/>
        </div>
      </div>
    </div>
  )
}

export default Productdetails
