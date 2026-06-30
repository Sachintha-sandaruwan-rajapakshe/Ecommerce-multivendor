import { Margin, Shop, Storefront } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'

const BecomeASeller = () => {
  return (
    <div className="lg:px-20 relative h-[300px] lg:h-[450px] object-cover">
      <img className="w-full h-full object-cover object-top" src="https://thumbs.dreamstime.com/b/side-profile-view-indian-ethnicity-girl-looking-empty-copyspace-side-profile-view-smiling-happy-millennial-indian-ethnicity-169055918.jpg" alt=""  />

        <div className="absolute inset-0 p-4 text-gray-500 transform translate-y-5/12 translate-x-2/12 md:w-[500px] md:h-[300px] ">

            <h1 className="text-2xl font-bold mb-2">
                Sell Your Products
            </h1>

            <p>
                Join <span className="logo font-bold text-3xl">Sachi Bazzar</span><br />
                and reach a wider audience for your products.<br />
                Sign up today to become a seller and start growing your business!
            </p>
            
            <div className="mt-4">
                <Button variant="contained" color="primary" className="mt-4 gap-1">
                   <Storefront/> Become a Seller
                </Button>
            </div>
            
            

        </div>
        
    </div>
  )
}

export default BecomeASeller
