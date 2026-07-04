import React, { useState } from 'react'
import CartItem from './CartItem'
import PricingCard from './PricingCard'
import { Button, IconButton } from '@mui/material'
import { Close, LocalOffer } from '@mui/icons-material'
import { teal } from '@mui/material/colors'

const Cart = () => {
    const [open, setOpen] = useState(false);
    const cartItem=[1,1,1,1,1];
    const actoive = open?cartItem:cartItem.slice(0,2);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[60%_30%] lg:gap-10 px-5 lg:px-20 pt-2 lg:pt-5">

        {/* LEFT CART */}
        <div className='lg:ml-20'>
            {actoive.map((item)=><div><CartItem /> </div>)}

            <div>
                <Button variant='text' onClick={()=>setOpen(!open)}>{open?"Hide":"View All"}</Button>
            </div>
            
        </div>

        {/* RIGHT PRICING */}
        <div className="lg:sticky lg:top-20 h-fit ">

          <div className=' w-full space-y-2 rounded-md border border-gray-300 mb-2'>
                
                <div className=' p-4'>
                    <div className='text-gray-400 p-2'>
                        <LocalOffer sx={{color:teal[200]}}/>
                        <span className='ml-3'>Apply Coupon</span>
                    </div>
                    {!false?<div className='flex '>
                        <input className='border-gray-300 border rounded-md w-full full mr-3' type="text" />
                        <Button variant='text'>APPLY</Button>
                    </div>:
                        <div className='flex '>
                            <div className='border-gray-300 border rounded-md w-auto full mr-3'>
                                <span className='ml-3'>SACHI30 applied</span>
                                <IconButton>
                                    <Close/>
                                </IconButton>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
            <PricingCard />
        </div>

        </div>
    </div>
  )
}

export default Cart
